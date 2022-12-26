import { useState, useEffect } from "react";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import { exeSliderData } from "./exeSliderData";
import './exeSlider.css';

const ExeImgSlider = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
  const slideLength = exeSliderData.length;

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
    

    return (
     <div>
        <div className="SlBox">
    <div className="slider">
        <AiOutlineArrowLeft className="arrow prev" onClick={prevSlide} />
        <AiOutlineArrowRight className="arrow next" onClick={nextSlide} />
        {exeSliderData.map((slide, index) => {
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
    <h2 className="ExeH">Exercise and phsical activity can lower your blood sugar levels for more than 24 hours.</h2>

    </div>

     </div>
    );
  };
  
  export default ExeImgSlider;