import { useEffect, useState } from 'react';
import Slider from './ImageSlider/ImageSlider';
import './diet.css';
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";

// import foodsFight from  'https://www.webmd.com/diabetes/foods-fight-type-2';

function Diet() {
    

    return (
     <div>
        <h1 className='DietH'>Diet</h1>

        <Slider />
        

     </div>
    );
  };
  
  export default Diet;