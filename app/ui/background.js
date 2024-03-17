"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import * as d3 from "d3";
import { AnimatePresence, motion } from "framer-motion";
import useDeviceSize from "../lib/deviceSize";

export default function BackgroundReveal() {
  //uses custom hook to get the height of the device
  //the height of sections 1 and 3 are euqal to the height of the viewport
  //section 2 is equivalent to 1.5 the height of the viewport
  const [width, height] = useDeviceSize();

  const backgroundScale = d3
    .scaleLinear()
    .domain([height, height * 2.5])
    .range([0, 1]);

  const yearScale = d3
    .scaleLinear()
    .domain([height - 500, height * 1.5 + 370])
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
        style={{
          objectFit: "cover",
        }}
        src={"/rudi_background_edited.jpg"}
        alt="Background image of the cafe"
        fill={true}
      />
      <Image
        style={{
          opacity: backgroundScale(scrollPos + 500),
          objectFit: "cover",
        }}
        src={"/rudi_background_old_edited.jpg"}
        alt="Background image of the cafe"
        fill={true}
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
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
