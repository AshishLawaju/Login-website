import { useState } from "react";
import { motion, AnimatePresence, transform, backInOut } from "framer-motion";

const information = [
  {
    title: "LEGAL SERVICE",
    subTitle: [
      "Company Registration",
      "  PAN/VAT Registration",
      "Trademark Registration",
    ],
  },

  {
    title: "MULTIMEDIA SERVICE",
    subTitle: [
      "Logo & Graphic Design",
      "Branding & Printing",
      "  Photography & Videography",
      "Animation",
    ],
  },
  {
    title: " FINANCE SERVICE",
    subTitle: ["Accounting", "Auditing", "Taxation", "Advisory", "Investment"],
  },
  {
    title: " IT SERVICE",
    subTitle: [
      "Website Design & Development",
      "Android Application Development",
      "iOS Application Development",
      "Web Application Development",
      "Software Development",
      "IT Support",
    ],
  },
  {
    title: "BUSINESS SERVICE",
    subTitle: [
      "Business Consultancy",
      "New Business Establishment",
      "Idea & Research",
      "Sales Strategy",
    ],
  },
  {
    title: "MARKETING SERVICE",
    subTitle: [
      "Strategic Planning & Production",
      "TV & Radio Commercials",
      "Digital Marketing & SEO",
      "Social media marketing",
      "Product & Service Promotion",
    ],
  },
];

const Services = () => {
  const [seeMore, setSeeMore] = useState(true);
  const [seeMore2,setSeeMore2] =useState(false)

  return (
    <div className=" w-full h-[100vh]   ">
      <h2 className="mt-[8%]    ml-56 text-white max-md:ml-0  md:max-lg:ml-28 max-md:mt-[20%] ]">
        <p className="static text-xl  text-start  max-md:p-4  max-vs:hidden">
          We feel privileged to offer creative & innovative services to you.
        </p>
      </h2>
      <div className="grid grid-cols-2  mt-4 max-md:mt-0    max-md:grid-cols-1  max-md:grid-rows-3   place-content-center  ">
        {information.map((info, index) => {
          return (
            <>
              <AnimatePresence mode="popLayout">
                {seeMore && (
                  <motion.div
                    initial={{ x:-500 }}
                    animate={{  x:0 }}
                    exit={{ x: -500 }}
                    transition={{ duration: 0.5 ,ease:"easeOut" }}
                    
                    key={info}
                    className={` max-md:${index >= 3 ? "hidden" : ""} `}
                  >
                    <h3 className="text-2xl pt-3   max-sm:pt-0 text-white text-left ml-[26%] max-sm:ml-[10%] max-sm:text-lg max-sm:mt-0">
                      <span className="text-xl ">&gt;</span>
                      {info.title}
                    </h3>
                    <div className=" ml-[26%] max-sm:ml-[9%]  max-sm:p-0">
                      <ul className="list-disc ml-6 p-0 ">
                        {info.subTitle.map((sub) => {
                          return (
                            <li
                              key={info.title}
                              className="ml-4 max-sm:ml-0 p-0 text-left text-[#b4afbf] text-base "
                            >
                              {sub}
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                  </motion.div>
                )}
                </AnimatePresence>
                {seeMore2 && (

                  <AnimatePresence mode="">
                  <motion.div
                    initial={{
                      x:500
                    }}
                    animate={{x:0}}
                    exit={{ rotate:"30deg",x:500}}
                    transition={{ duration: 1 ,ease:"easeOut"}}
                    key={info}
                    className={` max-md:${index < 3 ? "hidden" : ""}  `}
                  >
                    <h3 className="text-2xl pt-3   max-sm:pt-0 text-white text-left ml-[26%] max-sm:ml-[10%] max-sm:text-lg max-sm:mt-0">
                      <span className="text-xl ">&gt;</span>
                      {info.title}
                    </h3>
                    <div className=" ml-[26%] max-sm:ml-[9%]  max-sm:p-0">
                      <ul className="list-disc ml-6 p-0 ">
                        {info.subTitle.map((sub) => {
                          return (
                            <li
                              key={info.title}
                              className="ml-4 max-sm:ml-0 p-0 text-left text-[#b4afbf] text-base "
                            >
                              {sub}
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                  </motion.div>
                  </AnimatePresence>
                )}
            </>
          );
        })}
      </div>
      <button
        onClick={() => {
          setSeeMore(!seeMore);
          setSeeMore2(!seeMore2)
        }}
        className="border-2 border-[#ffffff] rounded-full text-white  pr-3.5  pl-3.5 hover:text-[#ffffff75] hover:border-[#ffffff75] text-lg leading-normal mt-5 mb-5 mr-12  max-sm:text-sm  md:hidden"
      >
        {seeMore?"See More":"Back"}
      </button>
    </div>
  );
};

export default Services;
