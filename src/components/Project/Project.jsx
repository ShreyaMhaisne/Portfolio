import React, { useState } from 'react'
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
    {
      id: 1,
      title: "Currency Converter",
      image: curr,
      category: "js",
      link: "https://currency-converter-omega-amber.vercel.app/",
      desc: "Convert currencies using real-time exchange rates.",
      longDesc: "A simple yet functional Currency Converter built using HTML, CSS, and JavaScript. It allows users to seamlessly convert one currency into another in real-time by fetching live exchange rates through an API.",
      tech: ["fa-brands fa-js","fa-brands fa-html5", "fa-brands fa-css3-alt"]
    },
    {
      id: 2,
      title: "React Netflix Clone",
      image: nc,
      category: "react",
      link: "https://netflix-clone-sigma-pink-84.vercel.app/login",
      desc: "Netflix UI clone built with React and Firebase.",
      longDesc: "A Netflix clone built with ReactJS and Firebase for authentication and hosting. It replicates the UI of Netflix with dynamic components, responsive design, and user login features.",
      tech: ["fa-brands fa-react", "fa-brands fa-js"]
    },
    {
      id: 3,
      title: "Nykaa Website Static",
      image: Nykaa,
      category: "htmlcss",
      link: "https://nykaa-static-website.vercel.app/",
      desc: "A static clone of Nykaa website.",
      longDesc: "A static front-end clone of the Nykaa e-commerce platform built using HTML and CSS. Focused on layout, styling, and replicating the real website’s look and feel.",
      tech: ["fa-brands fa-html5", "fa-brands fa-css3-alt"]
    },
    {
      id: 4,
      title: "Stop Watch",
      image: stop,
      category: "js",
      link: "https://stop-watch-eight-amber.vercel.app/",
      desc: "A digital stopwatch with start/stop/reset features.",
      longDesc: "A stopwatch app created with JavaScript that lets users start, pause, reset, and track time with precision. Clean UI with intuitive controls.",
      tech: ["fa-brands fa-js","fa-brands fa-html5", "fa-brands fa-css3-alt"]
    },
    {
      id: 5,
      title: "Paroz Static Website",
      image: paroz,
      category: "htmlcss",
      link: "https://paroz-static-website.vercel.app/",
      desc: "Static website for Paroz brand.",
      longDesc: "A static website designed for the Paroz brand using only HTML and CSS. Highlights responsive layout, branding, and user-friendly design.",
      tech: ["fa-brands fa-html5", "fa-brands fa-css3-alt"]
    },
    {
      id: 6,
      title: "Hotel Booking Clerk",
      image: hotel,
      category: "react",
      link: "https://hotel-booking-dusky-alpha.vercel.app/",
      desc: "Hotel booking system with React + Clerk auth.",
      longDesc: "A React-based hotel booking system integrated with Clerk for authentication. Users can sign up, log in, and manage bookings with a modern UI.",
      tech: ["fa-brands fa-react", "fa-brands fa-js"]
    },
    {
      id: 7,
      title: "Static Bakery Website",
      image: bakery,
      category: "htmlcss",
      link: "https://static-bakery-website.vercel.app/",
      desc: "Static bakery shop website.",
      longDesc: "A bakery shop website built with HTML and CSS showcasing the brand’s products, simple navigation, and responsive design for all devices.",
      tech: ["fa-brands fa-html5", "fa-brands fa-css3-alt"]
    },
  ];

  useGSAP(() => {
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

    gsap.from(".project-filters button", {
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
        <button className={filter === "react" ? "active" : ""} onClick={() => setFilter("react")}>React</button>
      </div>

      {/* Projects */}
      <div className="slider">
        {filteredProjects.map(p => (
          <div key={p.id} className="project-card">

            {/* Top Half - Image */}
            <div className="project-img-box">
              <img src={p.image} alt={p.title} className="project-img" />
            </div>

            {/* Bottom Half - Title */}
            <div className="project-info-box">
              <h3>{p.title}</h3>
              <p className="long-desc">{p.longDesc}</p>
            </div>

            {/* Hover Overlay */}
            <div className="overlay">
              <p>{p.desc}</p>
              <div className="icons">
                {p.tech.map((icon, i) => (
                  <i key={i} className={icon}></i>
                ))}
              </div>
              <a href={p.link} target="_blank" rel="noopener noreferrer" className="live-btn">
                Live <i className="fa-solid fa-up-right-from-square"></i>
              </a>
            </div>

          </div>
        ))}
      </div>
    </div>
  )
}

export default Project
