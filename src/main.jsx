import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter, Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import AskAudio from "./components/Preloader/AskAudio.jsx";
import OurWork from "./components/ourWork/OurWork.jsx";
import App from "./App.jsx";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
   

      <Routes>
        <Route path="/" element={<AskAudio/>}></Route>
        <Route path="home" element={<App />}> </Route>
        <Route path="/ourwork" element={<OurWork/>}></Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
