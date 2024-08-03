import React from "react";
import { motion } from "framer-motion";

const ContactDetails = () => {
  return (
    <div className="bg-stone-950 text-white text-sm md:text-2xl font-light text-center py-20 w-full px-6 md:px-20">
      <div className="w-[70%] mx-auto md:w-full flex flex-col md:flex-row justify-start gap-y-3 md:gap-x-8">
        <motion.div
          initial="initial"
          whileHover="hovered"
          transition={{ duration: 2 }}
          className="relative flex flex-col whitespace-nowrap rounded-full p-0 text-center border border-stone-200 overflow-hidden hover:cursor-pointer"
        >
          <motion.div
            variants={{
              initial: { y: 0 },
              hovered: { y: "-100%", opacity: 0 },
            }}
            transition={{ duration: 0.1 }}
            className="absolute inset-0 py-1 md:py-2 text-white bg-stone-950 border-none rounded-full"
          >
            vikasipar4@gmail.com
          </motion.div>
          <motion.div
            variants={{
              initial: { y: "100%" },
              hovered: { y: 0 },
            }}
            transition={{ duration: 0.1, type: "tween", ease: "easeIn" }}
            className="relative rounded-full py-1 md:py-2 px-6 text-stone-950 bg-stone-200 border-none"
          >
            vikasipar4@gmail.com
          </motion.div>
        </motion.div>

        <motion.div
          initial="initial"
          whileHover="hovered"
          transition={{ duration: 2 }}
          className="relative flex flex-col whitespace-nowrap rounded-full p-0 text-center border border-stone-200 overflow-hidden hover:cursor-pointer"
        >
          <motion.div
            variants={{
              initial: { y: 0 },
              hovered: { y: "-100%", opacity: 0 },
            }}
            transition={{ duration: 0.1 }}
            className="absolute inset-0 py-1 md:py-2 text-white bg-stone-950 border-none rounded-full"
          >
            +91 8329909096
          </motion.div>
          <motion.div
            variants={{
              initial: { y: "100%" },
              hovered: { y: 0 },
            }}
            transition={{ duration: 0.1, type: "tween", ease: "easeIn" }}
            className="relative rounded-full py-1 md:py-2 px-6 text-stone-950 bg-stone-200 border-none"
          >
            +91 8329909096
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default ContactDetails;
