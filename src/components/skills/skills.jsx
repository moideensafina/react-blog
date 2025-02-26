import React from 'react'
import "./skills.css"
import Frontend from './frontend';
import Backend from './backend';
export const Skills = () => {
  return (
    <section className="skills section" id='skills'>
        <h2 className="section-tittle">Skills</h2>
        <span className="section-subtittle">My Technical Level</span>

        <div className="skills-container container grid">
            <Frontend/>
            <Backend/>
        </div>
    </section>
  )
}



export default Skills;