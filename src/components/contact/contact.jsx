import React from 'react';

import "./contact.css"

const Contact = () => {
/*
        const  form = useRef();

        const sendEmail = (e) => {
          e.preventDefault();
      
          emailjs.sendForm('service_o6hh8ra', 'template_fk50dfa', form.current, 'OzT1_5AmW5JsUZLvz')
            e.target.reset()
        };
      
*/

    return (
        <section className="Contact selection" id="contact">

            <h2 className="section-tittle">Get In Touch</h2>
            <span className="section-subtittle">Contact Me  </span>

            <div className="contact-container container grid">
                <div className="contact-content">
                    <h3 className="contact-tittle"> </h3>
                    <div className="contact-card">
                    <i className="uil uil-whatsapp contact-card-icon whatsapp"></i>
                        <h3 className="contact-card-tittle ">whatsapp</h3>
                        <span className="contact-card-data" >9385452868</span>

                        <a href="https://api.whatsapp.com/send?phone=9386452868&text=Hello%20Safina%0Ahow%20are%20you%0A" className='contact-button whatsapp'>
                            write me <i className="bx bx-right-arrow-alt contact-button-icon"></i>
                        </a>

                    </div>

                    <div className="contact-card">
                        <i className="uil uil-facebook contact-card-icon facebook"></i>

                        
                        <h3 className="contact-card-tittle ">facebook</h3>
                        <span className="contact-card-data"></span>

                        <a href="https://www.facebook.com/" className='contact-button facebook'>
                            write me <i className="bx bx-right-arrow-alt contact-button-icon"></i>
                        </a>

                    </div>


                    <div className="contact-card">
                    <i className="uil uil-instagram contact-card-icon instagram"></i>
                        <h3 className="contact-card-tittle ">instagram</h3>
                        <span className="contact-card-data"></span>

                        <a href="https://www.instagram.com/_._mr_moideen___/" className='contact-button instagram'>
                            write me<i className="bx bx-right-arrow-alt contact-button-icon "></i>
                        </a>

                    </div>

                </div>
                <div className="contact-content">
                <h3 className="contact-tittle">Write Your Review...</h3>
                <form   action="" className="contact-form">
                    <div className="contact-form-div ">
                        <label htmlFor="" className="contact-form-tag">Name</label>
                        <input type="text" name='name' className='contact-form-input' placeholder='enter your name' required />

                    </div>

                    <div className="contact-form-div">
                        <label htmlFor="" className="contact-form-tag">Email</label>
                        <input type="email" name='email' className='contact-form-input' placeholder='enter your email' required />
                        
                    </div>


                    <div className="contact-form-div contact-form-area">
                        <label htmlFor="" className="contact-form-tag">project</label>
                        <textarea name="project" className='contact-form-input' placeholder='write your Review ' cols="30" rows="10" required></textarea>
                        
                    </div>
                    <button className='button button-flex contact-btn'>send Message</button>
                </form>
                </div>
            </div>
        </section>
    )
}

export default Contact;