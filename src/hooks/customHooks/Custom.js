import React, { useEffect, useState } from "react";

export const Custom = () => {
  function useWindowWidth() {
    const [width, setWidth] = useState(window.innerHeight);
    function handleResize() {
      setWidth(window.innerWidth);
    }
    // if (window.innerWidth <= 700) {
    //   handleResize();
    // } else {
    //   return;
    // }

    useEffect(() => {
      window.addEventListener("resize", handleResize);
      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }, []);
    return width;
  }
  const width = useWindowWidth();
  // let arr = [];
  // arr.push(width);
  // console.log(arr.length - 1);
  // callback
  // function calling(callback) {
  //   console.log("calling callback");
  //   callback();
  // }
  // function hello() {
  //   console.log("hello");
  // }
  // calling(hello);

  return (
    <div>
      <h1>{`The window width is : ${width}`}</h1>
    </div>
  );
};

export const useToggle = () => {
  // const []
  return;
};
