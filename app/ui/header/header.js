"use client";

import SideNav from "./sidenav";
import Image from "next/image";

export default function Header() {
  return (
    <div className="fixed w-screen top-0 z-10 grid grid-cols-6 gap-4 backdrop-blur-md py-4 items-center shadow-xl">
      <SideNav />
      <div className=" flex col-start-2 col-span-4 justify-center items-center ">
        <Image
          src={"/rudi_logo.webp"}
          alt="Background image of the cafe"
          width={180}
          height={120}
          priority={true}
        />
      </div>
    </div>
  );
}
