import BackgroundReveal from "./ui/background";
import Header from "./ui/header/header";
import AboutCard from "./ui/card-components/aboutCard";
import ExploreButton from "./ui/explore-nav/explore-link";
import SandwichCard from "./ui/card-components/sandwichCard";

export default function Home() {
  return (
    <main className="flex flex-col">
      <Header />
      <BackgroundReveal />

      <AboutCard />
      <ExploreButton className="exploreButton"/>

      
      {/* Just to show how it would look */}
      <div className="sandwichContainer" id="meatSandwiches">
        <SandwichCard />
        <SandwichCard />
        <SandwichCard />
      </div>

      
      <div className="h-screen overflow-hidden text-center">
        <p>some text</p>
      </div>
    </main>
  );
}
