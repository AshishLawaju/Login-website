import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "./styles.css";
import Section1 from "../allAOS/section1";

// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper/modules";

export default function App() {
  return (
    <>
      <Swiper
        direction={"vertical"}
        cssMode={true}
        navigation={true}
        // pagination={true}
        mousewheel={true}
        keyboard={true}
        
        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
        className="mySwiper"
      >
        <SwiperSlide>
          <section className="text-white">
            <h1 className="text-4xl">

                <p><Section1></Section1> </p>
              " Let us make our future now and let us make our dreams a reality.
              "
            </h1>

            <p className="text-xl text-center">- WELCOME TO LOGIN</p>
          </section>
        </SwiperSlide>
        <SwiperSlide>
          <section className="">
            <h1 className="text-4xl text-white">WHO ARE WE?</h1>
            <p className="text-xl text-slate-300">


              We are designers, developers, creators and much more. What we
              develop is extraordinary because we can't stand ordinary. Don't
              believe yet? Then try us and amuse yourselves.
            </p>
          </section>
        </SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide>
      </Swiper>
    </>
  );
}
