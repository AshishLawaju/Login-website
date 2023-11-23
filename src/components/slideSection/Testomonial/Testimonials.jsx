// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { useEffect, useState } from "react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import "./stylesTestimonials.css";

// import required modules
import { Pagination } from "swiper/modules";
import Card from "../Card";

const Testimonials = () => {
  const [slide, setSlide] = useState(3);

  useEffect(() => {
    if (window.innerWidth > 1280) {
      console.log(">1280");
      setSlide(3);
    } else if (window.innerWidth > 680) {
      console.log(">680");
      setSlide(2);
    } else {
      console.log("very less");
      setSlide(1);
    }
  }, [innerWidth]);

  return (
    <div className="flex flex-col relative  border-white items-center justify-center w-[80%] h-[70vh] gap-1 ">
      <h1 className="text-white text-4xl font-bold max-md:2xl">Testimonials</h1>

      <Swiper
        //   effect={"coverflowEffect"}
        //   grabCursor={true}

        //   pagination={true}
        //   centeredSlides={true}
        //   slidesPerView={"auto"}
        //   spaceBetween={70}
        //   coverflowEffect={{
        //     rotate: 10,
        //     stretch: 12,
        //     depth: 100,
        //     modifier: 1,
        //     slideShadows: false,

        //   }

        // }
        //  loop={true}
        autoplay={{ delay: 5000 }}
        centeredSlides={true}
        slidesPerView={slide}
        spaceBetween={12}
        pagination={{
          clickable: true,
        }}
        loop={true}
        modules={[Pagination]}
        className="mySwiper1  "
      >
        <SwiperSlide className="swiper-slide1 w-[50vw] bg-blue-500">
          <Card
            name={"Kamlesh "}
            review={`"They have done an absoutely great job for my company's logo design. Professional and really passionate."`}
            profile={"https://logindesigns.com/admin/files/16004856930.webp"}
          />
        </SwiperSlide>
        <SwiperSlide className="swiper-slide1  bg-black rounded-3xl">
          <Card
            name={"Suraj Jung Thapa"}
            review={` "You gurs made it so simple. My new site is just visual pleasing. Just
        Yesterday some of my customers messaged sayinng how much I liked the new
        site. Thanks guys!" `}
            profile={"https://logindesigns.com/admin/files/16005130380.webp"}
          />
        </SwiperSlide>
        <SwiperSlide className="swiper-slide1    bg-black rounded-3xl">
          <Card
            name={"Puspha Uparkoti"}
            review={`40% increase in site visits and 17% increase in sales. In just 2 months. What a turnaround." `}
            profile={"https://logindesigns.com/admin/files/16005871190.webp"}
          />
        </SwiperSlide>
        <SwiperSlide className="swiper-slide1   bg-black rounded-3xl">
          <Card
            name={"Yugesh Chaudhary"}
            review={`Choosing your service for us is best Responsibility for clinet statisfaction is great! Very responsible. Very helpful very suggestive team."`}
            profile={"https://logindesigns.com/admin/files/16076562500.webp"}
          />
        </SwiperSlide>
        <SwiperSlide
          SwiperSlide
          className="swiper-slide1   bg-black rounded-3xl"
        >
          <Card
            name={"Kamlesh Shrestha"}
            review={`"They have done an absoutely great job for my company's logo design. Professional and really passionate."`}
            profile={"https://logindesigns.com/admin/files/16004856930.webp"}
          />
        </SwiperSlide>
        <SwiperSlide className="swiper-slide1  bg-black rounded-3xl">
          <Card
            name={"Suraj Jung Thapa"}
            review={` "You gurs made it so simple. My new site is just visual pleasing. Just
        Yesterday some of my customers messaged sayinng how much I liked the new
        site. Thanks guys!" `}
            profile={"https://logindesigns.com/admin/files/16005130380.webp"}
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Testimonials;
