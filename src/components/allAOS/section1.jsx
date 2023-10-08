import AOS from 'aos';
import 'aos/dist/aos.css';

import React,{useEffect} from "react";
// importing aos


export default function Section1() {
    useEffect(() => {
        AOS.init();
      }, [])
  return (
    <div data-aos="fade-up" >
      This is my  MyFunctionalComponent 
    </div>
  );
}   