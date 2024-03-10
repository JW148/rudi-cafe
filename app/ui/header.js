"use client";

import { useState } from "react";
import Image from "next/image";

export default function Header() {
  return (
    <div className="grid grid-cols-6 gap-4 backdrop-blur-md p-4">
      <div className="">Menu</div>
      <div className=" flex col-start-2 col-span-4 justify-center items-center ">
        <Image
          src={"/rudi_logo.png"}
          alt="Background image of the cafe"
          width={230}
          height={150}
        />
      </div>
    </div>
  );
}
