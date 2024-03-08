import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between ">
      <Image
        className="z-0 opacity-95"
        src={"/rudi_background.jpg"}
        alt="Background image of the cafe"
        layout="fill"
        objectFit="cover"
        objectPosition="centre"
      />

      <Image
        className="relative z-1 text-4xl"
        src={"/rudi_logo.png"}
        width={750}
        height={180}
      />
    </main>
  );
}
