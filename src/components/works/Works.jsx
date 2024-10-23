import React, { useState } from "react";
import "./works.scss";
function Works() {

  const [currentSlider,setcurrentSlider]=useState()


  const data = [
    {
      id: "1",
      icon: "./assets/mobile.png",
      title: "Web Design",
      desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Obcaecati beatae facere sunt",
      // img: "https://unsplash.com/photos/woman-using-macbook-FVgECvTjlBQ",
      img:"https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
      id: "2",
      icon: "./assets/img1.png",
      title: "Mobile Application",
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditat",
      img: "https://img.freepik.com/free-psd/technology-web-design-template_23-2149216787.jpg?w=900&t=st=1726669948~exp=1726670548~hmac=7b79df4c73f2a6bec6c82af42f1b8ac1cdebc94b4afc004ed6cfc00adf792fea",
    },
    {
      id: "3",
      icon: "./assets/shake.jpg",
      title: "Branding",
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditat",
      img: "https://img.freepik.com/free-psd/scooter-landing-page-template_23-2149395506.jpg?w=900&t=st=1726669898~exp=1726670498~hmac=da1a1bd466b0fe149d8b0d91fb1ae1ba57639d7169a0b59f263303e8a0cac57d",
    },
    
  ];

  const handleClick=(way)=>{
    way==="left" ? setcurrentSlider(currentSlider >0 ? currentSlider-1:2 ) : setcurrentSlider(currentSlider<data.length-1? currentSlider+1 :0);
  }

  return (
    <div className="works" id="works">
      <div className="slider" style={{transform:` translateX(-${currentSlider*100}vw)`}}>
        {data.map((d) => (
          <div className="container">
            <div className="item">
              <div className="left">
                <div className="leftContainer">
                  <div className="imgContainer">
                    <img src={d.icon} alt="" />
                  </div>
                  <h2>{d.title}</h2>
                  <p>
                    {d.desc}
                  </p>
                  <span>Projects</span>
                </div>
              </div>
              <div className="right">
                <img src={d.img}
                  // src="https://as1.ftcdn.net/v2/jpg/04/13/52/90/1000_F_413529094_Ltyhy4gk7oRlCBERDqTgbVy7Tmyy4oNF.jpg"
                  alt=""
                />
                {/* <img src="https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" /> */}
              </div>
            </div>
          </div>
        ))}
      </div>

      <img src="assets/arrow6.png" className="arrow left" alt="" onClick={()=>handleClick("left")} />
      <img src="assets/arrow6.png" className="arrow right" alt="" onClick={()=>handleClick("right")} />
    </div>
  );
}

export default Works;
