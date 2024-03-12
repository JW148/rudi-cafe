import React from "react";
import { Card, CardBody} from "@nextui-org/react";

export default function SandwichCard() {
  return (
    <section className="px-4">

      <Card
        isBlurred
        className="cardBg cardRadius max-w-[710px]"
        shadow="sm"
      >
        <CardBody>
          <div className="grid grid-cols-3 md:grid-cols-1 gap-2">
            <div className="col-span-1 flex flex-col my-4 ml-4">
              <div className="mb-4 flex text-white justify-center items-center">
                Sandwich Image
              </div>
              <div className="flex justify-center items-center p-4">
                <h1 className="sandwichHeader">
                  Sandwich Name
                </h1>
              </div>
            </div>
            <div className="col-span-2 flex justify-center items-center py-2 pr-2">
              <p className="cardTxt">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
          </div>
        </CardBody>
      </Card>

    </section>
  );
}


