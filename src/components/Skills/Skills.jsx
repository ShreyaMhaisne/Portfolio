import React from "react";
import "./Skills.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

// FontAwesome & other icons
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaAngular,
  FaNodeJs,
  FaBootstrap,
  FaGitAlt,
  FaGithub,
  FaFigma,
} from "react-icons/fa";
import { 
  SiNextdotjs,
  SiTailwindcss,
  SiGreensock,
  SiExpress,
  SiMongodb,
  SiFirebase,
  SiPostgresql,
  SiMysql,
  SiVercel,
  SiNetlify,
  // SiVisualstudiocode,
  SiPostman,
  SiPython,
} from "react-icons/si";

import { DiJava } from "react-icons/di";   // Java
import { FaCuttlefish } from "react-icons/fa"; // "C" language (C logo is not in SI)
import { SiCplusplus as SiCpp } from "react-icons/si";


// import { DiJava } from "react-icons/di";
gsap.registerPlugin(ScrollTrigger);

const Skills = () => {
  useGSAP(() => {
    gsap.from(".skill-card", {
      y: 50,
      opacity: 0,
      duration: 0.6,
      stagger: 0.2,
      scrollTrigger: {
        trigger: ".skills-grid",
        scroller: "body",
        start: "top 80%",
        end: "top 30%",
        toggleActions: "play none none reverse",
      },
    });

    gsap.from(".skill", {
      scale: 0.5,
      opacity: 0,
      duration: 0.4,
      stagger: 0.05,
      ease: "back.out(1.7)",
      scrollTrigger: {
        trigger: ".skills-grid",
        scroller: "body",
        start: "top 80%",
      },
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
            <div className="skill"><FaHtml5 className="icon html" /> HTML</div>
            <div className="skill"><FaCss3Alt className="icon css" /> CSS</div>
            <div className="skill"><FaJs className="icon js" /> JavaScript</div>
            <div className="skill"><FaReact className="icon react" /> React JS</div>
            <div className="skill"><FaAngular className="icon angular" /> Angular</div>
            <div className="skill"><SiNextdotjs className="icon next" /> Next JS</div>
            <div className="skill"><SiTailwindcss className="icon tailwind" /> Tailwind</div>
            <div className="skill"><SiGreensock className="icon gsap" /> GSAP</div>
            <div className="skill"><FaBootstrap className="icon bootstrap" /> Bootstrap</div>
          </div>
        </div>

        {/* Backend */}
        <div className="skill-card">
          <h3>Backend</h3>
          <div className="skill-items">
            <div className="skill"><FaNodeJs className="icon node" /> Node JS</div>
            <div className="skill"><SiExpress className="icon express" /> Express</div>
            <div className="skill"><SiMysql className="icon mysql" /> MySQL</div>
            <div className="skill"><SiMongodb className="icon mongodb" /> MongoDB</div>
            <div className="skill"><SiFirebase className="icon firebase" /> Firebase</div>
            <div className="skill"><SiPostgresql className="icon postgres" /> PostgreSQL</div>
          </div>
        </div>

        {/* Languages */}
        <div className="skill-card">
          <h3>Languages</h3>
          <div className="skill-items">
            <div className="skill"><FaCuttlefish className="icon c" /> C</div> 
            <div className="skill"><SiCpp className="icon cpp" /> C++</div> 
             <div className="skill"><DiJava className="icon java" /> Java</div>
             <div className="skill"><SiPython className="icon python" /> Python</div>
          </div>
        </div>

        {/* Tools */}
        <div className="skill-card">
          <h3>Tools</h3>
          <div className="skill-items">
            <div className="skill"><FaGitAlt className="icon git" /> Git</div>
            <div className="skill"><FaGithub className="icon github" /> GitHub</div>
            {/* <div className="skill"><SiVisualstudiocode className="icon vscode" /> VS Code</div>  */}
             <div className="skill"><SiPostman className="icon postman" /> Postman</div> 
             <div className="skill"><SiVercel className="icon vercel" /> Vercel</div> 
             <div className="skill"><SiNetlify className="icon netlify" /> Netlify</div>
            <div className="skill"><FaFigma className="icon figma" /> Figma</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
