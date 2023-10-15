import Navbar from "./components/Navbar";
import Particle from "./components/Particle";
import logo from "./assets/logo.png";
import { useEffect, useReducer, useState } from "react";
import Swip from "./components/swipperSlider/Swip";

export default function App() {
  const slides = [
    {
      url: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2620&q=80",
    },
    {
      url: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80",
    },
    {
      url: "https://images.unsplash.com/photo-1661961112951-f2bfd1f253ce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2672&q=80",
    },

    {
      url: "https://images.unsplash.com/photo-1512756290469-ec264b7fbf87?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2253&q=80",
    },
    {
      url: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2671&q=80",
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
              className="w-full h-[100vh] object-cover  bg-center bg-cover duration-500"
            >
              <div className="relative h-screen bg-gradient-to-r from-indigo-700 opacity-75 to-pink-700 from">
                <div className="relative h-screen bg-black/30 ">
                  <div className="nav">
                    <div className="flex justify-between ">
                      <img
                        src={logo}
                        alt="logo"
                        width={120}
                        height={100}
                        className="mt-6 ml-16"
                      />

                      <button className="border-2 border-[#ffffff] rounded-full text-white  pr-3.5  pl-3.5 hover:text-[#ffffff75] hover:border-[#ffffff75] text-lg leading-normal mt-5 mb-5 mr-12">
                        Our Team
                      </button>
                    </div>
                  </div>
                  <div className="flex">
                    <div className="mt-48 ml-12">
                      <ul className="text-white border border-white p-4">
                        <li className="bg-yellow-200 active:bg-blue-600">
                          {" "}
                          <a href="#">Home</a>{" "}
                        </li>
                        <li>About</li>
                        <li>Portfolio</li>
                        <li>Service</li>
                      </ul>
                    </div>
                    <div className="w-[75vw]   ml-[20%] h-[100vh] absolute top-0 ">
                      <Swip></Swip>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <Particle />
      </main>
      {/* <Navbar></Navbar>? */}
    </>
  );
}
