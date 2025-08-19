import { useState } from 'react'
import Nav from "./components/Nav/Nav"
import About from './components/About/About'
import Home from './components/Home/Home'
import Project from './components/Project/Project'
import Contact from './components/Contact/Contact'
import Skills from './components/Skills/Skills'
import Education from './components/Education/Education'


function App() {


  return (
    <>
    <Nav />
    <Home />
    <About/>
    <Education />
    <Skills />
    <Project/>
    <Contact/>
    </>
  )
}

export default App
