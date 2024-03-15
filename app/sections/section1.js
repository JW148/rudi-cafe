import AboutCard from "../ui/card-components/aboutCard";
import ExploreButton from "../ui/explore-nav/explore-link";

export default function Section1() {
  return (
    <section
      id="section1"
      className="h-screen flex items-center justify-center"
    >
      <AboutCard />
      <ExploreButton className="exploreButton" />
    </section>
  );
}
