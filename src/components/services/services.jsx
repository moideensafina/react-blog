import React, { useState } from 'react'
import "./services.css"
const Services = () => {
  const [toggleState , setToggleState] = useState(0);

  const toggleTab = (index)=>{
    setToggleState(index);
  }
  return (

    <section className="services section" id="services">
      <h2 className="section-tittle">Services</h2>
      <span className="section-subtittle">what i offer</span>
      <div className="services-container container grid">
        <div className="services-content">
          <div>
            <i className="uil uil-web-grid services-icon"></i>
            <h3 className="services-tittle">Web <br /> Designer</h3>
          </div>

          <span className="services-button" onClick={()=>toggleTab(1)}>view more
            <i class="uil uil-arrow-right services-button-icon"></i>
          </span>

          <div className={toggleState === 1 ? "services-model active-model": "services-model"}>
            <div className="services-model-content">
              <i class="uil uil-times services-model-close" onClick={()=>toggleTab(0)}></i>
              <h3 className="services-model-tittle">Web Designer</h3>
              <p className="services-model-description">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid mollitia consectetur vel error.
              </p>
              <ul className="services-model-services grid">
                <li className="services-model-service">
                  <i class="uil uil-check-circle services-model-icon"></i>
                  <p className="services-model-info">
                    i devlop user interface....
                  </p>
                </li>


                <li className="services-model-service">
                  <i class="uil uil-check-circle services-model-icon"></i>
                  <p className="services-model-info">
                    i devlop user interface....
                  </p>
                </li>


                <li className="services-model-service">
                  <i class="uil uil-check-circle services-model-icon"></i>
                  <p className="services-model-info">
                    i devlop user interface....
                  </p>
                </li>


                <li className="services-model-service">
                  <i class="uil uil-check-circle services-model-icon"></i>
                  <p className="services-model-info">
                    i devlop user interface....
                  </p>
                </li>


                <li className="services-model-service">
                  <i class="uil uil-check-circle services-model-icon"></i>
                  <p className="services-model-info">
                    i devlop user interface....
                  </p>
                </li>



              </ul>
            </div>
          </div>
        </div>



        <div className="services-content">
          <div>
            <i className="uil uil-arrow services-icon"></i>
            <h3 className="services-tittle">ui/ux <br/> Designer</h3>
          </div>

          <span className="services-button" onClick={()=>toggleTab(2)}>view more
            <i class="uil uil-arrow-right services-button-icon"></i>
          </span>

          <div className={toggleState=== 2 ?"services-model active-model":"services-model"}>
            <div className="services-model-content">
              <i class="uil uil-times services-model-close" onClick={()=>toggleTab(0)}></i>
              <h3 className="services-model-tittle">ui/ux Designer</h3>
              <p className="services-model-description">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid mollitia consectetur vel error. 
              </p>
              <ul className="services-model-services grid">
                <li className="services-model-service">
                  <i class="uil uil-check-circle services-model-icon"></i>
                  <p className="services-model-info">
                    i devlop user interface....
                  </p>
                </li>


                <li className="services-model-service">
                  <i class="uil uil-check-circle services-model-icon"></i>
                  <p className="services-model-info">
                    i devlop user interface....
                  </p>
                </li>


                


                <li className="services-model-service">
                  <i class="uil uil-check-circle services-model-icon"></i>
                  <p className="services-model-info">
                    i devlop user interface....
                  </p>
                </li>


                <li className="services-model-service">
                  <i class="uil uil-check-circle services-model-icon"></i>
                  <p className="services-model-info">
                    i devlop user interface....
                  </p>
                </li>

                <li className="services-model-service">
                  <i class="uil uil-check-circle services-model-icon"></i>
                  <p className="services-model-info">
                    i devlop user interface....
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>



        <div className="services-content">
          <div>
            <i className="uil uil-edit services-icon"></i>
            <h3 className="services-tittle">Front End <br/> Designer</h3>
          </div>

          <span className="services-button" onClick={()=>toggleTab(3)}>view more
            <i class="uil uil-arrow-right services-button-icon"></i>
          </span>

          <div className={toggleState=== 3 ? "services-model active-model":"services-model"}>
            <div className="services-model-content">
              <i class="uil uil-times services-model-close" onClick={()=>toggleTab(0)}></i>
              <h3 className="services-model-tittle">Front End Designer</h3>
              <p className="services-model-description">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid mollitia consectetur vel error. 
              </p>
              <ul className="services-model-services grid">
                <li className="services-model-service">
                  <i class="uil uil-check-circle services-model-icon"></i>
                  <p className="services-model-info">
                    i devlop user interface....
                  </p>
                </li>


                <li className="services-model-service">
                  <i class="uil uil-check-circle services-model-icon"></i>
                  <p className="services-model-info">
                    i devlop user interface....
                  </p>
                </li>


                <li className="services-model-service">
                  <i class="uil uil-check-circle services-model-icon"></i>
                  <p className="services-model-info">
                    i devlop user interface....
                  </p>
                </li>


                


                <li className="services-model-service">
                  <i class="uil uil-check-circle services-model-icon"></i>
                  <p className="services-model-info">
                    i devlop user interface....
                  </p>
                </li>

                <li className="services-model-service">
                  <i class="uil uil-check-circle services-model-icon"></i>
                  <p className="services-model-info">
                    i devlop user interface....
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Services;