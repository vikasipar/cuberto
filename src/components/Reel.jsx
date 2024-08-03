import React from "react";

const Reel = () => {
  return (
    <div className="w-full h-fit md:h-screen">
      <video
        src="https://cdn.cuberto.com/cb/showreel/2.mp4"
        loop
        autoPlay
        muted
      ></video>
    </div>
  );
};

export default Reel;
