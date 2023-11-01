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
          <Card
            name={"Kamlesh Shrestha"}
            review={`"They have done an absoutely great job for my company's logo design. Professional and really passionate."`}
            profile={"https://logindesigns.com/admin/files/16004856930.webp"}
          />
        </SwiperSlide>
        <SwiperSlide className="swiper-slide1  mr-14  bg-black rounded-3xl">
          <Card name={"Suraj Jung Thapa"}  review={` "You gurs made it so simple. My new site is just visual pleasing. Just
        Yesterday some of my customers messaged sayinng how much I liked the new
        site. Thanks guys!" `} profile={"https://logindesigns.com/admin/files/16005130380.webp"}/>
        </SwiperSlide>
        <SwiperSlide className="swiper-slide1  mr-14  bg-black rounded-3xl">
          <Card name={"Puspha Uparkoti"} review={`40% increase in site visits and 17% increase in sales. In just 2 months. What a turnaround." `} profile={"https://logindesigns.com/admin/files/16005871190.webp"}/>
        </SwiperSlide>
        <SwiperSlide className="swiper-slide1  mr-14  bg-black rounded-3xl">
          <Card name={"Yugesh Chaudhary"} review={`Choosing your service for us is best Responsibility for clinet statisfaction is great! Very responsible. Very helpful very suggestive team."`} profile={"https://logindesigns.com/admin/files/16076562500.webp"} />
        </SwiperSlide>
       
      </Swiper>
    </div>
  );
};

export default Testimonials;
