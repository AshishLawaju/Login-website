// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./styles1.css";
import Logo from "../../../assets/logo.png";
// import required modules
import { Pagination } from "swiper/modules";
import Team1 from "./Team1";
import Team2 from "./Team2";
import Team3 from "./Team3";
import Team4 from "./Team4";
import Team5 from "./Team5";

export default function OurTeam() {
  return (
    <>
      <div className="relative h-screen bg-gradient-to-r from-indigo-700 opacity-75 to-pink-700 from">
        <div className="relative h-screen bg-black/30 ">
          <div className="h-[100vh] w-full">
            <div className="w-full   absolute flex justify-between">
              <div className="w-full max-md:w-24 max-md:h-4">
                <img
                  src={Logo}
                  alt="logo"
                  width={120}
                  height={100}
                  className=" sm:mt-6 sm:ml-16 max-sm:mt-8 max-sm:ml-8"
                />
              </div>
              <button className="border-2 border-[#ffffff] rounded-full cursor-pointer text-white  pr-3.5  pl-3.5 hover:text-[#ffffff75] hover:border-[#ffffff75] text-lg leading-normal mt-5 mb-5 mr-12  max-sm:max-md:hidden">
                Home
              </button>
            </div>
            <Swiper
              direction={"vertical"}
              pagination={{
                clickable: true,
              }}
              modules={[Pagination]}
              className="mySwiper  w-[90vw] h-[90vh]"
            >
              <SwiperSlide className=" ">
                <Team1 />
              </SwiperSlide>
              <SwiperSlide className="">
                <Team2 />
              </SwiperSlide>
              <SwiperSlide className=" ">
                <Team3 />
              </SwiperSlide>
              <SwiperSlide className="">
                <Team4 />
              </SwiperSlide>
              <SwiperSlide className=" ">
                <Team5 />
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>{" "}
    </>
  );
}
