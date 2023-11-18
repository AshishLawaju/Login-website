import { useState } from "react";
import First from "./First";

export default function AskAudio() {
  const [audio, setAudio] = useState(null);

  const [preAudio, setPreAudio] = useState(true);
  const [loadFirst, setLoadFirst] = useState(false);

  console.log("you audio is", audio);
  return (
    <>
      {preAudio && (
        <div className="relative text-white bg-black w-full h-[100vh]">
          <div className="relative  h-[100vh] w-[80vw]  pl-36 flex  items-center">
            <div className="  h-[150px] grid  ">
              <div className="capitalize text-2xl">Hello, welcome to webX !</div>
              <div className="text-md">
                Would you like to experience website with sound ?
              </div>

              <div className="flex items-center gap-8">
                <p>--------------------</p>
                <button
                  onClick={() => {
                    setAudio(true);
                    setPreAudio(false);
                    setLoadFirst(true);
                  }}
                >
                  Yes Please !
                </button>
                <button
                  onClick={() => {
                    setAudio(false);
                    setPreAudio(false);
                    setLoadFirst(true);
                  }}
                >
                  No !
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {loadFirst && <First audio={audio} />}
    </>
  );
}
