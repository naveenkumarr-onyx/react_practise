import React, { useEffect, useState } from "react";

const Custom = () => {
  function useWindowWidth() {
    const [width, setWidth] = useState(window.innerHeight);
    function handleResize() {
      setWidth(window.innerWidth);
    }
    useEffect(() => {
      window.addEventListener("resize", handleResize);
      console.log("calling resize event");
      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }, []);
    return width;
  }
  const width = useWindowWidth();
  return <div>{`The window width is : ${width}`}</div>;
};

export default Custom;
