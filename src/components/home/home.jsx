import React from "react";
import"./home.css";
import Social from "./social";
import Data from "./data";
import ScrollDown from "./scrolldown";
const Home =()=>{
    return(
        <section className="home section" id="home">
                <div className="home-container contain grid">
                    <div className="home-content grid">
                        <Social/>
                        <div className="home-img"></div>
                        <Data/>
                    </div>
                    <ScrollDown/>
                </div>
        </section>
    )
}

export default Home;