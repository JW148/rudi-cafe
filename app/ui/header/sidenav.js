import { AnimatePresence, motion, useCycle } from "framer-motion";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoIosClose } from "react-icons/io";
import { Tooltip, Button, Image } from "@nextui-org/react";

export default function SideNav() {
  const links = [
    { name: "About", to: "#", id: 1 },
    { name: "Sandwiches", to: "#", id: 2 },
    { name: "Menu", to: "#", id: 3 },
    { name: "Contact", to: "#", id: 4 },
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
          className="flex flex-row font-semibold text-green-50 text-4xl ml-12 mt-40"
          variants={itemVariants}
        >
          <motion.a key={id} href={to} whileHover={{ scale: 1.1 }}>
            {name}
          </motion.a>
          <Image
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
          <motion.a key={id} href={to} whileHover={{ scale: 1.1 }}>
            {name}
          </motion.a>
          <Image
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
          <motion.a key={id} href={to} whileHover={{ scale: 1.1 }}>
            {name}
          </motion.a>
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
              {links.map(({ name, to, id }, i) => renderItem(name, to, id))}
              <motion.div variants={itemVariants} className="mt-12 ml-24">
                <Image
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
      <div className="fixed top-14 ml-[5vw]">
        <Button isIconOnly className="bg-transparent" onClick={cycleOpen}>
          <RxHamburgerMenu size="2.5em" color="#FFDF00" />
        </Button>
      </div>
    </>
  );
}
