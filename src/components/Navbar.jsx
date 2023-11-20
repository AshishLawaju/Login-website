import WebXLogo from "../assets/WhiteWebX.png";
import { useNavigate } from "react-router-dom";
import { Icon } from "@iconify/react";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import Logo from "../assets/WhiteWebX.png";
export default function Navbar() {
  const [smallNav, setSmallNav] = useState(false);
  const navigate = useNavigate();
  return (
    <div className="nav ">
      <div className="flex justify-between ">
        <button className="max-sm:max-md:w-20 max-sm:max-md:ml-0  max-sm:max-md:absolute top-0  z-50">
          <img
            src={WebXLogo}
            alt="logo"
            width={120}
            height={100}
            onClick={() => navigate("/")}
            className=" sm:mt-6 sm:ml-16 max-sm:mt-8 max-sm:ml-8 z-50"
          />
        </button>

        <button
          onClick={() => navigate("/ourteam")}
          className="border-2 z-50 border-[#ffffff] rounded-full cursor-pointer text-white  py-2 px-5 hover:text-[#ffffff75] hover:border-[#ffffff75] text-md leading-normal mt-5 mb-5 mr-12  max-sm:max-md:hidden"
        >
          Our Team
        </button>
      </div>

      <div></div>
      {/* <img
      src={RxHamburgerMenu}
      alt="hamburger"
      width={30}
      height={120}
      className="max-sm:absolute max-sm:max-lg:right-5 max-sm:max-lg:top-8 sm:hidden   "
    /> */}

      <button className="max-sm:absolute max-sm:max-lg:right-5 max-sm:max-lg:top-8 sm:hidden  z-50  ">
        <Icon
          icon="quill:hamburger"
          color="white"
          width={24}
          onClick={() => {
            setSmallNav(true);
            console.log("you tap navbar");
          }}
        />
      </button>

      <AnimatePresence mode="popLayout">
        {smallNav && (
          <motion.div
            initial={{ y: -1000, opacity: 0.5 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -1000, opacity: 0 }}
            transition={{ duration: "0.2", ease: "easeInOut" }}
            className="h-[70vh] w-full bg-black/95 absolute top-0 z-50  p-5"
          >
            <div className="flex justify-between">
              <button>
                {" "}
                <img src={Logo} alt="logo" width={120} />{" "}
              </button>
              <button
                onClick={() => {
                  setTimeout(setSmallNav(false), 2000);
                }}
              >
                <Icon icon="maki:cross" color="white" width={25} />
              </button>
            </div>

            <div className="text-white mt-10 ">
              <button className="border-2 rounded-3xl px-5  py-2">
                Our Team
              </button>
              <div className="mt-4 p-4">
                <ul className="flex flex-col gap-8 ">
                  <div className=" ">
                    <a
                      
                      href="#home"
                      className="flex items-center gap-2"
                      onClick={()=>setSmallNav(false)}
                    >
                      <Icon icon="ic:outline-home" width={25} />
                      <li>Home</li>
                    </a>
                  </div>
                  <div>
                    <a  href="#about " className="flex items-center gap-2"
                      onClick={()=>setSmallNav(false)}>
                      <Icon icon="octicon:person-24" width={21} />
                      <li>About</li>
                    </a>
                  </div>

                  <div>
                    <a  href="#service" className="flex items-center gap-2"
                      onClick={()=>setSmallNav(false)}>
                      <Icon icon="la:stream" width={24} /> <li>Service</li>
                    </a>
                  </div>

                  <div>
                    <a  href="#testimonials" className="flex items-center gap-2"
                      onClick={()=>setSmallNav(false)}>
                      <Icon icon="mi:message" width={21} />
                      <li>Testimonials</li>
                    </a>
                      </div>

                    <div>
                      <a  href="#customer" className="flex items-center gap-2"
                      onClick={()=>setSmallNav(false)}>

                      
                        <Icon icon="mdi:envelope-outline" width={21} />
                        <li>Contact</li>
                      </a>
                    </div>
                </ul>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
