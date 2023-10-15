import React, { useRef, useState } from "react";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import "./stylesTestimonials.css";

// import required modules
import { EffectCoverflow, Pagination } from "swiper/modules";
import Card from "../Card";

const Testimonials = () => {
  return (
    <div className="flex flex-col w-[90%] mr-[23%] border-white">
      <h1 className="text-white text-4xl font-bold">Testimonials</h1>

      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 1,
          stretch: 12,
          depth: 100,
          modifier: 1,
          slideShadows: false,
        }}
        loop={true}
        pagination={true}
        modules={[Pagination, EffectCoverflow]}
        className="mySwiper1 w-[88%] pl-16 pt-12"
      >
        <SwiperSlide className="swiper-slide1  mr-14  bg-black rounded-3xl">
          <Card />
        </SwiperSlide>
        <SwiperSlide className="swiper-slide1  mr-14  bg-black rounded-3xl">
          <Card />
        </SwiperSlide>
        <SwiperSlide className="swiper-slide1  mr-14  bg-black rounded-3xl">
          <Card />
        </SwiperSlide>
        <SwiperSlide className="swiper-slide1  mr-14  bg-black rounded-3xl">
          <Card />
        </SwiperSlide>
        <SwiperSlide className="swiper-slide1  mr-14  bg-black rounded-3xl">
          <Card />
        </SwiperSlide>
        <SwiperSlide className="swiper-slide1  mr-14  bg-black rounded-3xl">
          <Card />
        </SwiperSlide>
        <SwiperSlide className="swiper-slide1  mr-14  bg-black rounded-3xl">
          <Card />
        </SwiperSlide>
        <SwiperSlide className="swiper-slide1  mr-14  bg-black rounded-3xl">
          <Card />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Testimonials;
