import React from "react";
import { Card, CardBody, Divider, Image } from "@nextui-org/react";

export default function SandwichCard({ name, icon, desc, type }) {
  return (
    <>
      <Card
        isBlurred
        className="backdrop-blur-md bg-black/25 rounded-3xl min-h-28"
        shadow="lg"
      >
        <CardBody>
          <div className="flex flex-row md:flex-col">
            <div className="flex flex-col min-w-24 justify-center items-center mr-[5%] md:mr-0">
              <Image
                className="flex"
                layout="fill"
                src={icon}
                alt="Sandwich icon"
                width={80}
                height={80}
              />

              <p className="flex text-wrap text-center text-rudi-yellow text-xl font-light pt-2 md:text-3xl  ">
                {name}
              </p>
            </div>
            <Divider className="w-[85%] h-[2px] self-center mt-2 hidden md:block" />
            <Divider
              orientation="vertical"
              className="self-center h-[80%] mt-2 block md:hidden"
            />
            <div className="flex flex-col text-center justify-center align-middle items-center">
              <p className="flex text-wrap text-rudi-yellow font-light p-2 md:text-lg lg:text-xl xl:text-2xl">
                {desc}
              </p>
              <p className="flex text-rudi-yellow font-light">
                <em>{type}</em>
              </p>
            </div>
          </div>
        </CardBody>
      </Card>
    </>
  );
}
