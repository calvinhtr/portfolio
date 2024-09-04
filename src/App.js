import "./App.css";
import React from "react";
import profile from "./calvin_1.png";
import stripes from "./stripes.png";
import { motion, useAnimation } from "framer-motion";

import { useInView } from "react-intersection-observer";

import { useEffect } from "react"; 


const initVariant = {
  visible: { opacity: 1, scale: 1 },
  hidden: { opacity: 0, scale: 0 },
};

// const control = useAnimation()
// const [ref, inView] = useInView()

function App() {
  return (
    <div className="App">
      <div className="fixed-div fixed-left">
        <button className="fixed-buttons">M E N U</button>
      </div>
      <div className="fixed-div fixed-right">
        <button className="fixed-buttons">C O N T A C T</button>
      </div>

      <header className="App-header">
        <div className="section-name">
          <p className="bitter">Hi, my name is</p>
          <b className="bitter">&nbsp;Calvin.</b>
          {/* <p className="bitter-bold">&nbsp; How can I help you?</p> */}
        </div>
        <img className="profile" src={profile} alt="Logo" />
        <img className="stripes" src={stripes} alt="Logo" />
        <div className="section-desc">
          <p className="bitter-small">
            I'm a software engineer based in NYC, New York.
          </p>
        </div>
      </header>

      <header className="App-header">
        {/* <motion.div
          variants={initVariant}
          initial="hidden"
          animate={control}
          className="section-name"
        > */}
          <p className="bitter">Hi, my name is</p>
          <b className="bitter">&nbsp;Calvin.</b>
          {/* <p className="bitter-bold">&nbsp; How can I help you?</p> */}
        {/* </motion.div> */}
        <img className="profile" src={profile} alt="Logo" />
        <img className="stripes" src={stripes} alt="Logo" />
        <div className="section-desc">
          <p className="bitter-small">
            I'm a software engineer based in NYC, New York.
          </p>
        </div>
      </header>
    </div>
  );
}

export default App;
