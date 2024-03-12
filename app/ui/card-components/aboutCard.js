import React from "react";
import {Card, CardHeader, CardBody} from "@nextui-org/react";

export default function AboutCard() {
  return (
    <section className="aboutSection" id="aboutCard">
        <Card className="cardBg cardRadius">
            <CardHeader className="flex justify-center gap-3 aboutHeader">
                About
            </CardHeader>
            <CardBody>
                <p className="cardTxt">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
            </CardBody>
        </Card>
    </section>
  );
}
