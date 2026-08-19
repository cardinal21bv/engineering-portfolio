import { spawn } from "node:child_process";
import { fileURLToPath } from "node:url";
import path from "node:path";
import {
  cp,
  mkdir,
  readFile,
  readdir,
  rm,
  writeFile,
} from "node:fs/promises";

const projectRoot = process.cwd();
const outputDir = path.join(projectRoot, "pages-dist");
const clientDir = path.join(projectRoot, "dist", "client");
const port = Number(process.env.PAGES_EXPORT_PORT ?? 4173);
const repositoryName =
  process.env.GITHUB_REPOSITORY?.split("/").at(-1) ?? "engineering-portfolio";
const basePath =
  process.env.PAGES_BASE_PATH ??
  (repositoryName.endsWith(".github.io") ? "" : `/${repositoryName}`);
const siteUrl = `https://cardinal21bv.github.io${basePath}/`;

const vinextEntry = fileURLToPath(import.meta.resolve("vinext"));
const vinextCli = path.join(path.dirname(vinextEntry), "cli.js");
let serverOutput = "";
const server = spawn(
  process.execPath,
  [vinextCli, "start", "--port", String(port)],
  {
    cwd: projectRoot,
    env: { ...process.env, PORT: String(port) },
    stdio: ["ignore", "pipe", "pipe"],
  },
);

for (const stream of [server.stdout, server.stderr]) {
  stream.on("data", (chunk) => {
    serverOutput = (serverOutput + chunk.toString()).slice(-12000);
  });
}

const waitForPage = async () => {
  const deadline = Date.now() + 60000;
  while (Date.now() < deadline) {
    if (server.exitCode !== null) {
      throw new Error(`Portfolio server exited before export.\n${serverOutput}`);
    }
    try {
      const response = await fetch(`http://127.0.0.1:${port}/`);
      if (response.ok) return response.text();
    } catch {
      // The server is still starting.
    }
    await new Promise((resolve) => setTimeout(resolve, 500));
  }
  throw new Error(`Timed out waiting for the portfolio server.\n${serverOutput}`);
};

const rewriteRootPaths = (content) => {
  if (!basePath) return content;
  return content
    .replace(
      /\b(href|src)=(["'])\/(?!\/)/g,
      (_, attribute, quote) => `${attribute}=${quote}${basePath}/`,
    )
    .replace(
      /url\((["']?)\/(?!\/)/g,
      (_, quote) => `url(${quote}${basePath}/`,
    );
};

const rewriteCssFiles = async (directory) => {
  for (const entry of await readdir(directory, { withFileTypes: true })) {
    const entryPath = path.join(directory, entry.name);
    if (entry.isDirectory()) {
      await rewriteCssFiles(entryPath);
    } else if (entry.name.endsWith(".css")) {
      const css = await readFile(entryPath, "utf8");
      await writeFile(entryPath, rewriteRootPaths(css));
    }
  }
};

try {
  let html = await waitForPage();

  // The portfolio is fully server-rendered. Removing hydration scripts makes
  // the GitHub Pages copy a durable static document while native video,
  // links, and disclosure elements remain interactive.
  html = html
    .replace(/<script\b[^>]*>[\s\S]*?<\/script>/gi, "")
    .replace(/<link\b(?=[^>]*rel=(["'])modulepreload\1)[^>]*>/gi, "")
    .replace(
      "</head>",
      `<link rel="canonical" href="${siteUrl}"/></head>`,
    );
  html = rewriteRootPaths(html);

  await rm(outputDir, { recursive: true, force: true });
  await mkdir(outputDir, { recursive: true });
  await cp(clientDir, outputDir, { recursive: true });
  await rewriteCssFiles(outputDir);
  await writeFile(path.join(outputDir, "index.html"), html);
  await writeFile(path.join(outputDir, "404.html"), html);
  await writeFile(path.join(outputDir, ".nojekyll"), "");

  console.log(`GitHub Pages export created at ${outputDir}`);
  console.log(`Expected site URL: ${siteUrl}`);
} finally {
  server.kill("SIGTERM");
}
