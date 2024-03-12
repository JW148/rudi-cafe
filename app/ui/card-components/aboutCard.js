import React from "react";
import { Card, CardHeader, CardBody } from "@nextui-org/react";

export default function AboutCard() {
  return (
    <section className="h-[85vh] flex items-center justify-center">
      <Card
        shadow="lg"
        className="max-w-[700px] mx-10 mt-20 backdrop-blur-md bg-black/25"
      >
        <CardHeader className="justify-center text-rudi-yellow font-light text-3xl ">
          About
        </CardHeader>
        <CardBody>
          <p className="text-rudi-yellow px-2 pb-5 md:px-10,pb-10">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
          </p>
        </CardBody>
      </Card>
    </section>
  );
}
