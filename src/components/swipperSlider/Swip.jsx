/* eslint-disable react/prop-types */
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
import {
  Navigation,
  Pagination,
  Mousewheel,
  Keyboard,
  Scrollbar,
  FreeMode,
  EffectFade,
  EffectCube,
  Parallax,
} from "swiper/modules";
import Card from "../slideSection/Card";
import { Fade } from "react-reveal";

export default function Swip({ audio, activeIndex, setActiveIndex }) {
  const background = new Audio("/src/assets/sounds/background.mp3");

  useEffect(() => {
    const prevInd = activeIndex;
    const slideGem = new Audio("/src/assets/sounds/slideGem.mp3");
    if (prevInd === activeIndex ) {
      slideGem.play();
    }
  }, [activeIndex, audio]);

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
        keyboard={true}
        parallax={true}
        speed={1000}
        effect={EffectFade}
        loopPreventsSliding={true}
        // scrollbar={{ draggable: true }}

        modules={[
          Navigation,
          Pagination,
          Mousewheel,
          Keyboard,
          EffectFade,
          Parallax,
        ]}
        className="mySwiper w-full relative"
      >
        <SwiperSlide id="home" className="relative z-0">
          <section className="text-white delay-1000 ">
            <div className=" w-full h-[100vh] place-content-center  flex items-center max-sm:mr-20 ">
              <div className=" p-16 sm:p-10 max-sm:p-6">
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
          <section className="delay-1000 ">
            <div className="w-full h-[80vh] flex items-center">
              <div className="w-[80vw]   flex flex-col items-center justify-center">
                <h1 className="text-4xl text-white font-bold max-sm:text-2xl ">WHO ARE WE?</h1>

                <div className="w-[75%] text-center  ">

                <p className="text-xl  text-slate-300 mt-4 max-sm:text-start">
                  We are designers, developers, creators and much more. What we
                  develop is extraordinary because we can't stand ordinary.
                  Don't believe yet? Then try us and amuse yourselves.
                </p>
                </div>
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
