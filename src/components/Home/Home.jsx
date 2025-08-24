import React, { useState } from 'react';
import './Home.css';
import { TypeAnimation } from 'react-type-animation';
import { useGSAP } from '@gsap/react';
import gsap from "gsap";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// project screenshots
import project1 from "../../assets/Hotel.png";
import project2 from "../../assets/currency.png";
import project3 from "../../assets/Netflix.png";

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useGSAP(() => {
    gsap.from(".righthome", { x: 200, duration: 1, opacity: 0 });
    gsap.from(".project-slide", {
      opacity: 0,
      y: 50,
      duration: 1,
      stagger: 0.3,
      ease: "power3.out",
    });
  }, []);

  const settings = {
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2000,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    pauseOnHover: true,
    beforeChange: (_, next) => setCurrentSlide(next),
  };

  return (
    <div id="home">
      <div className="lefthome">
        <div className="homedetails">
          <div className="line1">Hi, I'm</div>
          <div className="line2">Shreya Mhaisne</div>
          <div className="line3">
            <TypeAnimation
              sequence={[
                'Web Developer', 1000,
                'Software Developer', 1000,
                'MERN Stack', 1000,
                'Frontend Developer', 1000,
              ]}
              speed={50}
              repeat={Infinity}
            />
          </div>
          <a href="/cv.pdf" download="My_CV.pdf">
            <button className="download-btn">Download CV</button>
          </a>
          <a href="#projects">
            <button className="para">View Projects</button>
          </a>
        </div>
      </div>

      {/* Project Carousel */}
      <div className="righthome">
        <Slider {...settings}>
          {/* Project 1 */}
          <div className="project-slide" >
            <img src={project1} alt="Project 1" />
            <div className="overlay">
              <h3 className="project-title">Hotel Booking App</h3>
              <p className="project-desc">
                React hotel booking system with Clerk authentication
              </p>
              <a
                href="https://your-live-demo-link1.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="tech-icons">
                  <div className="tech-icon react"></div>
                  <div className="tech-icon clerk"></div>
                </div>
                <button className="demo-btn">Live Demo</button>
              </a>
            </div>
          </div>

          {/* Project 2 */}
          <div className="project-slide" >
            <img src={project2} alt="Project 2" />
            <div className="overlay">
              <h3 className="project-title">Currency Converter</h3>
              <p className="project-desc">Real-time currency rates using API</p>
              <a
                href="https://your-live-demo-link2.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="tech-icons">
                  <div className="tech-icon js"></div>
                </div>
                <button className="demo-btn">Live Demo</button>
              </a>
            </div>
          </div>

          {/* Project 3 */}
          <div className="project-slide">
            <img src={project3} alt="Project 3" />
            <div className="overlay">
              <h3 className="project-title">Netflix Clone</h3>
              <p className="project-desc">
                Firebase + React clone with movie API
              </p>
              <a
                href="https://your-live-demo-link3.com"
                target="_blank"
                rel="noopener noreferrer"
              ><div className="tech-icons">
                  <div className="tech-icon react"></div>
                  <div className="tech-icon firebase"></div>
                </div>
                <button className="demo-btn">Live Demo</button>
              </a>
            </div>
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default Home;
