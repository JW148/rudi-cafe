"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import * as d3 from "d3";

export default function BackgroundReveal() {
  //define a linear scale to translate scroll position into a range between 0 and 1
  const scale = d3.scaleLinear().domain([0, window.innerHeight]).range([0, 1]);

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

  return (
    <div className="fixed h-screen w-screen overflow-hidden -z-10">
      <Image
        src={"/rudi_background_edited.jpg"}
        alt="Background image of the cafe"
        fill={true}
        objectFit="cover"
      />
      <Image
        style={{ opacity: scale(scrollPos).toFixed(2) }}
        src={"/rudi_background_old_edited.jpg"}
        alt="Background image of the cafe"
        fill={true}
        objectFit="cover"
      />
    </div>
  );
}
