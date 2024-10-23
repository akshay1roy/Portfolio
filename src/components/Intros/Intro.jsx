// import React, { useEffect, useRef } from "react";
import "./intro.scss";
// import { init } from "ityped";

function Intro() {
  // const textRef = useRef();

  // console.log(textRef);

  // useEffect(() => {
  //   init(textRef.current, {
  //     showCursor: false,
  //     backDelay: 1500,
  //     backSpeed: 60,
  //     strings: ["Developer","Desinger","Content-Creater"],
  //   });
  // }, []);

  return (
    <div className="intro" id="intro">
      <div className="left">
        <div className="imgContainer">
          <img src="/assets/man9.webp" alt="" />
          <h2>Images</h2>
        </div>
      </div>

      <div className="right">
        <div className="wrapper">
          <h2>Hi There, I'm</h2>
          <h1>Akshay Kumar</h1>
          <h3>
            {/* Freelance <span ref={textRef}> </span> */}
            <span>Freelancer , Developer , Problem Solver</span>
          </h3>
        </div>

        <a href="#portfolio">
          <img src="assets/down.png" alt="" />
        </a>
      </div>
    </div>
  );
}

export default Intro;
