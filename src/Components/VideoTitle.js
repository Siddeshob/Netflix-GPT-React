import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className=" w-screen aspect-video pt-[10%] px-24 absolute text-gray-200 bg-gradient-to-r from-black">
      <h1 className="text-5xl font-bold w-1/3 ">{title}</h1>
      <p className="py-6 text-lg w-1/3">{overview}</p>
      <div className="">
        <button className=" bg-white text-black p-4 px-12 text-xl  rounded-sm hover:bg-opacity-80">
        <span className="h-36" >▶</span>Play
        </button>
        <button className="mx-2 bg-white text-black p-4 px-7 text-xl rounded-sm hover:bg-opacity-80">
          ℹ️More info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
