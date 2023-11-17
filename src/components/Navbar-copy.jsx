
import WebXLogo from "../assets/WhiteWebX.png"
import { NavLink, Navigate, useNavigate } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";

export default function Navbar() {
    const navigate = useNavigate();
  return (
   
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

  )
}
