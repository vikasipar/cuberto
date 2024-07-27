import React from "react";
import { MdOutlineArrowOutward } from "react-icons/md";

const SocialMediaLinks = () => {
  return (
    <div className="bg-stone-950 text-white text-xl md:text-2xl">
      <p className="border-b-[1px] border-stone-500 text-sm md:text-base py-9 px-6 md:px-20">
        SOCIAL MEDIA AND CONTACTS
      </p>
      <div className="border-b-[1px] border-stone-500 py-9 flex items-center justify-between">
        <span className="px-6 md:px-20">Twitter</span>
        <MdOutlineArrowOutward className="text-4xl mr-3 md:mr-20"/>
      </div>
      <div className="border-b-[1px] border-stone-500 py-9 flex items-center justify-between">
        <span className="px-6 md:px-20">LinkedIn</span>
        <MdOutlineArrowOutward className="text-4xl mr-3 md:mr-20"/>
      </div>
      <div className="border-b-[1px] border-stone-500 py-9 flex items-center justify-between">
        <span className="px-6 md:px-20">GitHub</span>
        <MdOutlineArrowOutward className="text-4xl mr-3 md:mr-20"/>
      </div>
      <div className="border-b-[1px] border-stone-500 py-9 flex items-center justify-between">
        <span className="px-6 md:px-20">Portfolio</span>
        <MdOutlineArrowOutward className="text-4xl mr-3 md:mr-20"/>
      </div>
    </div>
  );
};

export default SocialMediaLinks;
