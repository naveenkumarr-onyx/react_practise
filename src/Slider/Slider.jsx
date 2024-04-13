import React, { useEffect, useState } from "react";
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";

const Slider = () => {
  const [slideChange, setSlideChange] = useState(0);
  const sliderList = [
    {
      src: "https://images.alphacoders.com/926/thumbbig-926584.webp",
    },
    {
      src: "https://images8.alphacoders.com/130/thumbbig-1304042.webp",
    },
    {
      src: "https://images7.alphacoders.com/130/thumbbig-1304043.webp",
    },
  ];
  const nextSlide = () => {
    setSlideChange(slideChange === sliderList.length - 1 ? 0 : slideChange + 1);
  };
  const prevSlide = () => {
    setSlideChange(slideChange === sliderList.length - 1 ? slideChange - 1 : 0);
  };

  useEffect(() => {
    const time = setTimeout(() => {
      nextSlide();
    }, 5000);
    return () => {
      clearTimeout(time);
    };
  });

  return (
    <div className=" relative !scroll-smooth">
      <FaArrowAltCircleLeft
        className="absolute top-[7.5rem]"
        onClick={prevSlide}
      />
      <div className="flex">
        {sliderList.map((value, index) => {
          return (
            <div key={index}>
              <img
                src={value.src}
                alt="slide"
                className={`${slideChange === index ? "block" : "hidden"} `}
              />
            </div>
          );
        })}
      </div>
      <FaArrowAltCircleRight
        className="absolute bottom-[14.5rem] right-[-0.5rem]"
        onClick={nextSlide}
      />
      <span className="absolute flex bottom-[20px] left-[17rem] gap-[10px]">
        {sliderList.map((_, index) => {
          return (
            <button
              key={index}
              onClick={() => setSlideChange(index)}
              className={`w-[7px] h-[6px] rounded-full ${
                slideChange === index
                  ? "bg-white opacity-100"
                  : "bg-white opacity-20"
              }`}
            ></button>
          );
        })}
      </span>
    </div>
  );
};

export default Slider;
