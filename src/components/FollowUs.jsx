import React from "react";
import { AiFillTwitterCircle } from "react-icons/ai";
import { LiaGithub } from "react-icons/lia";
import { ImLinkedin } from "react-icons/im";

const FollowUs = () => {
  return (
    <div className="flex justify-around items-center text-[4rem] md:text-[8rem] bg-stone-950 text-white overflow-hidden py-9 font-light">
      <span className="flex shrink-0 space-x-1 items-center">
        Follow Us{" "}
        <AiFillTwitterCircle className="text-6xl md:text-8xl text-stone-300 mx-9" />
      </span>
      <span className="flex shrink-0 space-x-1 items-center">
        Follow Us{" "}
        <ImLinkedin className="text-[5rem] text-stone-300 mx-9 rounded-full" />
      </span>
      <span className="flex shrink-0 space-x-1 items-center">
        Follow Us <LiaGithub className="text-8xl text-stone-300 mx-9" />
      </span>
    </div>
  );
};

export default FollowUs;
