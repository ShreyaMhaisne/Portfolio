import React from "react";
import "./Skills.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const Skills = () => {
  useGSAP(() => {
    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".skills-section",
        scroller: "body",
        start: "top 80%",
        end: "bottom 60%",
        scrub: false,
        toggleActions: "play reverse play reverse",
      }
    });

    tl.from(".skills-section", {
      y: 50,
      opacity: 0,
      duration: 0.4,
      ease: "power3.out"
    })
    .from(".skills-section p", {
      y: 30,
      opacity: 0,
      duration: 0.3,
      ease: "power2.out"
    }, "-=0.4")
    .from(".skill-card", {
      y: 40,
      opacity: 0,
      duration: 0.3,
      stagger: 0.3,
      ease: "power2.out"
    })
    .from(".skill", {
      y: 20,
      opacity: 0,
      duration: 0.3,
      stagger: 0.05,
      ease: "power1.out"
    });
  }, []);

  return (
    <div id="Skills" className="skills-section">
      <h2>SKILLS</h2>
      <p>
        A collection of my technical skills and expertise honed through various
        projects and experiences
      </p>

      <div className="skills-grid">

        {/* Frontend */}
        <div className="skill-card">
          <h3>Frontend</h3>
          <div className="skill-items">
            <div className="skill html">HTML</div>
            <div className="skill css">CSS</div>
            <div className="skill js">JavaScript</div>
            <div className="skill react">React JS</div>
            <div className="skill angular">Angular</div>
            <div className="skill next">Next JS</div>
            <div className="skill tailwind">Tailwind CSS</div>
            <div className="skill gsap">GSAP</div>
            <div className="skill bootstrap">Bootstrap</div>
          </div>
        </div>

        {/* Backend */}
        <div className="skill-card">
          <h3>Backend</h3>
          <div className="skill-items">
            <div className="skill node">Node JS</div>
            <div className="skill express">Express JS</div>
            <div className="skill mysql">MySQL</div>
            <div className="skill mongodb">MongoDB</div>
            <div className="skill firebase">Firebase</div>
            <div className="skill postgres">PostgreSQL</div>
          </div>
        </div>

        {/* Languages */}
        <div className="skill-card">
          <h3>Languages</h3>
          <div className="skill-items">
            <div className="skill c">C</div>
            <div className="skill cpp">C++</div>
            <div className="skill java">Java</div>
            <div className="skill python">Python</div>
          </div>
        </div>

        {/* Tools */}
        <div className="skill-card">
          <h3>Tools</h3>
          <div className="skill-items">
            <div className="skill git">Git</div>
            <div className="skill github">GitHub</div>
            <div className="skill vscode">VS Code</div>
            <div className="skill postman">Postman</div>
            <div className="skill vercel">Vercel</div>
            <div className="skill netlify">Netlify</div>
            <div className="skill figma">Figma</div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Skills;
