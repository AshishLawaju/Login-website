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
        <div>
          <p>Do you want to experence with sound ?</p>
          <button
            onClick={() => {
              setAudio(true);
              setPreAudio(false);
              setLoadFirst(true);
            }}
          >
            Yes
          </button>
          <button
            onClick={() => {
              setAudio(false);
              setPreAudio(false);
              setLoadFirst(true);
            }}
          >
            No
          </button>
        </div>
      )}

      {loadFirst && <First audio={audio} />}
    </>
  );
}
