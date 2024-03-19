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
        <p className="text-rudi-yellow text-base text-center md:text-lg lg:text-xl xl:text-2xl p-2 sm:p-4 md:p-6 lg:p-8 xl:p-12">
          Rudi's! Your neighbourhood's family-run business, stationed in the
          heart of Edinburgh. We've been serving the bustling local community
          and curious passers-by since 1993 with a selection of homemade deli
          sandwiches, toasties, soup, treats and Italian coffee to go. Come in
          and say hello or discover more below!
        </p>
      </CardBody>
    </Card>
  );
}
