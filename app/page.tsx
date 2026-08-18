const skills = {
  Controls: ["Siemens S7-1200", "TIA Portal", "PLC Controls", "Instrumentation"],
  Building: ["HVAC", "Building Automation", "Energy Monitoring", "Control Sequences"],
  Engineering: ["SolidWorks", "CATIA", "MATLAB / Simulink", "Python"],
  Practice: ["System Integration", "Troubleshooting", "Technical Documentation"],
};

const Arrow = () => <span aria-hidden="true">↗</span>;

function MediaPlaceholder({ type }: { type: "actuator" | "bas" }) {
  return (
    <div className={`project-media ${type}`} aria-label={`${type === "actuator" ? "Valve actuator" : "Building automation"} project media placeholder`}>
      <div className="media-grid" />
      {type === "actuator" ? (
        <div className="actuator-diagram" aria-hidden="true"><div className="motor">M</div><div className="shaft" /><div className="gear">24:1</div><div className="valve">90°</div></div>
      ) : (
        <div className="bas-diagram" aria-hidden="true"><div>AHU-1</div><i /><div>ZONE 01</div><i /><div>BAS</div></div>
      )}
      <span className="media-label">{type === "actuator" ? "ACTUATOR SYSTEM / MEDIA" : "CONTROL ARCHITECTURE / MEDIA"}</span>
    </div>
  );
}

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
            <p>I design, build, program, integrate, and test electromechanical and building-control systems—connecting mechanical hardware to reliable control logic.</p>
            <div className="actions">
              <a className="button primary" href="/Cameron-McConnell-Resume.pdf">Resume <Arrow /></a>
              <a className="button" href="https://www.linkedin.com" target="_blank" rel="noreferrer">LinkedIn <Arrow /></a>
              <a className="button" href="https://github.com" target="_blank" rel="noreferrer">GitHub <Arrow /></a>
              <a className="text-link" href="#contact">Contact ↓</a>
            </div>
          </div>
        </div>
      </header>

      <section className="reel" aria-labelledby="reel-title">
        <div className="section-heading"><span>00</span><h2 id="reel-title">Engineering Project Highlights</h2><p>45–60 sec reel</p></div>
        <div className="video-placeholder">
          <div className="video-center"><span className="play">▶</span><strong>HIGHLIGHT REEL</strong><small>Hardware • Controls • CAD • Testing</small></div>
          <div className="frame-mark tl" /><div className="frame-mark tr" /><div className="frame-mark bl" /><div className="frame-mark br" />
        </div>
      </section>

      <section className="projects" id="projects" aria-labelledby="projects-title">
        <div className="section-heading"><span>01</span><h2 id="projects-title">Featured Projects</h2><p>Selected engineering work</p></div>
        <article className="project featured">
          <MediaPlaceholder type="actuator" />
          <div className="project-info">
            <div className="project-number">PROJECT 01 / CONTROLS + MECHATRONICS</div>
            <h3>PLC-Controlled<br />Quarter-Turn Valve Actuator</h3>
            <p className="summary">A purpose-built electromechanical actuator with closed-loop position control, protection logic, and a Siemens PLC interface—designed from mechanical drivetrain through system commissioning.</p>
            <ul>
              <li>Programmed automated open/close sequences and interlocks in TIA Portal</li><li>Integrated encoder feedback, limit switches, and motor-current sensing</li><li>Designed the geared drivetrain, enclosure, and valve coupling in CAD</li><li>Built and tested a complete panel-to-hardware control system</li>
            </ul>
            <div className="tech-line"><b>TOOLS</b><span>S7-1200</span><span>TIA Portal</span><span>CAD</span><span>DC Motor Control</span></div>
            <a className="project-link" href="#contact">View Project <Arrow /></a>
          </div>
        </article>
        <article className="project secondary">
          <div className="project-info">
            <div className="project-number">PROJECT 02 / HVAC + BUILDING AUTOMATION</div>
            <h3>Climate-Responsive<br />Office BAS Design</h3>
            <p className="summary">A whole-building controls concept connecting HVAC load calculations and equipment selection with sensors, control sequences, energy monitoring, alarms, and operator visibility.</p>
            <ul>
              <li>Calculated heating and cooling loads to guide equipment selection</li><li>Developed occupancy, CO₂, and temperature-based control sequences</li><li>Defined monitoring points, alarms, and energy-performance metrics</li><li>Mapped field devices into a coherent BAS architecture</li>
            </ul>
            <div className="tech-line"><b>TOOLS</b><span>HVAC</span><span>BAS</span><span>CO₂ Sensing</span><span>Alarms</span></div>
            <a className="project-link" href="#contact">View Project <Arrow /></a>
          </div>
          <MediaPlaceholder type="bas" />
        </article>
      </section>

      <section className="skills" id="skills" aria-labelledby="skills-title">
        <div className="section-heading"><span>02</span><h2 id="skills-title">Technical Toolkit</h2><p>Capabilities &amp; platforms</p></div>
        <div className="skill-grid">{Object.entries(skills).map(([group, items]) => <div className="skill-group" key={group}><h3>{group}</h3>{items.map(item => <span key={item}>{item}</span>)}</div>)}</div>
      </section>

      <section className="contact" id="contact" aria-labelledby="contact-title">
        <div className="contact-copy"><span>LET’S BUILD SOMETHING THAT WORKS.</span><h2 id="contact-title">Looking for an engineer who can connect the mechanical system to the controls?</h2></div>
        <div className="contact-actions"><a className="button light" href="mailto:cameron@example.com">cameron@example.com <Arrow /></a><div><a href="https://www.linkedin.com">LinkedIn ↗</a><a href="https://github.com">GitHub ↗</a></div></div>
      </section>
      <footer><span>CAMERON McCONNELL</span><span>MECHANICAL / CONTROLS / AUTOMATION</span><span>© 2026</span></footer>
    </main>
  );
}
