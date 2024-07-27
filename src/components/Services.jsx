import React from "react";

const Services = () => {
  return (
    <div className="w-full h-[120vh] flex items-center justify-center gap-x-9">
      <video
        src="https://cdn.cuberto.com/cb/home/summary/1.mp4?3"
        className="w-1/3"
      ></video>
      <div className="space-y-9 text-2xl font-normal">
        <p>
          Cuberto is a leading digital product <br />
          agency focused on branding, UI/UX <br />
          design, mobile, and web <br />
          development.
        </p>
        <div className="w-fit px-28 py-16 flex justify-center border border-black rounded-full">
          How we work
        </div>
      </div>
    </div>
  );
};

export default Services;
