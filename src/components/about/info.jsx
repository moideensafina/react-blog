import React from 'react'

export const Info = () => {
  return (
    <div className="about-info grid">
        <div className="about-box">
        <i class='about-icon bx bx-award '></i>
            <h3 className="about-tittle">
                experience
            </h3>
            <span className="about-subtittle">
                2 yrs work
            </span>
        </div>

        <div className="about-box">
        
        <i class='about-icon bx bx-briefcase-alt'  ></i>
            <h3 className="about-tittle">
                completed
            </h3>
            <span className="about-subtittle">
12+ projects
            </span>
        </div>

        <div className="about-box">
        <i class='about-icon bx bx-support'  ></i>
            <h3 className="about-tittle">
                support
            </h3>
            <span className="about-subtittle">
                    online 24/7
            </span>
        </div>
    </div>
  )
}




export default Info;