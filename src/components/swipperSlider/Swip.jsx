import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

import Services from "../slideSection/Services";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "./styles.css";
import Section1 from "../allAOS/section1";
import Customer from "../slideSection/Customer";
import Testimonials from "../slideSection/Testomonial/Testimonials";

// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper/modules";
import Card from "../slideSection/Card";


export default function App() {
  return (
    <>
      <Swiper
        direction={"vertical"}
        cssMode={true}
        navigation={true}
        pagination={true}
        mousewheel={true}
        keyboard={true}
        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
        className="mySwiper w-full "
      >
        <SwiperSlide>
          <section className="text-white">
            <div className=" w-full h-[100vh]">
             <div className="mt-[55%] mr-[18%]">
             <h1 className="text-4xl font-bold">
               
                " Let us make our future now and let us make our dreams a
                reality. "
              </h1>

              <p className="text-xl text-center mt-4">- WELCOME TO LOGIN</p>
             </div>
            </div>
          </section>
        </SwiperSlide>
        <SwiperSlide>
          <section id="Home">
            <div className="w-full h-[100vh]">

              <div className="mt-[55%] mr-[18%]">

              <h1 className="text-4xl text-white">WHO ARE WE?</h1>
              <p className="text-xl  text-slate-300 mt-4">
                We are designers, developers, creators and much more. What we
                develop is extraordinary because we can't stand ordinary. Don't
                believe yet? Then try us and amuse yourselves.
              </p>
              </div>
            </div>
          </section>
        </SwiperSlide>
        <SwiperSlide>
          <Services></Services>
        </SwiperSlide>
        <SwiperSlide><Testimonials/></SwiperSlide>
        
        <SwiperSlide>
          <Customer></Customer>
        </SwiperSlide>

       
      </Swiper>
    </>
  );
}
