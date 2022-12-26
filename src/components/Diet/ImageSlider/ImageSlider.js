import { useState, useEffect } from "react";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import { sliderData } from "./SliderData";
import "./Slider.css";

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
    console.log("orev");
  };

  function auto() {
    slideInterval = setInterval(nextSlide, intervalTime);
  }

  useEffect(() => {
    setCurrentSlide(0);
  }, []);

  useEffect(() => {
    if(autoScroll) {
        auto();
    }
    return () => clearInterval(slideInterval);
  }, [currentSlide]);

  return(
    <div className="SlBox">
    <div className="slider">
        <AiOutlineArrowLeft className="arrow prev" onClick={prevSlide} />
        <AiOutlineArrowRight className="arrow next" onClick={nextSlide} />
        {sliderData.map((slide, index) => {
            return (
                <div
                className={index === currentSlide ? "slide current" : "slide"}
                key={index}
                >
                    {index === currentSlide && (
                        <div>
                        <img src={slide.image} alt="slide" className="image" />
                        <div className="content">
                            <h2>{slide.heading}</h2>
                            <p>{slide.desc}</p>
                            {/* <hr/> */}
                        </div>
                        </div>
                    )}
                </div>
            );
        })}
    </div>
    <h2 className="DIH">For more information on proper nutrition, press the button below</h2>
    <a className="butonlnk" href="https://www.webmd.com/diabetes/foods-fight-type-2">Click Here</a>
    </div>
  )
}

export default Slider;

// <a className="btnlnk" href="https://www.webmd.com/diabetes/foods-fight-type-2">Click ME2</a>