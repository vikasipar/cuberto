import React from "react";

const Hero = () => {
  return (
    <div className="text-8xl tracking-tight leading-[7rem] w-full h-[70vh] flex flex-col items-start justify-center px-32 font-normal">
      <div>We are a digital</div>
      <div className="flex items-center">
        <div className="h-24 w-36 rounded-full overflow-hidden">
          <video
            src="https://cdn.cuberto.com/cb/home/hero/1.mp4"
            className=""
          ></video>
        </div>
        <div>
          <span id="design" className="font-normal tracking-wide text-[6.5rem]">&nbsp;design&nbsp;</span>and
        </div>
      </div>
      <div>motion agency</div>
    </div>
  );
};

export default Hero;
