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
    <h2 className="section-tittle">My client say</h2>
    <span className="section-subtittle">My test journey  </span>

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
        {Data.map(({id,image,tittle,description})=>{
            return(
                <SwiperSlide className='test-card' key={id}>
                    <img src={image} alt="" className='test-img' />
                    <h3 className="test-name">{tittle}</h3>
                    <p className="test-description">{description}</p>
                </SwiperSlide>
            )
        })}
    </Swiper>
    </section>
  )
}

export default Test;