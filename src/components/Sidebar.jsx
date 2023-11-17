/* eslint-disable react/prop-types */
import { Icon } from "@iconify/react";
import Swip from "./swipperSlider/Swip";
export default function Sidebar({ audio,activeIndex, setActiveIndex }) {
  return (
    <nav className="sidebar  ">
      <div className="">
        <div className="mt-48 ml-12 max-sm:max-md:hidden ">
          <ul className="text-slate-400  p-6 flex flex-col gap-6 w-12 border border-slate-300 items-center justify-center rounded-full">
            <li className=" items-center  ">
              <div
                className={`  rounded-full   ${activeIndex === 0 ? "" : ""}`}
              ></div>
              <a href="#home" className={activeIndex === 0 ? "active" : ""}>
                <Icon icon="ic:outline-home" width={25} />
              </a>
            </li>
            <li className="">
              <div
                className={` rounded-full  ${activeIndex === 1 ? "" : ""}`}
              ></div>
              <a href="#about " className={activeIndex === 1 ? "active" : ""}>
                <Icon icon="octicon:person-24" width={21} />
              </a>
            </li>
            <li className="flex items-center ">
              <div></div>
              <a
                href="#service"
                className={activeIndex === 2 ? "active" : ""}
                onClick={() => {}}
              >
                <Icon icon="la:stream" width={24} />{" "}
              </a>
            </li>
            <li className="">
              <div className={`  ${activeIndex === 3 ? "" : ""}`}></div>
              <a
                href="#testimonials"
                className={activeIndex === 3 ? "active" : ""}
              >
                <Icon icon="mi:message" width={21} />
              </a>
            </li>
            <li className="">
              <div className={` ${activeIndex === 4 ? "" : ""}`}></div>
              <a href="#customer" className={activeIndex === 4 ? "active" : ""}>
                <Icon icon="mdi:envelope-outline" width={21} />
              </a>
            </li>
          </ul>
        </div>

        <div className="w-[75vw]   ml-[20%] h-[100vh] absolute top-0 ">
          <Swip audio={audio}
            activeIndex={activeIndex}
            setActiveIndex={setActiveIndex}
          ></Swip>
        </div>
      </div>
    </nav>
  );
}
