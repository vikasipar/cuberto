import React from "react";

const Services = () => {
  return (
    <div className="w-full h-[70vh] md:h-[120vh] flex items-center justify-center gap-x-9">
      <video
        src="https://cdn.cuberto.com/cb/home/summary/1.mp4?3"
        className="hidden lg:block w-1/3"
      ></video>
      <div className="space-y-9 text-xl md:text-2xl px-6 md:px-0 font-normal">
        <p>
          Cuberto is a leading digital product <br className="hidden md:block" />
          agency focused on branding, UI/UX <br className="hidden md:block" />
          design, mobile, and web <br className="hidden md:block" />
          development.
        </p>
        <div className="w-fit px-24 md:px-28 py-14 md:py-16 flex justify-center border border-black rounded-full">
          How we work
        </div>
      </div>
    </div>
  );
};

export default Services;
