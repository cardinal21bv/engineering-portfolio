const skills = {
  Controls: ["Siemens S7-1200 PLC", "TIA Portal", "PLC Controls", "Instrumentation", "Arduino"],
  Building: ["HVAC", "Building Automation", "Energy Monitoring", "Control Sequences"],
  Engineering: ["SolidWorks", "Electrical Design / Schematics", "MATLAB / Simulink", "Python"],
  Practice: ["System Integration", "Troubleshooting", "Technical Documentation"],
};

const Arrow = () => <span aria-hidden="true">↗</span>;

export default function Home() {
  return (
    <main>
      <nav aria-label="Primary navigation">
        <a className="wordmark" href="#top" aria-label="Cameron McConnell home">CM<span>.</span></a>
        <div className="nav-links"><a href="#projects">Projects</a><a href="#skills">Skills</a><a href="#contact">Contact</a></div>
      </nav>

      <header className="hero" id="top">
        <div className="eyebrow"><span className="status-dot" />Available for engineering roles</div>
        <h1>Cameron<br />McConnell</h1>
        <div className="hero-lower">
          <h2>Mechanical Engineer <span>/</span><br /> Controls &amp; Building Automation</h2>
          <div className="hero-copy">
            <p>I build and commission automated systems that connect control software, electrical hardware, sensors, and electromechanical equipment.</p>
            <div className="actions">
              <a className="button primary" href="/Cameron-McConnell-Resume.pdf">Resume <Arrow /></a>
              <a className="button" href="https://www.linkedin.com/in/cameronmcc" target="_blank" rel="noreferrer">LinkedIn <Arrow /></a>
              <a className="button" href="https://github.com" target="_blank" rel="noreferrer">GitHub <Arrow /></a>
              <a className="text-link" href="#contact">Contact ↓</a>
            </div>
          </div>
        </div>
      </header>

      <section className="reel" aria-labelledby="reel-title">
        <div className="section-heading"><span>00</span><h2 id="reel-title">Engineering Project Highlights</h2><p>3:04 project reel</p></div>
        <div className="reel-intro"><p>A quick look at the physical systems, control software, CAD, integration, and testing behind my work.</p><span>Hardware&nbsp;&nbsp;•&nbsp;&nbsp;Controls&nbsp;&nbsp;•&nbsp;&nbsp;CAD&nbsp;&nbsp;•&nbsp;&nbsp;Testing</span></div>
        <video className="highlight-video" controls preload="metadata" poster="/projects/main-project/front_image.PNG" playsInline><source src="/projects/main-project/highlight-web.mp4" type="video/mp4" />Your browser does not support embedded video.</video>
      </section>

      <section className="projects" id="projects" aria-labelledby="projects-title">
        <div className="section-heading"><span>01</span><h2 id="projects-title">Featured Projects</h2><p>Selected engineering work</p></div>
        <article className="project featured">
          <div className="project-visual">
            <video className="project-video" controls preload="metadata" playsInline><source src="/projects/valve-actuator/valve-actuator-web.mp4" type="video/mp4" />Your browser does not support this video format.</video>
            <span className="visual-caption">SYSTEM DEMO / PLC + HMI + PHYSICAL ACTUATOR</span>
          </div>
          <div className="project-info">
            <div className="project-number">PROJECT 01 / CONTROLS + MECHATRONICS</div>
            <h3>Industrial Valve<br />Automation System</h3>
            <p className="summary">An end-to-end quarter-turn valve system integrating Siemens PLC automation, custom HMI/SCADA software, embedded motion control, sensing, safety logic, and a custom mechanical drivetrain. I built the complete prototype for $1,500 out of pocket.</p>
            <div className="project-metrics"><div><b>$1.5K</b><span>Prototype cost</span></div><div><b>$2.5K</b><span>Estimated professional build</span></div><div><b>6</b><span>Control layers</span></div></div>
            <ul>
              <li>Programmed PLC sequencing, command arbitration, interlocks, and fault handling in TIA Portal</li><li>Built custom HMI/SCADA software for local, remote, jog, and automatic control</li><li>Integrated encoder feedback, dual limit switches, and current-based fault sensing</li><li>Designed and commissioned the mechanical, electrical, embedded, and software layers</li>
            </ul>
            <div className="tech-line"><b>TOOLS</b><span>S7-1200 PLC</span><span>TIA Portal</span><span>SCADA / HMI</span><span>Arduino</span><span>SolidWorks</span></div>
          </div>
          <details className="case-study"><summary>Explore the 4-page case study <span>Open +</span></summary><div className="case-grid">{[1,2,3,4].map((page) => <a href={`/projects/valve-actuator/${page}.png`} target="_blank" rel="noreferrer" key={page}><img src={`/projects/valve-actuator/${page}.png`} alt={`Industrial valve automation case study page ${page}`} loading="lazy" /><span>Page {page} <Arrow /></span></a>)}</div></details>
        </article>
        <article className="project secondary">
          <div className="project-info">
            <div className="project-number">PROJECT 02 / HVAC + BUILDING AUTOMATION</div>
            <h3>Climate-Responsive<br />Office BAS Design</h3>
            <p className="summary">A climate-responsive 260 ft² Seattle office design connecting envelope decisions and Manual J load calculations with equipment selection, controls planning, and energy-performance analysis.</p>
            <div className="project-metrics"><div><b>7.5K</b><span>Heating BTU/h</span></div><div><b>6.5K</b><span>Cooling BTU/h</span></div><div><b>20–35%</b><span>Energy reduction</span></div></div>
            <ul>
              <li>Completed Manual J heating and cooling load calculations</li><li>Specified a 9,000 BTU/h ductless heat pump and high-performance envelope</li><li>Developed occupancy, CO₂, lighting, thermostat, and alarm control concepts</li><li>Evaluated operating savings, installed cost, and projected 8–11 year payback</li>
            </ul>
            <div className="tech-line"><b>TOOLS</b><span>HVAC</span><span>Manual J</span><span>BAS</span><span>Energy Analysis</span></div>
          </div>
          <a className="project-image" href="/projects/office-bas/office-bas-1.jpg" target="_blank" rel="noreferrer"><img src="/projects/office-bas/office-bas-1.jpg" alt="Climate-responsive office design executive summary" loading="lazy" /><span>EXECUTIVE SUMMARY / OPEN FULL SIZE <Arrow /></span></a>
          <details className="case-study"><summary>Explore calculations &amp; supporting work <span>Open +</span></summary><div className="case-grid office-grid">{[1,2,3,4].map((page) => <a href={`/projects/office-bas/office-bas-${page}.jpg`} target="_blank" rel="noreferrer" key={page}><img src={`/projects/office-bas/office-bas-${page}.jpg`} alt={`Climate-responsive office design supporting page ${page}`} loading="lazy" /><span>{page < 3 ? `Case study page ${page}` : `Calculation sheet ${page - 2}`} <Arrow /></span></a>)}</div></details>
        </article>
      </section>

      <section className="skills" id="skills" aria-labelledby="skills-title">
        <div className="section-heading"><span>02</span><h2 id="skills-title">Technical Toolkit</h2><p>Capabilities &amp; platforms</p></div>
        <div className="skill-grid">{Object.entries(skills).map(([group, items]) => <div className="skill-group" key={group}><h3>{group}</h3>{items.map(item => <span key={item}>{item}</span>)}</div>)}</div>
      </section>

      <section className="contact" id="contact" aria-labelledby="contact-title">
        <div className="contact-copy"><span>LET’S BUILD SOMETHING THAT WORKS.</span><h2 id="contact-title">Let’s turn an engineering challenge into a working system.</h2></div>
        <div className="contact-actions"><a className="button light" href="mailto:cm.mcconne@gmail.com">cm.mcconne@gmail.com <Arrow /></a><div><a href="https://www.linkedin.com/in/cameronmcc" target="_blank" rel="noreferrer">LinkedIn ↗</a><a href="https://github.com" target="_blank" rel="noreferrer">GitHub ↗</a></div></div>
      </section>
      <footer><span>CAMERON McCONNELL</span><span>MECHANICAL / CONTROLS / AUTOMATION</span><span>© 2026</span></footer>
    </main>
  );
}
