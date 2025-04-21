import React from 'react';
import "./footer.css"

const Footer = () => {
    return (
        <footer className='footer'>
            <div className="footer-container ">
                <div>
                <ul className="footer-list">
                    
                    <li>
                        <a href="#about" className="footer-link">About</a>
                    </li>
                    <li>
                        <a href="#skills" className="footer-link">Skills</a>
                    </li>
                    <li>
                        <a href="#services" className="footer-link">Services</a>
                    </li>
                    <li>
                        <a href="#profile" className="footer-link">Profile</a>
                    </li>
                    <li>
                        <a href="#contact" className="footer-link">Contact</a>
                    </li>
                </ul>
                </div>
            
             <div className="footer-social">
                <a href="https://api.whatsapp.com/send?phone=9385452868&text=Hello%20Safina%0Ahow%20are%20you%0A" className="footer-social-link" target="_blank">
                    <i class="bx bxl-whatsapp footer-social-icon"></i>
                </a>
                <a href="https://www.facebook.com/" className="footer-social-link" target="_blank">
                    <i class="bx bxl-facebook footer-social-icon"></i>
                </a>
                <a href="https://www.instagram.com/_md_safie_/" className="footer-social-link" target="_blank">
                    <i class="bx bxl-instagram footer-social-icon"></i>
                </a>
            </div>
            <div>
                <span className="footer-copy">
                   &#169; safinamoideen. All rights reserved
                </span>
                </div>
            </div>
            
        </footer>
    )
}

export default Footer;