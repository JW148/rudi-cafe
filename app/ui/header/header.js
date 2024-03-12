"use client";

import { RxHamburgerMenu } from "react-icons/rx";
import { IoIosClose } from "react-icons/io";
import SideNav from "./sidenav";
import Image from "next/image";

export default function Header() {
  return (
    <div className="fixed w-screen top-0 z-10 grid grid-cols-6 gap-4 backdrop-blur-md py-4 items-center shadow-xl">
      {/* <div className="">
        <SideNav />
       <RxHamburgerMenu size="2em" color="yellow" /> 
      </div> */}
      <SideNav />
      <div className=" flex col-start-2 col-span-4 justify-center items-center ">
        <Image
          src={"/rudi_logo.png"}
          alt="Background image of the cafe"
          width={180}
          height={120}
        />
      </div>
    </div>
  );
}
