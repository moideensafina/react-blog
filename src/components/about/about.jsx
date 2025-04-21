import React from 'react'
import "./about.css";
import AboutImg from "../../assests/WhatsApp Image 2025-04-21 at 01.02.39_43366009.jpg";
import Info from './info';

export const About = () => {
  return (
    <section className="about section" id="about">
        <h2 className="section-tittle">About me</h2>
        <span className="section-subtittle">My introduction</span>
        <div className="about-container container grid">
                <img src={AboutImg} alt="" className="about-img" />
                <div className="about-data">
                <Info/>
                    <p className="about-description">
                    Hi, I'm Safina Moideen — a passionate MERN stack developer with a strong interest in building full-stack web applications that are fast, functional, and user-friendly. I have experience developing a wide range of platforms, including e-commerce websites, blog systems, and service-based applications.
                    </p>
                    

                    <a download href="src\components\about\files\SAFINAMOIDEEN(MERN).pdf" className="button">Download CV <i class="uil uil-file"></i></a>
                </div>
        </div>
    </section>
  )
}

export default About;