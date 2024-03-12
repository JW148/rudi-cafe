"use client";

import React, { useEffect, useState } from "react";
import { FaChevronDown } from "react-icons/fa";

// Dynamic import fr hydation for React Scroll
import dynamic from "next/dynamic";

const ScrollLink = dynamic(
  () => import("react-scroll").then((module) => module.Link),
  {
    ssr: false,
  }
);

export default function ExploreButton() {
  // get initial screen height of the respective window
  const [initialScreenHeight, setInitialScreenHeight] = useState(0);

  //states for clicking nav bar icons
  const [clicked, setClicked] = useState(false);

  //function for when nav bar icons are clicked
  const handleClick = () => {
    setClicked(!clicked);
  };

  useEffect(() => {
    // Function to handle window resize events
    const handleResize = () => {
      // Update the initial screen height state with the current inner height of the window
      setInitialScreenHeight(window.innerHeight);
    };

    // Add an event listener for the 'resize' event, calling handleResize function
    window.addEventListener("resize", handleResize);

    // Perform initial calculation of screen height on component mount
    handleResize();

    // Cleanup function to remove the event listener when the component unmounts or the dependency array changes
    return () => {
      window.removeEventListener("resize", handleResize);
    };

    // Empty dependency array ensures the effect runs only once, on component mount
  }, []);

  return (
    <ScrollLink
      to="meatSandwiches"
      spy={true}
      smooth={true}
      offset={-60}
      duration={500}
      onClick={handleClick}
    >
      <div
        className="exploreLink"
        style={{ marginTop: `${initialScreenHeight - 100} px` }}
      >
        <span className="exploreText">Explore</span>
        <FaChevronDown className="exploreIcon" />
      </div>
    </ScrollLink>
  );
}
