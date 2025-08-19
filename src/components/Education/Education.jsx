import React from "react";
import "./Education.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const Education = () => {
  useGSAP(() => {
    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".education-section",
        scroller: "body",
        start: "top 80%",
        end: "bottom 60%",
        scrub: false, // set to true if you want smooth scroll-linked animation
        toggleActions: "play reverse play reverse",
      },
    });

    // Animate Section Title
    tl.from(".section-title", {
      y: 50,
      opacity: 0,
      duration: 0.5,
      ease: "power3.out",
    })

      // Animate Cards
      .from(".education-card", {
        y: 40,
        opacity: 0,
        duration: 0.6,
        stagger: 0.3,
        ease: "power2.out",
      })

      // Animate content inside each card
      .from(
        ".education-card h3, .education-card p",
        {
          y: 15,
          opacity: 0,
          duration: 0.3,
          stagger: 0.05,
          ease: "power1.out",
        },
        "-=0.3" // slightly overlap with previous animation
      );
  }, []);

  const educationData = [
    {
      degree: "Bachelor of Science",
      field: "Computer Science",
      school: "Modern College Arts, Commerce & Science",
      year: "2022 - 2025",
      grade: "CGPA: 8",
    },
    {
      degree: "Higher Secondary (12th)",
      field: "Science (PCMB)",
      school: "Mahalsakant College, Pune",
      year: "2020 - 2022",
      grade: "Percentage: 62%",
    },
    {
      degree: "Secondary (10th)",
      field: "General Education",
      school: "CES Abhiman English Medium School, Pune",
      year: "2019 - 2020",
      grade: "Percentage: 74%",
    },
  ];

  return (
    <div id="education">
      <section className="education-section">
        <h2 className="section-title">Education</h2>
        <div className="education-grid">
          {educationData.map((edu, index) => (
            <div key={index} className="education-card">
              <h3 className="degree">{edu.degree}</h3>
              <p className="field">{edu.field}</p>
              <p className="school">{edu.school}</p>
              <p className="year">{edu.year}</p>
              <p className="grade">{edu.grade}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Education;
