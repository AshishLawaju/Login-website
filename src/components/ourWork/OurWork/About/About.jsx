import { AnimatePresence, motion,useInView } from "framer-motion";
import { useRef } from "react";
export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref);


  return (
    <AnimatePresence mode="">
       <motion.section
        ref={ref}
    
       
        //  initial={{ opacity: 0, y: 100 }}
        // animate={{ opacity: 1, y: 0 }}
        // exit={{ opacity: 0.7 }}
        // transition={{ duration: 1, delay: 0.5 }}


        className="p-4 text-white flex flex-col gap-8"
        style={{
          transform: isInView ? "none" : "translateY(100px)",
          opacity: isInView ? 1 : 0,
          transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
        }}
      >
        <div className="text-4xl ">
          Every great design begin with an even{" "}
          <span className="text-blue-500">better story</span>{" "}
        </div>
        <div className="text-slate-400 leading-[2rem]">
          Since beginning my journey as a freelance designer nearly 8 years ago,
          I've done remote work for agencies, consulted for startups, and
          collaborated with talented people to create digital products for both
          business and consumer use. I'm quietly confident, naturally curious,
          and perpetually working on improving my chopsone design problem at a
          time.
        </div>
      </motion.section>
    </AnimatePresence>
  );
}
