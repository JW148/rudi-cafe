import BackgroundReveal from "./ui/background";
import Header from "./ui/header";

export default function Home() {
  return (
    <main className="flex flex-col">
      <Header />
      <BackgroundReveal />
      <div className="h-screen overflow-hidden text-center">
        <p>some text</p>
      </div>
      <div className="h-screen overflow-hidden text-center">
        <p>some text</p>
      </div>
    </main>
  );
}
