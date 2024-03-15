import React from "react";
import { Card, CardHeader, CardBody } from "@nextui-org/react";

export default function AboutCard() {
  return (
    <Card
      shadow="lg"
      className="max-w-[700px] mx-10 backdrop-blur-md bg-black/25 rounded-3xl"
    >
      <CardHeader className="justify-center text-rudi-yellow font-light text-3xl md:text-5xl">
        About
      </CardHeader>
      <CardBody>
        <p className="text-rudi-yellow md:text-lg lg:text-xl xl:text-2xl p-2 sm:p-4 md:p-6 lg:p-8 xl:p-12">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
        </p>
      </CardBody>
    </Card>
  );
}
