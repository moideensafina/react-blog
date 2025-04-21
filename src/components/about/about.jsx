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
                       Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi tempora eligendi beatae fugiat doloribus ipsam nobis deleniti ab.
                    </p>
                    

                    <a download href="src\components\about\SAFINAMOIDEEN(MERN).pdf" className="button">Download CV <i class="uil uil-file"></i></a>
                </div>
        </div>
    </section>
  )
}

export default About;