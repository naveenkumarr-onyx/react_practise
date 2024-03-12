import React, { useState } from "react";
import { FaPlay } from "react-icons/fa";
import { IoIosPause } from "react-icons/io";
import { useRef } from "react";

const VideoPlayer = () => {
  const [playing, setIsPlaying] = useState(false);
  const initialRef = useRef(null);

  function handlePlay() {
    const nextPlaying = !playing;
    setIsPlaying(nextPlaying);
    if (nextPlaying) {
      initialRef.current.play();
    } else {
      initialRef.current.pause();
    }
  }
  return (
    <div className=" grid gap-[10px]">
      <button
        type="button"
        className=" bg-purple-600 mt-[30px] w-[80px] flex justify-center items-center gap-[5px]"
        onClick={handlePlay}
      >
        {playing ? "Pause" : "Play"}
        {playing ? (
          <>
            <IoIosPause />
          </>
        ) : (
          <>
            <FaPlay />
          </>
        )}
      </button>
      <video
        className=" rounded-md"
        width="250"
        ref={initialRef}
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
      >
        <source
          src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"
          type="video/mp4"
        />
      </video>
    </div>
  );
};

export default VideoPlayer;
