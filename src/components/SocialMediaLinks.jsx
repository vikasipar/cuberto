import React, { useEffect, useRef, useState } from "react";
import { MdOutlineArrowOutward } from "react-icons/md";
import gsap from "gsap";
import { motion, AnimatePresence } from "framer-motion";

const SocialMediaLinks = () => {
  const [hoveredLink, setHoveredLink] = useState(null);

  const textRefs = useRef([]);
  textRefs.current = [];

  let xPercent = 0;
  let direction = -1;

  const addToRefs = (el) => {
    if (el && !textRefs.current.includes(el)) {
      textRefs.current.push(el);
    }
  };

  useEffect(() => {
    const animation = () => {
      if (xPercent <= -100) {
        xPercent = 0;
      }
      gsap.set(textRefs.current, { xPercent });
      xPercent += 0.6 * direction;
      requestAnimationFrame(animation);
    };

    requestAnimationFrame(animation);
  }, []);

  const socialLinks = [
    {
      name: "Twitter",
      url: "https://x.com/vikas_ipar?t=xdfw_bSJLdFN8dykcCSWZw&s=08",
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/vikas-ipar/",
    },
    {
      name: "GitHub",
      url: "https://github.com/vikasipar",
    },
    {
      name: "Portfolio",
      url: "https://vikasipar.me",
    },
  ];

  return (
    <div className="bg-stone-950 text-white text-xl md:text-2xl">
      <p className="border-b-[1px] border-stone-500 text-sm md:text-base py-9 px-6 md:px-20">
        SOCIAL MEDIA AND CONTACTS
      </p>
      {socialLinks.map((link, index) => (
        <a href={link.url} target="_blank">
          <div
            key={link.name}
            className={`${
              hoveredLink === index
                ? "text-stone-950 bg-white"
                : "bg-stone-950 text-white"
            } border-b-[1px] border-stone-500 py-7 px-0 mx-0 overflow-x-hidden`}
            onMouseEnter={() => setHoveredLink(index)}
            onMouseLeave={() => setHoveredLink(null)}
          >
            {hoveredLink !== index ? (
              <motion.div
                exit={{ opacity: 0 }}
                transition={{ duration: 0.9 }}
                className="flex items-center justify-between px-6 md:px-20"
              >
                <span>{link.name}</span>
                <MdOutlineArrowOutward className="text-4xl" />
              </motion.div>
            ) : (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 3, type: "spring" }}
                className="flex"
              >
                {[...Array(8)].map((_, i) => (
                  <div
                    key={i}
                    className="flex items-center mx-0 justify-between"
                    ref={addToRefs}
                  >
                    <span className="px-1 md:px-10">{link.name}</span>
                    <MdOutlineArrowOutward className="text-4xl" />
                  </div>
                ))}
              </motion.div>
            )}
          </div>
        </a>
      ))}
    </div>
  );
};

export default SocialMediaLinks;
