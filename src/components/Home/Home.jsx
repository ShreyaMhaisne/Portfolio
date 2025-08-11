import React from 'react'
import './Home.css'
import man from "../../assets/main1.png"
import { TypeAnimation } from 'react-type-animation';
import { useGSAP } from '@gsap/react';
import gsap from "gsap";

const Home = () => {
useGSAP(() => {
    let tl1 = gsap.timeline();
    tl1.from(".line1", { y: 100, duration: 1, opacity: 0 })
       .from(".line2", { y: 80, duration: 1, opacity: 0 })
       .from(".line3", { y: 100, duration: 1, opacity: 0 });

    gsap.from(".righthome img", { x: 200, duration: 1, opacity: 0 });
  }, []);
  return (
    <div id='home'>
      <div className="lefthome">
        <div className="homedetails">
          <div className="line1">I'M</div>
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
  <button id="download-btn">Download CV</button>
</a>
        </div>
      </div>
      <div className="righthome">
        <img src={man} alt="" />
      </div>
    </div>
  )
}

export default Home
