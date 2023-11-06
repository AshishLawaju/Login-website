/* eslint-disable no-unused-vars */
import React, { useEffect, useRef, useState } from "react";
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
import { NavLink } from "react-router-dom";

// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard, Scrollbar } from "swiper/modules";
import Card from "../slideSection/Card";

export default function Swip({ activeIndex, setActiveIndex }) {
  console.log(activeIndex);
  return (
    <>
      <Swiper
        onActiveIndexChange={(element) => {
          setActiveIndex(element.activeIndex);
        }}
        direction={"vertical"}
        cssMode={true}
        navigation={true}
        pagination={true}
        mousewheel={true}
        keyboard={true}
        // scrollbar={{ draggable: true }}

        modules={[Navigation, Pagination, Mousewheel, Keyboard ]}
        className="mySwiper w-full "
      >
        <SwiperSlide id="home" className="">
          <section className="text-white">
            <div className=" w-full h-[100vh]  ">
              <div className="mt-[50%] mr-[18%]  max-sm:mt-[120%]  max-sm:left-3">
                <h1 className="text-4xl font-bold max-md:text-2xl max-sm:text-center ">
                  " Let us make our future now and let us make our dreams a
                  reality. "
                </h1>

                <p className="text-xl text-center mt-4">- WELCOME TO LOGIN</p>
              </div>
            </div>
          </section>
        </SwiperSlide>
        <SwiperSlide id="about">
          <section className="max-sm:mt-[60%]">
            <div className="w-full h-[100vh]">
              <div className="mt-[52%] mr-[18%]">
                <h1 className="text-4xl text-white font-bold  z-50 ">
                  WHO ARE WE?
                </h1>
                <p className="text-xl  text-slate-300 mt-4 max-sm:text-start">
                  We are designers, developers, creators and much more. What we
                  develop is extraordinary because we can't stand ordinary.
                  Don't believe yet? Then try us and amuse yourselves.
                </p>
              </div>
            </div>
          </section>
        </SwiperSlide>
        <SwiperSlide id="service">
          <Services></Services>
        </SwiperSlide>
        <SwiperSlide id="testimonials">
          <Testimonials />
        </SwiperSlide>

        <SwiperSlide id="customer">
          <Customer></Customer>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
