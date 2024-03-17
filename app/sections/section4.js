import { Image, Divider } from "@nextui-org/react";

export default function Section4() {
  return (
    <section className="flex flex-col justify-center mt-14 mx-4 md:20">
      <div className="flex flex-row text-center justify-center">
        <Divider className="align-middle self-center mx-auto w-[38%] h-[2px] bg-rudi-yellow hidden md:block" />
        <p className="font-semibold text-rudi-yellow text-4xl text-center m-8">
          MENU
        </p>
        <Divider className="align-middle self-center mx-auto w-[38%] h-[2px] bg-rudi-yellow hidden md:block" />
      </div>
      <div className="flex justify-center">
        <Image
          src={"/menu.png"}
          alt="Food & Drink Menu"
          objectFit="cover"
          className="relative z-0 self-center justify-self-center shadow-2xl"
        />
      </div>
    </section>
  );
}
