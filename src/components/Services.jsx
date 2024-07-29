import React from "react";
import { motion } from "framer-motion";

const Services = () => {
  return (
    <div className="w-full h-[70vh] md:h-[120vh] flex items-center justify-center gap-x-9">
      <video
        src="https://cdn.cuberto.com/cb/home/summary/1.mp4?3"
        className="hidden lg:block w-1/3"
      ></video>
      <div className="space-y-9 text-xl md:text-2xl px-6 md:px-0 font-normal">
        <p>
          Cuberto is a leading digital product{" "}
          <br className="hidden md:block" />
          agency focused on branding, UI/UX <br className="hidden md:block" />
          design, mobile, and web <br className="hidden md:block" />
          development.
        </p>
        <motion.div
          initial="initial"
          whileHover="hovered"
          transition={{ duration: 3 }}
          className="relative flex flex-col whitespace-nowrap rounded-full p-0 text-center border border-black overflow-hidden hover:cursor-pointer"
        >
          <motion.div
            variants={{
              initial: { y: 0 },
              hovered: { y: "-10%", opacity: 0 },
            }}
            transition={{ duration: 0.2 }}
            className="relative rounded-full py-9 md:py-16 text-stone-900/90 border-2 bg-white border-none"
          >
            How we work
          </motion.div>
          <motion.div
            variants={{
              initial: { y: "100%" },
              hovered: { y: 0 },
            }}
            transition={{ duration: 0.2, type: "tween", ease: "easeIn" }}
            className="absolute inset-0 rounded-xl py-9 md:py-16 text-white border-2 bg-stone-950 border-none"
          >
            How we work
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Services;
