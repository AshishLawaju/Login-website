/* eslint-disable react/prop-types */
import { Icon } from "@iconify/react";
import Swip from "./swipperSlider/Swip";
export default function Sidebar({activeIndex,setActiveIndex}) {
  return (
    <nav className="sidebar">
    <div className="">
      <div className="mt-48 ml-12 max-sm:max-md:hidden ">
        <ul className="text-slate-400  p-4 flex flex-col gap-6">
          <li className="flex items-center gap-2 ">
            <div
              className={`  rounded-full p-2  ${
                activeIndex === 0 ? "bg-white/40" : "bg-white/20"
              }`}
            >
              <Icon icon="ion:home" color="white" />
            </div>
            <a
              href="#home"
              className={activeIndex === 0 ? "active" : ""}
              // onClick={() => {
              //   if (activeIndex === 0) {
              //     setIsActiveHome(true);
              //     setIsActiveAbout(false);
              //     setIsActiveService(false);
              //     setIsActiveTestomonials(false);
              //     setIsActiveContact(false);
              //   }
              // }}
            >
              Home
            </a>
          </li>
          <li className="flex items-center gap-2">
            <div className={`bg-white/20 rounded-full  ${
                activeIndex === 1 ? "bg-white/40" : "bg-white/20"
              }`}>
              <Icon
                icon="mdi:about-variant"
                width={30}
                color="white"
              />{" "}
            </div>
            <a
              href="#about "
              className={activeIndex === 1 ? "active" : ""}
              // onClick={() => {
              //   if (activeIndex === 1) {
              //     setIsActiveHome(false);
              //     setIsActiveAbout(true);
              //     setIsActiveService(false);
              //     setIsActiveTestomonials(false);
              //     setIsActiveContact(false);
              //   }
              // }}
            >
              About
            </a>
          </li>
          <li className="flex items-center gap-2">
            <div className={`bg-white/20 rounded-full p-1  ${
                activeIndex === 2 ? "bg-white/40" : "bg-white/20"
              }`} >
              <Icon
                icon="eos-icons:service"
                width={24}
                color="white"
              />{" "}
            </div>
            <a
              href="#service"
              className={activeIndex === 2 ? "active" : ""}
              onClick={() => {
                // if (activeIndex === 2) {
                //   setIsActiveHome(false);
                //   setIsActiveAbout(false);
                //   setIsActiveService(true);
                //   setIsActiveTestomonials(false);
                //   setIsActiveContact(false);
                // }
              }}
            >
              Service
            </a>
          </li>
          <li className="flex items-center gap-2">
            <div className={`bg-white/20 rounded-full  p-1.5 ${
                activeIndex === 3 ? "bg-white/40" : "bg-white/20"
              }`} >
              <Icon
                icon="ri:user-voice-fill"
                width={20}
                color="white"
              />{" "}
            </div>
            <a
              href="#testimonials"
              className={activeIndex === 3 ? "active" : ""}
              // onClick={() => {
              //   if (activeIndex === 3) {
              //     setIsActiveHome(false);
              //     setIsActiveAbout(false);
              //     setIsActiveService(false);
              //     setIsActiveTestomonials(true);
              //     setIsActiveContact(false);
              //   }
              // }}
            >
              Testimonials
            </a>
          </li>
          <li className="flex items-center gap-2">
            <div className={`bg-white/20 rounded-full p-2 ${
                activeIndex === 4 ? "bg-white/40" : "bg-white/20"
              }`}>
              <Icon
                icon="ion:call-sharp"
                width={16}
                color="white"
              />{" "}
            </div>
            <a
              href="#customer"
              className={activeIndex === 4 ? "active" : ""}
              // onClick={() => {
              //   if (activeIndex === 4) {
              //     setIsActiveHome(false);
              //     setIsActiveAbout(false);
              //     setIsActiveService(false);
              //     setIsActiveTestomonials(false);
              //     setIsActiveContact(true);
              //   }
              // }}
            >
              Contact
            </a>
          </li>
        </ul>
      </div>

      <div className="w-[75vw]   ml-[20%] h-[100vh] absolute top-0 ">
        <Swip
          activeIndex={activeIndex}
          setActiveIndex={setActiveIndex}
        ></Swip>
      </div>
    </div>
  </nav>
  )
}
