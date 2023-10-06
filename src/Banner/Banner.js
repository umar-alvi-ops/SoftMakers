import { useState, useEffect } from "react";
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import { sliderData } from "./sliderdata";
import './Banner.css';
import { NavLink } from "react-router-dom";
const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slideLength = sliderData.length;

  const autoScroll = true;
  let slideInterval;
  let intervalTime = 5000;

  const nextSlide = () => {
    setCurrentSlide(currentSlide === slideLength - 1 ? 0 : currentSlide + 1);
    console.log("next");
  };

  const prevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? slideLength - 1 : currentSlide - 1);
    console.log("prev");
  };

  function auto() {
    slideInterval = setInterval(nextSlide, intervalTime);
  }

  useEffect(() => {
    setCurrentSlide(0);
  }, []);

  useEffect(() => {
    if (autoScroll) {
      auto();
    }
    return () => clearInterval(slideInterval);
  }, [currentSlide]);

  return (
    <div className="slider  ">
      <KeyboardArrowLeftIcon className="arrow prev" onClick={prevSlide} />
      <KeyboardArrowRightIcon className="arrow next" onClick={nextSlide} />
      {sliderData.map((slide, index) => {
        return (
          <div
            className={index === currentSlide ? "slide current" : "slide"}
            key={index}
          >
            {index === currentSlide && (
              <div className=" text-center">
                <img src={slide.image} alt="slide" className="image" />
                <div className="content">
                  <h2 className="heading">{slide.heading}</h2>
                  <p className="des">{}</p>
                  <button className="btn btn-primary mt-4">Get Started</button>
                </div>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default Slider;