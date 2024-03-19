"use client";

import React, { useEffect, useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import { AnimatePresence, motion, useCycle } from "framer-motion";
import useDeviceSize from "@/app/lib/deviceSize";

// Dynamic import fr hydation for React Scroll
import dynamic from "next/dynamic";

const ScrollLink = dynamic(
  () => import("react-scroll").then((module) => module.Link),
  {
    ssr: false,
  }
);

export default function ExploreButton() {
  const [width, height] = useDeviceSize();

  return (
    <motion.div
      className="absolute bottom-[5%] items-center justify-items-center justify-center cursor-pointer"
      animate={{ y: [0, 30, 0] }}
      transition={{
        duration: 1,
        repeat: Infinity,
        ease: "easeInOut",
        repeatDelay: 0.3,
      }}
    >
      <ScrollLink
        to="section3"
        spy={true}
        smooth={true}
        offset={-height * 0.2}
        duration={2500}
      >
        <span className="exploreText">Explore</span>
        <FaChevronDown className="text-rudi-yellow mx-auto" />
      </ScrollLink>
    </motion.div>
  );
}
