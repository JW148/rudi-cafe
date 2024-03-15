import BackgroundReveal from "./ui/background";
import Header from "./ui/header/header";
import AboutCard from "./ui/card-components/aboutCard";
import ExploreButton from "./ui/explore-nav/explore-link";

import Section1 from "./sections/section1";
import Section2 from "./sections/section2";
import Section3 from "./sections/section3";
import Section5 from "./sections/section5";

export default function Home() {
  return (
    <main className="flex flex-col">
      <Header />
      <BackgroundReveal />

      <Section1 />
      <Section2 />
      <Section3 />
      <Section5 />
    </main>
  );
}
