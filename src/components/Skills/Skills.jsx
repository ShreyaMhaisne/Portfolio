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
   scrub: false, // change to true if you want scroll-linked movement
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
    }, "-=0.4") // overlap slightly

    // Cards
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
    <section id="Skills" className="skills-section">
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
            <div className="skill"> HTML</div>
            <div className="skill">CSS</div>
            <div className="skill"> JavaScript</div>
            <div className="skill">React JS</div>
            <div className="skill"> Angular</div>
            <div className="skill">Next JS</div>
            <div className="skill"> Tailwind CSS</div>
            <div className="skill"> GSAP</div>
            <div className="skill"> Bootstrap</div>
          </div>
        </div>

        {/* Backend */}
        <div className="skill-card">
          <h3>Backend</h3>
          <div className="skill-items">
            <div className="skill"> Node JS</div>
            <div className="skill"> Express JS</div>
            <div className="skill"> MySQL</div>
            <div className="skill"> MongoDB</div>
            <div className="skill"> Firebase</div>
            <div className="skill"> PostgreSQL</div>
          </div>
        </div>

        {/* Languages */}
        <div className="skill-card">
          <h3>Languages</h3>
          <div className="skill-items">
            <div className="skill"> C</div>
            <div className="skill"> C++</div>
            <div className="skill"> Java</div>
            <div className="skill">Python</div>
          </div>
        </div>

        {/* Tools */}
        <div className="skill-card">
          <h3>Tools</h3>
          <div className="skill-items">
            <div className="skill"> Git</div>
            <div className="skill">GitHub</div>
            <div className="skill"> VS Code</div>
            <div className="skill"> Postman</div>
            <div className="skill"> Vercel</div>
            <div className="skill"> Netlify</div>
            <div className="skill">Figma</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
