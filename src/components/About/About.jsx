import React from 'react';
import './About.css';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  useGSAP(() => {
    gsap.from(".about-header", {
      y: 50,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".about-header",
        scroller: "body",
        scrub: 2,
        start: "top 80%",
        end: "top 40%",
      }
    });

    gsap.from(".about-icons a", {
      y: -20,
      opacity: 0,
      stagger: 0.2,
      duration: 0.6,
      ease: "back.out(1.7)",
      scrollTrigger: {
        trigger: ".about-icons",
        scroller: "body",
        scrub: 2,
        start: "top 85%",
        end: "top 50%",
      }
    });

    gsap.from(".about-description", {
      y: 80,
      opacity: 0,
      duration: 1,
      scrollTrigger: {
        trigger: ".about-description",
        scroller: "body",
        scrub: 2,
        start: "top 85%",
        end: "top 50%",
      }
    });
  }, []);

  return (
    <div id="about">
      <div className="about-header">
        <h1 className="about-name">Shreya Mahsine</h1>
        <div className="about-icons">
          <a href="https://www.linkedin.com/in/shreya-mhaisne-52928333a/" target="_blank" rel="noreferrer"><FaLinkedin /></a> 
          <a href="https://github.com/ShreyaMhaisne" target="_blank" rel="noreferrer"><FaGithub /></a>
          <a href="mailto:smhaisne6@gmail.com"><FaEnvelope /></a>
        </div>
      </div>
      <div className="about-description">
        <p>
         I am an enthusiastic and highly motivated Full-Stack Web Developer with strong knowledge of both frontend and backend development, eager to apply my skills to real-world projects. As a recent Computer Science graduate from Modern College Shiavjinagar pune, I have built a solid understanding of modern web technologies, programming concepts, 
         and problem-solving strategies through academic learning and personal projects.
          I have a keen interest in building responsive, visually appealing, and performance-focused 
          applications that deliver great user experiences. Although I am at the beginning of my professional 
          journey, my dedication to continuous learning, ability to quickly adapt to new tools and frameworks,
           and passion for clean, efficient coding make me confident in contributing value to any development
            team.
        </p>
        {/* <p>
          My journey as a developer has been driven by curiosity, persistence, and a desire to create meaningful digital experiences.
          Whether it’s building a full-stack application, optimizing performance, or exploring new frameworks, I thrive on challenges
          that push my creativity and technical skills to the next level.
        </p> */}
      </div>
    </div>
  );
};

export default About;
