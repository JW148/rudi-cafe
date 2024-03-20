import React from "react";
import Image from "next/image";
import ContactForm from "./contact-form";
import { Divider } from "@nextui-org/react";

export default function Footer() {
  return (
    <div className="flex flex-col mt-20 backdrop-blur-sm pt-4">
      <div className="flex flex-row justify-center mb-10 overflow-hidden">
        <Divider className="align-middle self-center mx-auto w-[40%] h-[2px] bg-rudi-yellow hidden md:block " />
        <Image
          src={"/rudi_logo.png"}
          alt="Rudi logo"
          width={120}
          height={100}
        />
        <Divider className="align-middle self-center mx-auto w-[40%] h-[2px] bg-rudi-yellow hidden md:block " />
      </div>
      <div className="flex flex-col md:flex-row text-center my-4">
        <div className="flex flex-col basis-1/3 justify-center mb-10">
          <p className="font-bold text-rudi-yellow text-xl mb-4">
            OPENING TIMES
          </p>
          <p className="text-rudi-yellow font-bold xl:text-base lg:text-lg md:text-xl sm:text-2xl">
            Monday - Friday, 9:00&nbsp;am – 2&nbsp;pm
          </p>
          <p className="text-rudi-yellow font-bold xl:text-base lg:text-lg md:text-xl sm:text-2xl">
            Saturday&nbsp;-&nbsp;Sunday&nbsp;,&nbsp;Closed
          </p>
        </div>
        <div className="flex flex-col basis-1/3  items-center justify-center mb-10">
          <p className="text-rudi-yellow mb-4 font-bold xl:text-base lg:text-lg md:text-xl sm:text-2xl">
            <a href="https://maps.app.goo.gl/chSbtK8Q6XZTug6w5" target="_blank">
              30 Forrest Rd, Edinburgh EH1 2QN
            </a>
          </p>
          <a
            aria-label="Open a new Google maps tab with the cafe's location"
            href="https://maps.app.goo.gl/chSbtK8Q6XZTug6w5"
            target="_blank"
            className="shadow-xl rounded-md"
          >
            <iframe
              title="map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2234.2185268429166!2d-3.193568423106257!3d55.94558427315618!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4887c784b14e4cfd%3A0xb951643a5bc547af!2s30%20Forrest%20Rd%2C%20Edinburgh%20EH1%202QN!5e0!3m2!1sen!2suk!4v1710509496469!5m2!1sen!2suk"
              width="100%"
              height="283"
              className="rounded-xl"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </a>
        </div>
        <div className="flex flex-col basis-1/3 my-4">
          <p className="font-bold text-rudi-yellow text-xl mb-2">CONTACT US</p>
          <p className="text-rudi-yellow font-bold xl:text-base lg:text-lg md:text-xl sm:text-2xl mb-4">
            <a href="tel:01312266434">Tel: 01312266434</a>
          </p>
          <div className="px-14">
            <ContactForm />
          </div>
        </div>
      </div>
      <p className="text-center text-rudi-yellow">&copy;GANARIN LTD 2024</p>
    </div>
  );
}
