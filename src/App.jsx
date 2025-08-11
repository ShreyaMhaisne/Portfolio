import { useState } from 'react'
import Nav from "./components/Nav/Nav"
import About from './components/About/About'
import Home from './components/Home/Home'
import Project from './components/Project/Project'
import Contact from './components/Contact/Contact'
import Skills from './components/Skills/Skills'


function App() {


  return (
    <>
    <Nav />
    <Home />
    <About/>
    <Skills />
    <Project/>
    <Contact/>
    </>
  )
}

export default App
