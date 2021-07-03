import React, { useState } from "react";
import "./Gallary.css";
import images from "../../data/images";

const Gallary = (props) => {
  const [allImages, setAllImages] = useState(images);

  return (
    <div className="gallary">
      {allImages.map((image, index) => (
        <div
          className="img-container"
          key={index}
          onClick={() => props.changeSelectedImage(index)}
        >
          <img src={image} alt={index} />
        </div>
      ))}
    </div>
  );
};

export default Gallary;
