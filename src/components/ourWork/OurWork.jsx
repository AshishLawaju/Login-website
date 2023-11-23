import { AnimatePresence, backInOut } from "framer-motion";
import { motion } from "framer-motion";
import Footer from "../Footer";
import Navbar from "../Navbar";
import { useNavigate } from "react-router-dom";
export default function OurWork() {
    const navigate = useNavigate()
  return (
    <>
      <div className="absolute w-full">
        <Navbar />
      </div>
      <div className="bg-gradient-to-br from-pink-800 to-purple-800 w-[100vw] h-[100vh]">
        <Footer />

        <div className="h-[100vh] flex flex-col gap-10 justify-center items-center  text-white text-4xl max-md:text-2xl">
          <AnimatePresence mode="popLayout">
            <motion.div
              initial={{ opacity: 0, y: -200 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 200 }}
              transition={{ ease: backInOut, duration: 2 }}
            >
              Coming Soon ...
            </motion.div>
          </AnimatePresence>

          <AnimatePresence mode="popLayout">
            <motion.button initial={{rotate:"300deg",opacity:0}} animate={{opacity:1, rotate:"0deg"}} transition={{duration:1,delay:2 ,ease: "circInOut"}} className="border px-5 py-3 text-base rounded-full hover:border-2 hover:ring-2 hover:ring-white" onClick={()=>navigate("/home")}>Go Back</motion.button>
          </AnimatePresence>
        </div>
      </div>
    </>
  );
}
