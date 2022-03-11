import React from 'react'
import Contact from "../components/Contact.jsx";
import Skills from "../components/Skill-Grid.jsx";
import Body from "../components/Body.jsx";
import Header from '../components/Header.jsx';

const Resume = () => {
  return (
    <div className="doc">
        <Header/>
        <Contact/>
        <Body />
        <Skills />    
    </div>
  )
}

export default Resume