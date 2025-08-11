import React, { useState } from 'react'
import Card from '../Card/Card'
import curr from "../../assets/currency.png"
import nc from "../../assets/Netflix.png"
import Nykaa from "../../assets/Nykaa.png"
import stop from "../../assets/StopWatch.png"
import paroz from "../../assets/paroz.png"
import hotel from "../../assets/Hotel.png"
import bakery from "../../assets/Bakery.png"

import "./Project.css"
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
gsap.registerPlugin(ScrollTrigger)
ScrollTrigger.defaults({ markers: false });

const Project = () => {
  const [filter, setFilter] = useState("all");

  const projects = [
    { id: 1, title: "Corrency Converter", image: curr, category: "js", link: "https://currency-converter-omega-amber.vercel.app/"  },
    { id: 2, title: "NetFlix Clone Firebase", image: nc, category: "mern", link:"https://netflix-clone-sigma-pink-84.vercel.app/login" },
    { id: 3, title: "Nykaa Static Clone", image: Nykaa, category: "htmlcss",link : "https://nykaa-static-website.vercel.app/"},
    { id: 4, title: "Stop Watch", image: stop, category: "js" ,link:"https://stop-watch-eight-amber.vercel.app/"},
    { id: 5, title: "paroz Static website", image: paroz, category: "htmlcss", link : "https://paroz-static-website.vercel.app/" },
    { id: 6, title: "Hotel Booking Clerk", image: hotel, category: "mern" , link:"https://hotel-booking-dusky-alpha.vercel.app/"},
    { id: 7, title: "Static Bakery Website", image: bakery, category: "htmlcss",link: "https://static-bakery-website.vercel.app/"},
  ];

  useGSAP(() => {
    // Project heading animation
    gsap.from("#para", {
      y: 100,
      duration: 1,
      opacity: 0,
      scrollTrigger: {
        trigger: "#para",
        scroller: "body",
        scrub: 2,
        start: "top 80%",
        end: "top 30%"
      }
    });

    // Language filter buttons animation (same style as heading)
    gsap.from(".project-filters button", {
      y: 80,
      opacity: 0,
      stagger: 0.15,
      duration: 0.8,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".project-filters",
        scroller: "body",
        scrub: 2,
        start: "top 85%",
        end: "top 40%"
      }
    });

    // Projects section animation
    gsap.from(".slider", {
      y: 100,
      duration: 1,
      opacity: 0,
      scrollTrigger: {
        trigger: ".slider",
        scroller: "body",
        scrub: 2,
        start: "top 80%",
        end: "top 30%"
      }
    });
  }, []);

  const filteredProjects = filter === "all"
    ? projects
    : projects.filter(project => project.category === filter);

  return (
    <div id='projects'>
      <h1 id='para'>Projects</h1>

      {/* Filter Buttons */}
      <div className="project-filters">
        <button className={filter === "all" ? "active" : ""} onClick={() => setFilter("all")}>All</button>
        <button className={filter === "htmlcss" ? "active" : ""} onClick={() => setFilter("htmlcss")}>HTML/CSS</button>
        <button className={filter === "js" ? "active" : ""} onClick={() => setFilter("js")}>JavaScript</button>
        <button className={filter === "mern" ? "active" : ""} onClick={() => setFilter("mern")}>MERN</button>
        {/* <button className={filter === "react" ? "active" : ""} onClick={() => setFilter("react")}>React</button> */}
      </div>

      {/* Projects */}
      <div className="slider">
        {filteredProjects.map(p => (
            <a 
      key={p.id} 
      href={p.link} 
      target="_blank" 
      rel="noopener noreferrer" 
      style={{ textDecoration: "none" }}
    >
          <Card key={p.id} title={p.title} image={p.image} />
          </a>
        ))}
      </div>
    </div>
  )
}

export default Project
