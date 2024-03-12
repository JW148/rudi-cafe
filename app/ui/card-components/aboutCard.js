import React from "react";
import { Card, CardHeader, CardBody } from "@nextui-org/react";

export default function AboutCard() {
  return (
    <section className="h-[85vh] flex items-center justify-center">
      <Card
        shadow="lg"
        className="max-w-[700px] mx-10 -mt-40 backdrop-blur-md bg-white/5"
      >
        <CardHeader className="justify-center font-light mix-blend-multiply text-3xl ">
          About
        </CardHeader>
        <CardBody>
          <p className="text-black px-2 pb-5 md:px-10,pb-10">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
          </p>
        </CardBody>
      </Card>
      {/* <div className="flex flex-col backdrop-blur-md bg-black/60">
        <h1>About</h1>
        <p className="cardTxt">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div> */}
    </section>
  );
}
