import BackgroundReveal from "./ui/background";
import Header from "./ui/header/header";
import Section1 from "./sections/section1";
import Section2 from "./sections/section2";
import Section3 from "./sections/section3";
import Section4 from "./sections/section4";
import Section5 from "./sections/section5";

export const metadata = {
  title: "Rudi",
  description: "Family run cafe since 1992",
};

export default function Home() {
  return (
    <main className="flex flex-col overflow-hidden">
      <Header />
      <BackgroundReveal />
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
    </main>
  );
}
