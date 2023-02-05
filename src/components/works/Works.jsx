import { useState } from "react";
import "./works.scss";

export default function Works() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const data = [
    {
      id: "1",
      icon: "./assets/ecommerce.png",
      title: "Amazon clone",
      desc:
        " Amazon’s e-commerce website clone",
      img:
        "./apps/amazon-clone.PNG",
        link: "https://clone-73ad5.web.app/",
    },
    {
      id: "2",
      icon: "./assets/mobile.png",
      title: "Snake Game",
      desc:
        "A snake game is an arcade game that involves a snake moving inside a box. Your score increases based on how many objects/fruit the snake eats. If it collides with itself or to the boundary of the box then the game is over.",
      img:
        "./apps/snakegame.PNG",
      link: "https://appsnakegame.netlify.app",
    },
    {
      id: "3",
      icon: "./assets/globe.png",
      title: "Movie App",
      desc:
        "The movie app is basically a project focuses on the web Api calls. Here the user needs to search a movie and based on the keyword entered app provides suggestions",
      img:
        "./apps/movieapp.PNG",
        link: "https://movieappwebapi.netlify.app",
    },

  ];

  const handleClick = (way) => {
    way === "left"
      ? setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : 2)
      : setCurrentSlide(currentSlide < data.length - 1 ? currentSlide + 1 : 0);
  };
  
  return (
    <div className="works" id="works">
      <div
        className="slider"
        style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
      >
        {data.map((d) => (
          <div className="container">
            <div className="item">
              <div className="left">
                <div className="leftContainer">
                  <div className="imgContainer">
                    <img src={d.icon} alt="" />
                  </div>
                  <h2>{d.title}</h2>
                  <p>{d.desc}</p>
                  <span><a href={d.link} target="_blank">Project</a></span>
                </div>
              </div>
              <div className="right">
                <img
                  // src="https://99designs-blog.imgix.net/blog/wp-content/uploads/2018/10/attachment_100040756-e1538485934255.jpeg?auto=format&q=60&fit=max&w=930"
                  src={d.img}
                  alt=""
                />
              </div>
            </div>
          </div>
        ))}
      </div>
      <img
        src="assets/arrow.png"
        className="arrow left"
        alt=""
        onClick={() => handleClick("left")}
      />
      <img
        src="assets/arrow.png"
        className="arrow right"
        alt=""
        onClick={() => handleClick()}
      />
    </div>
  );
}