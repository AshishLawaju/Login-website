import Particle from "./components/Particle";
import logo from "./assets/logo.png";
import { useEffect, useReducer, useState } from "react";
import Swip from "./components/swipperSlider/Swip";
import { NavLink, Navigate, useNavigate } from "react-router-dom";
import Services from "./components/slideSection/Services";
import menus from "./assets/menus.png";
import { RxHamburgerMenu } from "react-icons/rx";
import bg1 from "./assets/bg1.jpg";
import { Icon } from "@iconify/react";
import Footer from "./components/Footer";
import WebXLogo from "./assets/WhiteWebX.png"
export default function App() {
  const slides = [
    {
      // url: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2620&q=80",
      // url: "https://logindesigns.com/admin/files/15740833060.webp",
      url: bg1,
    },
    {
      // url: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80",
      url: "https://logindesigns.com/admin/files/15740833072.webp",
    },
    {
      // url: "https://images.unsplash.com/photo-1661961112951-f2bfd1f253ce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2672&q=80",
      url: "https://logindesigns.com/admin/files/15740833095.webp",
    },

    {
      // url: "https://images.unsplash.com/photo-1512756290469-ec264b7fbf87?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2253&q=80",
      url: "https://logindesigns.com/admin/files/15740832510.webp",
    },
    {
      url: "https://logindesigns.com/admin/files/15740833083.webp",
      // url: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2671&q=80",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  function changeSlide() {
    goToSlide(nextSlide());
  }
  setTimeout(nextSlide, 3000);

  // const [cBg, setCBg] = useState(1);

  // function changeBg() {
  //   const images = [
  //     "url(/src/assets/img1.jpg)",
  //     "url(/src/assets/img2.jpg)",
  //     "url(/src/assets/img3.jpg)",
  //     "url(/src/assets/img4.jpg)",
  //     "url(/src/assets/img5.jpg)",
  //   ];

  //   const bg = Math.floor(Math.random() * images.length);
  //   console.log("Here is the random ");
  //   console.log(bg);
  //   console.log(images[bg]);
  // }
  // const images = [
  //   "url(/src/assets/img1.jpg)",
  //   "url(/src/assets/img2.jpg)",
  //   "url(/src/assets/img3.jpg)",
  //   "url(/src/assets/img4.jpg)",
  //   "url(/src/assets/img5.jpg)",
  // ];

  // setInterval(changeBg, 10000);

  // useEffect(() => {
  //   chnageBg;
  // }, [cBg]);
  // function chnageBg() {
  //   setCBg(cBg < 5 ? cBg + 1 : 1);
  //   console.clear(cBg);
  // }
  // setTimeout(chnageBg, 2000);

  // const [page, setPage] = useState(0);

  // function pageHandler(pag) {
  //   setPage(pag);
  //   console.log(page);
  // }

  // console.log(page);

  // const [isActiveHome, setIsActiveHome] = useState(true);
  // const [isActiveAbout, setIsActiveAbout] = useState(false);
  // const [isActiveService, setIsActiveService] = useState(false);
  // const [isActiveTestimonials, setIsActiveTestomonials] = useState(false);
  // const [isActiveContact, setIsActiveContact] = useState(false);

  const [activeIndex, setActiveIndex] = useState(0);
  const navigate = useNavigate();

  return (
    <>
      <main className=" opacity-90 h-[100vh]">
        <section>
          {/* <div style={{backgroundImage:`url(${backg})`,backgroundRepeat:"no-repeat",backgroundSize:"cover"}} className="w-full h-[100vh] bg-gradient-to-r from-purple-500 to-pink-500 opacity-90">This is div</div> */}

          <div className="">
            {/* <div
              className={`bg-[url(/src/assets/img1.jpg)]  h-screen bg-cover bg-center bg-no-repeat`}
            > */}
            <div
              style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
              className="w-[100vw] h-[100vh]   bg-center bg-cover ease-in-out duration-500 bg-fixed absolute top-0 bottom-0 right-0 left-0"
            >
              <div className="relative h-screen bg-gradient-to-r from-indigo-700 opacity-75 to-pink-700 from">
                <div className="relative h-screen bg-black/30 ">
                  <div className="nav">
                    <div className="flex justify-between ">
                      <div className="max-sm:max-md:w-20 max-sm:max-md:ml-0  max-sm:max-md:absolute top-0 ">
                        <img
                          src={WebXLogo}
                          alt="logo"
                          width={120}
                          height={100}
                          onClick={() => navigate("/")}
                          className=" sm:mt-6 sm:ml-16 max-sm:mt-8 max-sm:ml-8"
                        />
                      </div>

                      <button
                        onClick={() => navigate("/ourteam")}
                        className="border-2 z-50 border-[#ffffff] rounded-full cursor-pointer text-white  pr-3.5  pl-3.5 hover:text-[#ffffff75] hover:border-[#ffffff75] text-lg leading-normal mt-5 mb-5 mr-12  max-sm:max-md:hidden"
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

                    <div className="max-sm:absolute max-sm:max-lg:right-5 max-sm:max-lg:top-8 sm:hidden    ">
                      <RxHamburgerMenu color="white" width={200} height={200} />
                    </div>
                  </div>

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
                </div>
              </div>
            </div>
          </div>
        </section>
        <Particle />
        <Footer/>
      </main>
      {/* <Navbar></Navbar>? */}
    </>
  );
}
