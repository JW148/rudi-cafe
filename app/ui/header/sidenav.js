import { AnimatePresence, motion, useCycle } from "framer-motion";
import { RxHamburgerMenu } from "react-icons/rx";
import { RxCross2 } from "react-icons/rx";
import { IoIosClose } from "react-icons/io";
import { Tooltip, Button, Image } from "@nextui-org/react";
import dynamic from "next/dynamic";

const ScrollLink = dynamic(
  () => import("react-scroll").then((module) => module.Link),
  {
    ssr: false,
  }
);

import useDeviceSize from "@/app/lib/deviceSize";

export default function SideNav() {
  const [width, height] = useDeviceSize();
  const links = [
    { name: "About", to: "section1", id: 1 },
    { name: "Sandwiches", to: "section3", id: 2 },
    { name: "Menu", to: "section4", id: 3 },
    { name: "Contact", to: "section5", id: 4 },
  ];

  //used to stagger the links as they appear with the sidenav
  const sideVariants = {
    closed: {
      transition: {
        staggerChildren: 0.1,
        staggerDirection: -1,
      },
    },
    open: {
      transition: {
        staggerChildren: 0.1,
        staggerDirection: 1,
      },
    },
  };

  const itemVariants = {
    closed: {
      opacity: 0,
    },
    open: { opacity: 1 },
  };
  const [open, cycleOpen] = useCycle(false, true);

  function renderItem(name, to, id) {
    if (id === 1) {
      return (
        <motion.div
          className="flex flex-row font-semibold text-green-50 text-4xl ml-12 mt-12 md:mt-28"
          variants={itemVariants}
        >
          <ScrollLink
            to={to}
            spy={true}
            smooth={true}
            duration={2500}
            onClick={cycleOpen}
          >
            {name}
          </ScrollLink>
          <Image
            priority={true}
            className="ml-12"
            src={"/plain_dark.png"}
            alt="Background image of the cafe"
            width={80}
            height={80}
          />
        </motion.div>
      );
    } else if (id === 3) {
      return (
        <motion.div
          className="flex flex-row font-semibold text-green-50 text-4xl ml-12 mt-12"
          variants={itemVariants}
        >
          <ScrollLink
            to={to}
            spy={true}
            smooth={true}
            duration={2500}
            offset={-height * 0.2}
            onClick={cycleOpen}
          >
            {name}
          </ScrollLink>
          <Image
            priority={true}
            className="ml-12"
            src={"/muffa_dark.png"}
            alt="Background image of the cafe"
            width={80}
            height={80}
          />
        </motion.div>
      );
    } else {
      return (
        <motion.div
          className="flex flex-row font-semibold text-green-50 text-4xl ml-12 mt-12"
          variants={itemVariants}
        >
          <ScrollLink
            to={to}
            spy={true}
            smooth={true}
            duration={2500}
            offset={-height * 0.2}
            onClick={cycleOpen}
          >
            {name}
          </ScrollLink>
        </motion.div>
      );
    }
  }
  return (
    <>
      <AnimatePresence>
        {open && (
          <motion.aside
            initial={{ width: 0 }}
            animate={{ width: window.innerWidth }}
            exit={{
              width: 0,
              transition: { delay: 0.5, duration: 0.3 },
            }}
            className="fixed top-0 w-screen h-screen sm:w-96 bg-[#445A29] overflow-auto"
          >
            <motion.div
              initial="closed"
              animate="open"
              exit="closed"
              variants={sideVariants}
            >
              <motion.div className="flex justify-between items-center px-4 pt-4 md:px-8">
                <Image
                  priority={true}
                  src={"/rudi_logo.png"}
                  alt="Rudi logo"
                  width={160}
                  height={120}
                />
                <Button
                  isIconOnly
                  className="bg-transparent"
                  onClick={cycleOpen}
                >
                  <RxCross2 className="iconSize" />
                </Button>
              </motion.div>
              {links.map(({ name, to, id }, i) => renderItem(name, to, id))}
              <motion.div variants={itemVariants} className="mt-12 ml-24">
                <Image
                  priority={true}
                  src={"/baguete_dark.png"}
                  alt="Background image of the cafe"
                  width={100}
                  height={100}
                />
              </motion.div>
            </motion.div>
          </motion.aside>
        )}
      </AnimatePresence>
      <AnimatePresence>
        {!open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { delay: 0.6, duration: 0.3 } }}
            className="flex items-center px-[5vw]"
          >
            <Button isIconOnly className="bg-transparent" onClick={cycleOpen}>
              <RxHamburgerMenu className="iconSize" />
            </Button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
