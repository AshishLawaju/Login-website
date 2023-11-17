/* eslint-disable react/prop-types */
import Page1 from "./Page1";
import { useState } from "react";
import App from "../../App"
export default function First({audio}) {

    const [show, setShow] = useState(true);

    setTimeout(() => {
      setShow(false);
    }, 9000);
  return (
    <>
    {show && <Page1 audio={audio}/>}
      {!show && <App audio={audio}/>}
    </>
  )
}
