import { useState } from "react";
import Story from "./Story";


import { useNavigate } from "react-router-dom";
export default function AskAudio() {
  const [audio, setAudio] = useState(null);

  const [preAudio, setPreAudio] = useState(true);
  
  const [story,setStory] = useState(false)

  const navigate = useNavigate()

  return (
    <>
      {preAudio && (
        <div className="relative text-white bg-black w-full h-[100vh]">
          <div className="relative  h-[100vh] w-[80vw]   pl-36 max-sm:pl-10 flex  items-center">
            <div className="  h-[150px] grid  ">
              <div className="capitalize text-2xl">Hello, welcome to webX !</div>
              <div className="text-md">
                Would you like to experience website with sound ?
              </div>

              <div className="flex items-center gap-8">
                <p>------------------</p>
                <button
                  onClick={() => {
                    setAudio(true);
                    setPreAudio(false);
                    
                    setStory(true)
                  }}
                >
                  Yes Please !
                </button>
                <button
                  onClick={() => {
                    setAudio(false);
                    setPreAudio(false);
                    // setLoadFirst(true);
                    navigate("/home")
                  }}
                >
                  No !
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {story && <Story />}
      {/* {loadFirst && <App audio={audio} />} */}
    </>
  );
}
