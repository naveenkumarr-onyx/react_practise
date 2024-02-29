import React, { useState } from "react";
import { AiFillApple, AiFillAmazonCircle } from "react-icons/ai";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaArrowRight } from "react-icons/fa";

const State = () => {
  // using null and not null
  const [changing, isChanging] = useState(false);
  const [count, setCount] = useState(0);
  function handleChange() {
    setCount((prevState) => prevState + 1);
    // console.log()
  }
  console.log(count);
  function changingState() {
    isChanging(!changing);
  }
  // Input
  const [changingInput, isChangingInput] = useState("");
  function eventChanging(e) {
    isChangingInput(e.target.value);
  }

  //  Toogle
  const [toogle, setToogle] = useState(false);
  function changingToogle() {
    setToogle(!toogle);
    console.log(toogle);
  }
  return (
    <div className="flex justify-center gap-[10px] items-center flex-col">
      {toogle ? (
        <div>
          <div onClick={changingToogle}>
            <FaArrowRight />
          </div>
          <div>
            <h1>Count:{count}</h1>
            <button
              onClick={handleChange}
              className="font-bold border-[2px] border-red-600 p-[10px]"
            >
              increase Count
            </button>
            <button
              onClick={changingState}
              className="font-bold border-[2px] border-red-600 p-[10px]"
            >
              click me!
            </button>
            {/* {changing ? <AiFillApple /> : <AiFillAmazonCircle />} */}
            <h1>{changingInput}</h1>
            <input
              type="text"
              onChange={(e) => eventChanging(e)}
              className=" border-[2px] border-red-600 p-[10px]"
            />
          </div>
        </div>
      ) : (
        <>
          <div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Amet
              nulla facilisi morbi tempus iaculis urna id volutpat lacus. Justo
              laoreet sit amet cursus sit. Ullamcorper velit sed ullamcorper
              morbi tincidunt ornare massa eget egestas. Elementum facilisis leo
              vel fringilla est ullamcorper eget. Cursus euismod quis viverra
              nibh cras. Facilisis gravida neque convallis a cras. Risus feugiat
              in ante metus dictum at tempor commodo ullamcorper. Eget egestas
              <br /> purus viverra accumsan in. Eget nullam non nisi est sit
              amet. Ultricies integer quis auctor elit sed vulputate mi sit.
              Odio tempor orci dapibus ultrices in iaculis nunc sed. Facilisi
              nullam vehicula ipsum a. Elementum sagittis vitae et leo duis ut
              diam quam. Netus et malesuada fames ac. Semper eget duis at tellus
              at. Velit scelerisque in dictum non consectetur a erat nam.
              Aliquam ut porttitor leo a diam. Mauris sit amet massa vitae
              tortor condimentum lacinia quis vel. Suspendisse interdum
              consectetur libero id faucibus. Amet nulla facilisi morbi tempus.
              Scelerisque fermentum dui faucibus in. Suscipit adipiscing
              bibendum est ultricies integer quis auctor elit sed. Tortor
              dignissim convallis aenean et tortor at. Odio eu feugiat pretium
              nibh ipsum consequat nisl vel pretium. Molestie at elementum eu
              facilisis sed odio. Euismod lacinia at quis risus sed vulputate.
              In massa tempor nec feugiat nisl pretium fusce. Quam elementum
              pulvinar etiam non quam lacus suspendisse faucibus interdum.
              Tincidunt augue interdum velit euismod in pellentesque massa
              placerat. Scelerisque eleifend donec pretium vulputate. Sagittis
              purus sit amet volutpat consequat mauris.
            </p>
          </div>
          <div onClick={changingToogle}>
            <GiHamburgerMenu />
          </div>
        </>
      )}
    </div>
  );
};

export default State;
