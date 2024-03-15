"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import * as d3 from "d3";
import { AnimatePresence, motion, useCycle } from "framer-motion";

export default function BackgroundReveal() {
  //the height of sections 1 and 3 are euqal to the height of the viewport
  //section 2 is equivalent to 1.5 the height of the viewport
  const sectionHeight = window.innerHeight;

  const backgroundScale = d3
    .scaleLinear()
    .domain([sectionHeight, sectionHeight * 2.5])
    .range([0, 1]);

  const yearScale = d3
    .scaleLinear()
    .domain([sectionHeight - 500, sectionHeight * 1.5 + 370])
    .range([2024, 1992]);

  //setup an event listener for scroll pos as soon as background component loaded
  const handleScroll = () => {
    const position = window.scrollY;
    setScrollPos(position);
  };

  const [scrollPos, setScrollPos] = useState(0);
  //passive:true to ensure the event listener doesn't interfere with the scroll behaviour
  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  //used to fade the year countdown clock in and out
  const [open, setOpen] = useState(false);

  //check the current scroll position to show and hide the year countdown when appropriate
  useEffect(() => {
    let height1 = document.getElementById("section1").offsetHeight;
    let height2 = document.getElementById("section2").offsetHeight;
    if (scrollPos + 500 > height1 && scrollPos < height2 + 200) {
      setOpen(true);
    } else {
      setOpen(false);
    }
  }, [scrollPos]);

  return (
    <div className="fixed h-screen w-screen overflow-hidden -z-10">
      <Image
        src={"/rudi_background_edited.jpg"}
        alt="Background image of the cafe"
        fill={true}
        objectFit="cover"
      />
      <Image
        style={{
          opacity: backgroundScale(scrollPos + 500),
        }}
        src={"/rudi_background_old_edited.jpg"}
        alt="Background image of the cafe"
        fill={true}
        objectFit="cover"
      />
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, y: [200, 0], transition: { duration: 0.3 } }}
            exit={{
              opacity: 0,
              y: [0, -200],
              transition: { duration: 0.3 },
            }}
            className="absolute top-[50%]  w-screen text-center text-5xl font-extrabold "
          >
            <motion.span class="bg-clip-text text-transparent bg-gradient-to-r from-rudi-yellow to-orange-100">
              {Math.round(yearScale(scrollPos))}
            </motion.span>
            {/* <motion.p className="text-center font-semibold text-transparent text-5xl ">
              {Math.round(yearScale(scrollPos))}
            </motion.p> */}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
