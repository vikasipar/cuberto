import React from "react";

const ContactDetails = () => {
  return (
    <div className="bg-stone-950 text-white text-sm md:text-2xl font-light text-center py-20 w-full px-6 md:px-20">
      <div className="w-[70%] mx-auto md:w-full flex flex-col md:flex-row justify-start gap-y-3 md:gap-x-8">
        <span className="px-6 py-2 border border-stone-500 rounded-full">
          vikasipar4@gmail.com
        </span>
        <span className="px-6 py-2 border border-stone-500 rounded-full">
          +91 8329909096
        </span>
      </div>
    </div>
  );
};

export default ContactDetails;
