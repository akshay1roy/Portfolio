import React from "react";
import "./testimonials.scss";
function Testimonials() {
  const data = [
    {
      id: "1",
      name: "Shubham kumar",
      title: "CEO of Gunius",
      icon: "./assets/youtube.png",
      img: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      // img:"https://plus.unsplash.com/premium_photo-1663090146395-93dd7f1e2696?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      des: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Totam numquam in voluptatem!",
    },
    {
      id: "2",
      name: "Akshay kumar",
      title: "Senior Developer",
      icon: "./assets/linkdin1.png",
      img: "https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      // img:"https://plus.unsplash.com/premium_photo-1663090146395-93dd7f1e2696?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      des: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Totam numquam in voluptatem!",
      featured: true,
    },
    {
      id: "3",
      name: "Vivek kumar",
      title: "Co-founder for HTNK",
      icon: "./assets/twitter1.png",
      img: "https://images.pexels.com/photos/3228892/pexels-photo-3228892.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
      // img:"https://plus.unsplash.com/premium_photo-1663090146395-93dd7f1e2696?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      des: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Totam numquam in voluptatem!",
    },
  ];
  return (
    <div className="testimonials" id="testimonials">
      <h1>Testimonials</h1>
      <div className="container">
        {data.map((p) => (
          <div className={p.featured ? " card featured" : "card"}>
            <div className="top">
              <img src="./assets/right arrow.jpg" className="left" alt="" />
              <img
                className="user"
                src={p.img}
                // src="https://plus.unsplash.com/premium_photo-1663090146395-93dd7f1e2696?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt=""
              />
              <img className="right" src={p.icon} alt="" />
            </div>
            <div className="center">{p.des}</div>
            <div className="bottom">
              <h3>{p.name}</h3>
              <h4>{p.title}</h4>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Testimonials;
