import spinner from "./spinner.png";
import { Icon } from "@iconify/react";
import { motion } from "framer-motion";
import { useRef } from "react";
export default function Introduction() {
const reff = useRef(null)

  return (
    
    <motion.div   
    
    initial={{opacity:0 ,y:80}}
    animate={{opacity:1,y:0}}
    exit={{opacity:0.7}}
    transition={{duration:1}}

    ref={reff} className="text-white p-4 md:p-12 mt-8 flex flex-col gap-8">


      <div className="text-5xl md:text-7xl ">
        Hi from <span className="text-blue-500">WebX,</span> Designer and
        Developer
      </div>
      <div className="text-slate-400">
        We design and code beautifully things and you love what we do.
        <br /> Just simple like that
      </div>
      <div className=" relative">
        <Icon
          icon="ph:arrow-down-thin"
          width={40}
          className="absolute max-lg:top-16 max-lg:left-16 lg:right-16 lg:top-16"
        />

        <a href="#portfolio">
          <motion.img
            initial={{}}
            animate={{ rotate: "360deg" }}
            exit={{}}
            transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
            src={spinner}
            alt="spin"
            className="border lg:float-right rounded-full p-3 "
          ></motion.img>
        </a>
      </div>

      <div className="flex gap-8">
        <div className="p-2 flex flex-col gap-6">
          <div className="text-blue-500 text-5xl">10+</div>
          <div className="uppercase text-slate-400 text-sm">
            years of experience
          </div>
        </div>
        <div className="p-2 flex flex-col gap-6">
          <div className="text-blue-500 text-5xl">182+</div>
          <div className="uppercase text-slate-400 text-sm">
            project completed on 15 countries
          </div>
        </div>
      </div>
    </motion.div>
  );
}
