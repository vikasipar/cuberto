import React from "react";

const Philosophy = () => {
  return (
    <div className="text-stone-950 font-normal h-fit pb-16 md:pb-36 md:rounded-t-[4rem] md:-mt-[4rem] bg-white">
      <div className="text-[4rem] md:text-[8rem] py-9 md:py-36 px-6 md:px-32">
        <h1 className="leading-none">Our</h1>
        <h1
          id="design"
          className="text-[4.3rem] md:text-[8.5rem] leading-none tracking-wide"
        >
          philosophy
        </h1>
      </div>
      <div className="flex flex-col md:flex-row items-center justify-center md:gap-x-14">
        <video
          src="https://cdn.cuberto.com/cb/home/summary/2.mp4?3"
          autoPlay
          muted
          loop
          className="w-[90%] mx-auto md:mx-0 md:w-1/3"
        ></video>
        <div className="space-y-3 text-xl font-medium px-6">
          <p>
            In our team, developers work alongside &nbsp;
            <br className="hidden md:block" />
            designers, strategists and analysts.{" "}
            <br className="hidden md:block" />
            Cuberto doesn't do cookie-cutter <br className="hidden md:block" />
            solutions and we build products exactly{" "}
            <br className="hidden md:block" />
            as they were during the design phase, No &nbsp;
            <br className="hidden md:block" />
            short cuts or simplifications.
          </p>
          <p>
            We're driven by user-centered design{" "}
            <br className="hidden md:block" />
            that drives productivity and increases{" "}
            <br className="hidden md:block" />
            revenue. Our expertise and ingenuity are{" "}
            <br className="hidden md:block" />
            remarkable, yet we always strive to outdo{" "}
            <br className="hidden md:block" />
            and outperform our previous <br className="hidden md:block" />
            achievements.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Philosophy;
