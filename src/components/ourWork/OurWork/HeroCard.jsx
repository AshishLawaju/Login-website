import WebX from "../../../assets/WebX.png";
import Programmer from "./programmer.gif"
import Logo from "../../../assets/preLogo.png";
import { Icon } from "@iconify/react";
import "/src/Components/OurWork/OurWork/indexHero.css";

export default function HeroCard() {
  return (
    <div className="md:w-full md:flex md:place-content-center lg:w-[20vw] lg:fixed lg:left-12 lg:mt-4 ">
      <div className="border border-slate-600 rounded-3xl  mt-8 md:mt-6 text-white md:w-[80vw] ">
        <div className="p-8">
          <div className="flex justify-between items-center">
            <img src={Logo} alt="logo" width={120} />

            <p className="text-sm">
              Design & <br />
              Development
            </p>
          </div>
          <div className="mt-8 w-full grid place-content-center">
            <img
            src={Programmer}
            alt="logo profile"
            width={200}
            className=" border border-white rounded-3xl p-12"
          />

           
          </div>

          <div className=" justify-center  place-content-center ">
            <div className=" w-full grid place-content-center">
              <span className="mt-12 text-2xl ">logincorpnepal@gmail.com</span>
            </div>

            <div className=" w-full grid place-content-center">
              <span className="text-xl text-center "> Samakhusi,Kathmandu</span>
            </div>

            <div className="w-full grid place-content-center text-gray-400 text-sm mt-8 mb-8">
              &copy; 2023 WebX. All Rights Reserved
            </div>

            <div className="flex mb-8 gap-2 place-content-center">
              <div className="border border-slate-500 p-4 rounded-full">
                <Icon icon="mdi:twitter" color="gray" />
              </div>

              <div className="border border-slate-500 p-4 rounded-full">
                <Icon icon="icon-park-outline:dribble" color="grey" />
              </div>

              <div className="border border-slate-500 p-4 rounded-full">
                <Icon icon="mdi:instagram" color="grey" />
              </div>

              <div className="border border-slate-500 p-4 rounded-full">
                <Icon icon="mdi:github" color="grey" />
              </div>
            </div>
            <button className="bg-blue-400  w-full rounded-3xl text-black p-3 ">
              <a href="#">
                <div className="flex justify-center items-center gap-1">
                <Icon icon="ep:back"  width={20}/>
                  <p>Go Back to Home</p>
                </div>
              </a>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
