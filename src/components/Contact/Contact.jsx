import React from 'react'
import con from "../../assets/contact.png"
import "./Contact.css"
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
gsap.registerPlugin(ScrollTrigger)

const Contact = () => {
  const handleSubmit = async (e) => {
  e.preventDefault();
  const form = e.target;

  const res = await fetch(form.action, {
    method: form.method,
    body: new FormData(form),
    headers: { Accept: "application/json" }
  });

  if (res.ok) {
    alert("Message sent successfully!");
    form.reset();
  } else {
    alert("Oops! Something went wrong.");
  }
};

   useGSAP(()=>{
    gsap.from(".leftcontact img",{
      x:-100,
      duration:1,
      opacity:0,
      stagger:1,
      scrollTrigger:{
        trigger:".leftcontact img",
        scroller:"body",
        markers: false,
        scrub:2,
        start:"top 80%",
        end:"top 30%"
      }
    });
      gsap.from("form",{
      x:100,
      duration:1,
      opacity:0,
      stagger:1,
      scrollTrigger:{
        trigger:"form",
        scroller:"body",
        scrub:2,
        markers: false,
        start:"top 80%",
        end:"top 30%"
      }
    });
     },[]);
  return (
    <div id='contact'>
      <div className="leftcontact">
        <img src={con} alt="" />
      </div>
      <div className="rightcontact">
        <form onSubmit={handleSubmit}  action="https://formspree.io/f/mrblokjl" method='post'>
            <input type="text" placeholder='Name' name='username' required />
            <input type="email" placeholder='Email' name='username'  required/>
            <textarea name="message" id="Message" placeholder='message'  required></textarea>
            <input type="submit" id='btn' value="Submit" />
        </form>
      </div>
    </div>
  )
}

export default Contact
