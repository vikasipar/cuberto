import React from "react";

const Philosophy = () => {
  return (
    <div className="text-stone-950 font-normal h-fit pb-36 rounded-t-[4rem] -mt-[4rem] bg-white">
      <div className="text-[8rem] py-36 px-32">
        <h1 className="leading-none">Our</h1>
        <h1 id="design" className="text-[8.5rem] leading-none tracking-wide">
          philosophy
        </h1>
      </div>
      <div className="flex items-center justify-center gap-x-14">
        <video
          src="https://cdn.cuberto.com/cb/home/summary/2.mp4?3"
        //   autoPlay
        //   muted
        //   loop
          className="w-1/3"
        ></video>
        <div className="space-y-3 text-xl font-medium">
          <p>
            In our team, developers work alongside
            <br />
            designers, strategists and analysts. <br />
            Cuberto doesn't do cookie-cutter <br />
            solutions and we build products exactly <br />
            as they were during the design phase, no
            <br />
            short cuts or simplifications.
          </p>
          <p>
            We're driven by user-centered design <br />
            that drives productivity and increases <br />
            revenue. Our expertise and ingenuity are <br />
            remarkable, yet we always strive to outdo <br />
            and outperform our previous <br />
            achievements.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Philosophy;
