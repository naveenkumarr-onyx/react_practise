import React, { useEffect, useState } from "react";

const Custom = () => {
  function useWindowWidth() {
    const [width, setWidth] = useState(window.innerHeight);
    function handleResize() {
      setWidth(window.innerWidth);
    }

    useEffect(() => {
      window.addEventListener("resize", handleResize);
      // console.log("calling resize event");
      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }, []);
    return width;
  }

  // callback
  function calling(callback) {
    console.log("calling callback");
    callback();
  }
  function hello() {
    console.log("hello");
  }
  calling(hello);
  const width = useWindowWidth();
  return (
    <div>
      <h1>{`The window width is : ${width}`}</h1>
    </div>
  );
};

export default Custom;
