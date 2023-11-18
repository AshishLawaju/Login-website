import Particle from "./components/Particle";
import logo from "./assets/logo.png";
import { useEffect, useReducer, useState } from "react";
import Swip from "./components/swipperSlider/Swip";
import { NavLink, Navigate, useNavigate } from "react-router-dom";
import Services from "./components/slideSection/Services";
import menus from "./assets/menus.png";
import bg1 from "./assets/bg1.jpg";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
export default function App({audio}) {
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

  return (
    <>
      <main className="  h-[100vh]">
        <section>
          {/* <div style={{backgroundImage:`url(${backg})`,backgroundRepeat:"no-repeat",backgroundSize:"cover"}} className="w-full h-[100vh] bg-gradient-to-r from-purple-500 to-pink-500 opacity-90">This is div</div> */}

          <div className="">
            {/* <div
              className={`bg-[url(/src/assets/img1.jpg)]  h-screen bg-cover bg-center bg-no-repeat`}
            > */}
            <div
              style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
              className="w-[100vw] h-[100vh]   bg-center bg-cover ease-in-out duration-500 bg-fixed relative "
            >
              <div className=" h-screen w-full bg-gradient-to-r from-indigo-700 opacity-80 to-pink-700   ">
                <div className="absolute w-full opacity-100 h-screen bg-black/30 ">
                  <Navbar />
                  <Sidebar audio={audio}
                    activeIndex={activeIndex}
                    setActiveIndex={setActiveIndex}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        <Particle />
        <Footer />
      </main>
      {/* <Navbar></Navbar>? */}
    </>
  );
}
