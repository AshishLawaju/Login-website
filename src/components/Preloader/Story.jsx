import Logo from "../../assets/preLogo.png";
import Typed from "react-typed";
import Typing from "../../assets/sounds/typing.mp3";
import BackgroundSound from "../../assets/sounds/background.mp3";
import Speech from "../../assets/sounds/intro-speech.mp3";
import { useState } from "react";
import First from "./First";
import { useEffect } from "react";
import App from "../../App";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
export default function Story() {
  const [first, setFirst] = useState(false);
  const [story, setStory] = useState(true);
  const [audio, setAudio] = useState(true);
  const [justSkip, setJustSkip] = useState(false);

  const [audioTime, setAudioTime] = useState(40000);
  const typing = new Audio(Typing);
  const backgroundSound = new Audio(BackgroundSound);
  const speech = new Audio(Speech);
  backgroundSound.play();

  const navigate = useNavigate();

  useEffect(() => {
    typing.play();
    setTimeout(() => {speech.play(); typing.pause()}, 2000);
    setTimeout(() => {
      setStory(false);
      setFirst(true);
      
     
    }, 40000);
  },[]);

  // setTimeout(() => setShowButton(true), 3000);

  return (
    <>
      {story && (
        <>
          {" "}
          <div className="bg-black  text-white w-full h-[100vh] flex justify-center">
            <div className="h-[80vh] w-[70vw]  flex items-center">
              <div className=" h-[50vh] ">
                <div className="max-sm:w-28 ">
                  <img src={Logo} alt="webx logo" />
                </div>

                <div className="mt-6 text-2xl capitalize max-sm:text-lg">
                  <Typed
                    strings={[" Everyone has story to tell,"]}
                    typeSpeed={20}
                    cursorChar=""
                    className="text-2xl"
                  />
                </div>
                <div className="h-[25vh] w-[50vw] mt-6 max-sm:text-sm">
                  {/* <p >
              In the end of the 5th century before our time the first jewels
              were brought to Europe. Since then many have tried to recreate
              something similar in value and in beauty. Some have achieved,
              however many have failed because of their lack of knowledge time
              or other resources. To this day jewels are thought to be one of
              the most precious gems on earth. Although we don't create jewels,
              we do imagine ourselves as jewelers. Just from a different angle.
              
            </p>
              */}

                  <Typed
                    strings={[
                      "In the end of the 5th century before our time the first jewels  were brought to Europe. Since then many have tried to recreate   something similar in value and in beauty. Some have achieved            however many have failed because of their lack of knowledge time  or other resources.            To this day jewels are thought to be one of the most precious gems on earth. Although we don't create jewels, we do imagine ourselves as jewelers. Just from a different angle.",
                    ]}
                    cursorChar=""
                    typeSpeed={50}
                    startDelay={2000}
                    className="text-xl"
                  ></Typed>
                </div>
                <motion.div  initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{}}
                    transition={{ delay: 3 }} className="max-sm:mt-44 lg:mt-12 flex gap-12">
                  <p>_______________</p>

                  <button
                   
                    onClick={() => {
                      setJustSkip(true);
                      setStory(false);
                      speech.pause();
                      typing.pause();
                      setAudioTime(0);
                      navigate("/home");
                    }}
                  >
                    Skip our story
                  </button>
                </motion.div>
              </div>
            </div>
          </div>
        </>
      )}

      {first && <First audio={audio} />}
      {justSkip && <App audio={audio} />}
    </>
  );
}
