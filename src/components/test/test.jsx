import React from 'react'
import "./test.css";
import { Data } from './data';

import { Swiper,SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import {Pagination} from 'swiper/modules'

const Test = () => {
  return (
    <section className="test container section">
    <h2 className="section-tittle">My Projects</h2>
    <span className="section-subtittle">  </span>

    <Swiper className="test-container"
    
    loop={true}
    grabCursor={true}
    spaceBetween={24}
    pagination={{
      clickable: true,
    }}
    breakpoints={{
      576: {
        slidesPerView: 2,
        
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
    }}
    modules={[Pagination]}
    >
        {Data.map(({id,image,tittle,link})=>{
            return(
                <SwiperSlide className='test-card' key={id}>
                    <img src={image} alt="" className='test-img' />
                    <h3 className="test-name">{tittle}</h3>
                    <a href={link} target='_blank'> <i class="uil uil-link"></i> Click Here </a>
                </SwiperSlide>
            )
        })}
    </Swiper>
    </section>
  )
}

export default Test;