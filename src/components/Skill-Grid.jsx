import React from 'react';
import SkillBubble from "./Skill-Bubble.jsx";
import { skills } from '../data/sample.data';

const Skills = () => {
  return (
    <section title="Skills">
      <h3>Skills</h3>
      <hr />
      <div className="skillContainer">
        {skills.map((skill, index) => (
          <SkillBubble key={index} skill={skill}/>
        ))}
        </div>
    </section>   
  )
};

export default Skills;