import React from "react";
import { useState } from "react";
import "./header.css";

const Header =()=>{
    const[Toggle,showMenu]=useState(false);

    window.addEventListener("scroll",function(){
        const header = document.querySelector(".header");
        if(this.scrollY>=80)
        header.classList.add("show-header");
        else header.classList.remove("show-header")
    })
  const [activeNav,setActiveNav] = useState("")
    return(
        <header className="header">
            <nav className="nav container">
                <a href="index.html" className="nav-logo">safina</a>
                <div className={Toggle ? "nav-menu show-menu":"nav-menu"}>
                    <ul className="nav-list grid" >
                        <li className="nav-item">
                            <a href="#home" onClick={()=> setActiveNav('#home')} className={activeNav==="#home" ? "nav-link active-link":"nav-link"}>
                                <i className="uil uil-estate nav-icon"></i>Home
                            </a>
                        </li>

                        <li className="nav-item">
                            <a href="#about" onClick={()=> setActiveNav('#about')} className={activeNav==="#about" ? "nav-link active-link":"nav-link"}>
                                <i className="uil uil-user nav-icon"></i>About
                            </a>
                        </li>


                        <li className="nav-item">
                            <a href="#skills" onClick={()=> setActiveNav('#skills')} className={activeNav==="#skills" ? "nav-link active-link":"nav-link"}>
                                <i className="uil uil-file-alt nav-icon"></i>Skills
                                
                            </a>
                        </li>


                        <li className="nav-item">
                            <a href="#services" onClick={()=> setActiveNav('#services')} className={activeNav==="#services" ? "nav-link active-link":"nav-link"}>
                                <i className="uil uil-briefcase-alt nav-icon"></i>services
                            </a>
                        </li>

                        <li className="nav-item">
                            <a href="#profile" onClick={()=> setActiveNav('#portofilo')} className={activeNav==="#portofilo" ? "nav-link active-link":"nav-link"}>
                                <i className="uil uil-scenery nav-icon"></i>Profile
                            </a>
                        </li>

                        <li className="nav-item">
                            <a href="#contact" onClick={()=> setActiveNav('#contact')} className={activeNav==="#contact" ? "nav-link active-link":"nav-link"}>
                                <i className="uil uil-message nav-icon"></i>Contact
                            </a>
                        </li>
                    </ul>
                    <i className="uil uil-times nav-close"  onClick={()=>showMenu(!Toggle)}></i>
                </div>
                
                <div className="nav-toggle" onClick={()=>showMenu(true)}>
                  <i class="uil uil-apps"></i>
                  
                </div>
            </nav>
        </header>
    )
}


export default Header;