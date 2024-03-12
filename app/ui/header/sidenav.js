import { AnimatePresence, motion, useCycle } from "framer-motion";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoIosClose } from "react-icons/io";

export default function SideNav() {
  const links = [
    { name: "About", to: "#", id: 1 },
    { name: "Sandwiches", to: "#", id: 2 },
    { name: "Mebu", to: "#", id: 3 },
    { name: "Contact", to: "#", id: 4 },
  ];

  return (
    <>
      <div className="fixed top-0 w-screen h-screen sm:w-96 bg-green-800">
        <p className="font-semibold text-green-50 text-4xl block ml-12 mt-48">
          About
        </p>
        <p className="font-semibold text-green-50 text-4xl block ml-12 mt-6">
          Sandwiches
        </p>
        <p className="font-semibold text-green-50 text-4xl block ml-12 mt-6">
          Menu
        </p>
        <p className="font-semibold text-green-50 text-4xl block ml-12 mt-6">
          Contact
        </p>
      </div>
      <div className="fixed top-0 m-8 mt-16">
        <RxHamburgerMenu size="2em" color="yellow" />
      </div>
    </>
  );
}
