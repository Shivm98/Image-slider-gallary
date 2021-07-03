import React, { useState } from "react";
import Gallary from "./components/Gallary/Gallary";
import ImageSlider from "./components/ImageSlider/ImageSlider";

function App() {
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [activateImageSlider, setactivateImageSlider] = useState(false);

  const changeSelectedImage = (index) => {
    console.log(index);
    setSelectedIndex(index);
    setactivateImageSlider(true);
    console.log(selectedIndex, activateImageSlider);
  };

  return (
    <div className="App">
      <Gallary
        changeSelectedImage={changeSelectedImage}
        setactivateImageSlider={setactivateImageSlider}
      />
      {activateImageSlider ? (
        <ImageSlider
          selectedIndex={selectedIndex}
          ImageSlider={ImageSlider}
          setactivateImageSlider={setactivateImageSlider}
        />
      ) : null}
    </div>
  );
}

export default App;
