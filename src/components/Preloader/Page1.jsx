import { AnimatePresence, motion } from "framer-motion";
import { useEffect } from "react";
import { useState } from "react";
import PreLogo from "../../assets/preLogo.png";

export default function Page1() {
  const [show1, setShow1] = useState(true);
  const [show2, setShow2] = useState(false);
  const [show3, setShow3] = useState(false);
  const [show4, setShow4] = useState(false);
  const [show5, setShow5] = useState(false);
  const [show6, setShow6] = useState(false);
  const [show, setShow] = useState(true);
  const [home, setHome] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setShow1(false);
    }, 1000);
    setTimeout(() => {
      setShow2(true);
    }, 1500);
    setTimeout(() => {
      setShow2(false);
    }, 2500);
    setTimeout(() => {
      setShow3(true);
    }, 3000);

    setTimeout(() => {
      setShow3(false);
    }, 4000);

    setTimeout(() => {
      setShow4(true);
    }, 4500);

    setTimeout(() => {
      setShow4(false);
    }, 5500);
    setTimeout(() => {
      setShow5(true);
    }, 6000);
    setTimeout(() => {
      setShow5(false);
    }, 7000);
    setTimeout(() => {
      setShow6(true);
    }, 7500);
    setTimeout(() => {
      setShow6(false);
      setShow(false);
      setHome(true);
    }, 9000);
  }, [show]);

  return (
    <>
      {show &&
        <div className="bg-black h-[100vh] text-white grid place-content-center text-xl">
          <AnimatePresence mode="popLayout">
            {show1 && (
              <motion.div
                key={1}
                initial={{ scale: 1, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 1, opacity: 0 }}
                transition={{ duration: 1, ease: "backInOut" }}
                className="text-5xl"
              >
                CREATIVITY
              </motion.div>
            )}
            {show2 && (
              <motion.div
                key={2}
                initial={{ scale: 1, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 1, opacity: 0 }}
                transition={{ duration: 1, ease: "backInOut" }}
                className="text-5xl"
              >
                UI/UX
              </motion.div>
            )}
            {show3 && (
              <motion.div
                key={3}
                initial={{ scale: 1, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 1, opacity: 0 }}
                transition={{ duration: 1, ease: "backInOut" }}
                className="text-5xl"
              >
                WEBSITE
              </motion.div>
            )}
            {show4 && (
              <motion.div
                key={4}
                initial={{ scale: 1, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 1, opacity: 0 }}
                transition={{ duration: 1, ease: "backInOut" }}
                className="text-5xl"
              >
                SOFTWARE
              </motion.div>
            )}
            {show5 && (
              <motion.div
                key={5}
                initial={{ scale: 1, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 1, opacity: 0 }}
                transition={{ duration: 1, ease: "backInOut" }}
                className="text-5xl"
              >
                INNOVATION
              </motion.div>
            )}
            {show6 && (
              <motion.div
                key={5}
                initial={{ scale: 1, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 1, opacity: 0 }}
                transition={{ duration: 1, ease: "backInOut" }}
                className=""
              >
                <img src={PreLogo} alt="prelogo" width={250} />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      }
     
    </>
  );
}
