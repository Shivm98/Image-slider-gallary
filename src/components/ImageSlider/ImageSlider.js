import React, { useState } from "react";
import images from "../../data/images";
import "./ImageSlider.css";
import { AiOutlineLeft } from "react-icons/ai";
import { AiOutlineRight } from "react-icons/ai";

const ImageSlider = (props) => {
  const [allImages, setAllImages] = useState(images);
  const [currentIndex, setCurrentIndex] = useState(
    props.selectedIndex ? props.selectedIndex : 0
  );

  const checkIndex = (index) => {
    if (index > allImages.length - 1) {
      return 0;
    }
    if (index < 0) {
      return allImages.length - 1;
    }
    return index;
  };

  const changePrevIndex = () => {
    setCurrentIndex((currentValue) => checkIndex(currentValue - 1));
  };
  const changeNextIndex = () => {
    setCurrentIndex((currentValue) => checkIndex(currentValue + 1));
  };

  return (
    <div>
      <div
        className="image-slider-backdrop"
        onClick={() => props.setactivateImageSlider(false)}
      ></div>
      <div className="image-slider">
        <img src={allImages[currentIndex]} />
        <div className="left-btn" onClick={changePrevIndex}>
          <AiOutlineLeft />
        </div>
        <div className="right-btn" onClick={changeNextIndex}>
          <AiOutlineRight />
        </div>
      </div>
    </div>
  );
};

export default ImageSlider;
