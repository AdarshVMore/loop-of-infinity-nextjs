import React from "react";

function Hero() {
  return (
    <div className="relative w-screen h-screen overflow-hidden">
      <video
        autoPlay
        muted
        loop
        className="absolute inset-0 w-full h-full object-cover -z-10"
      >
        <source src="/video.mp4" type="video/mp4" />
      </video>
      <div className="relative flex justify-end flex-col h-full pb-32 pl-16 ">
        <p className="text-white font-normal text-3xl mb-3">
          Web3 Gaming Metaverse
        </p>
        <div className="flex flex-row gap-2 mb-8 text-xs">
          <p className="border-[0.5px] border-gray-400 rounded-md text-gray-400 py-1 px-4">
            AI
          </p>
          <p className="border-[0.5px] border-gray-400 rounded-md text-gray-400 py-1 px-4">
            Play-To-Earn
          </p>
          <p className="border-[0.5px] border-gray-400 rounded-md text-gray-400 py-1 px-4">
            Free-To-Play
          </p>
          <p className="border-[0.5px] border-gray-400 rounded-md text-gray-400 py-1 px-4">
            Ecosystem
          </p>
        </div>
        <h1 className="text-white font-Days_One font-extrabold text-5xl md:text-6xl lg:text-7xl">
          LOOP OF INFINITY
        </h1>
      </div>
    </div>
  );
}

export default Hero;
