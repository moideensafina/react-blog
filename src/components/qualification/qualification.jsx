import React, { useState } from 'react'
import "./qualification.css"

const Qualification = () => {
    const [showQualification,showQualify] = useState(1);
    const shows=(num)=>{
            showQualify(num);
    }

    return (
        <section className="qualification section" id='profile'>
            <h2 className="section-tittle">Qualification</h2>
            <span className="section-subtittle">My personal journey</span>
            <div className="qualification-container container">
                <div className="qualification-tabs">
                    <div className={showQualification===1?"qualification-button qualification-active button--flex":"qualification-button button--flex"} onClick={()=>showQualify(1)}>
                        <i class="uil uil-graduation-cap qualification-icon"></i>Education
                    </div>

                    <div className={showQualification===2?"qualification-button qualification-active button--flex":"qualification-button  button--flex"} onClick={()=>showQualify(2)}>
                        <i class="uil uil-graduation-cap qualification-icon"></i>Experience
                    </div>
                </div>
                <div className="qualification-section">
                    <div className={showQualification ===1?"qualification-content qualification-content-active ":"qualification-content "}>
                        <div className="qualification-data">


                            <div>
                                <h3 className="qualification-tittle">10th</h3>
                                <span className="qualification-subtittle">
                                Veludayar Hr Sec School
                                </span>

                                <div className="qualification-calender">
                                    <i class="uil uil-calendar-alt"></i>2019 -2020
                                </div>
                            </div>
                            <div>
                                <span className="qualification-rounder"></span>
                                <span className="qualification-line"></span>
                            </div>

                            
                        </div>
        

                        <div className="qualification-data">
                            <div></div>
                            <div>
                                <span className="qualification-rounder"></span>
                                <span className="qualification-line"></span>
                            </div>

                            <div>
                                <h3 className="qualification-tittle">12th</h3>
                                <span className="qualification-subtittle">
                                Veludayar Hr Sec School
                                </span>
                                <div className="qualification-calender">
                                    <i class="uil uil-calendar-alt"></i>2021 - 2022
                                </div>

                            </div>
                        </div>


                        <div className="qualification-data">
                            

                            <div>
                                  <h3 className="qualification-tittle">BCA</h3>
                                  <span className="qualification-subtittle">
                                    jamal mohamed college
                                   </span>
                                  <div className="qualification-calender">
                                        <i class="uil uil-calendar-alt"></i>2022 - 2025
                                  </div>
                             </div>
                             <div>
                                    <span className="qualification-rounder">

                                    </span>
                                    <span className="qualification-line"></span>
                             </div>
                            
                        </div>


                        

                    </div>


                    <div className={showQualification===2?"qualification-content qualification-content-active ":"qualification-content "}>
                        <div className="qualification-data">
                            <div>
                                <h3 className="qualification-tittle">
                                    Web Design
                                </h3>
                                <span className="qualification-subtittle">
                                    jamal mohamed college
                                </span>
                                <div className="qualification-calender">
                                    <i class="uil uil-calendar-alt"></i>2022 -present
                                </div>
                                </div>

                                <div>
                                    <span className="qualification-rounder">

                                    </span>
                                    <span className="qualification-line"></span>
                                </div>
                                
                            
                        </div>


                        <div className="qualification-data">
                            <div></div>
                            <div>
                                <span className="qualification-rounder"></span>
                                <span className="qualification-line"></span>
                            </div>

                            <div>
                                <h3 className="qualification-tittle">Web Development </h3>
                                <span className="qualification-subtittle">
                                    jamal mohamed college
                                </span>
                                <div className="qualification-calender">
                                    <i class="uil uil-calendar-alt"></i>2022 -present
                                </div>

                            </div>
                        </div>


                        <div className="qualification-data">
                            <div>
                                <h3 className="qualification-tittle">
                                        MERN Stack
                                    </h3>
                                <span className="qualification-subtittle">
                                    jamal mohamed college
                                </span>
                                <div className="qualification-calender">
                                    <i class="uil uil-calendar-alt"></i>2022 -present
                                </div>
                                </div>  
                                <div>
                                    <span className="qualification-rounder">

                                    </span>
                                    <span className="qualification-line"></span>
                                </div>
                            
                        </div>




                    </div>
                </div>
            </div>

        </section>
    )
}

export default Qualification