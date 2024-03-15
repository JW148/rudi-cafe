import SandwichCard from "../ui/card-components/sandwichCard";
import { sandwichData } from "../lib/data";
import { Divider } from "@nextui-org/react";

export default function Section3() {
  return (
    <section id="section3">
      <div className="flex flex-row text-center justify-center">
        <Divider className="align-middle self-center mx-auto w-[38%] h-[2px] bg-rudi-yellow hidden md:block" />
        <p className="font-semibold text-rudi-yellow text-4xl text-center m-8">
          SANDWICHES
        </p>
        <Divider className="align-middle self-center mx-auto w-[38%] h-[2px] bg-rudi-yellow hidden md:block" />
      </div>
      <div className="sandwichContainer">
        {sandwichData &&
          sandwichData.map((el) => (
            <SandwichCard
              name={el.name}
              icon={el.icon}
              desc={el.desc}
              type={el.type}
            />
          ))}
      </div>
    </section>
  );
}
