"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import styles from "../styles";
import { navVariants, slideIn, zoomIn } from "../utils/motion";
import { AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
  const [show, setShow] = useState(false);
  return (
    <motion.nav
      variants={navVariants}
      initial="hidden"
      whileInView="show"
      className={`${styles.xPaddings} py-8 relative`}
    >
      <div className="absolute w-[50%] inset-0 gradient-01" />
      <div
        className={`${styles.innerWidth} relative mx-auto flex justify-between gap-8`}
      >
        <img
          src="/search.svg"
          alt="search"
          className="w-[24px] h-[24px] object-contain"
        />
        <h2 className="font-extrabold text-[24px] leading-[30px] text-white">
          METAVERSES
        </h2>
        {/* <img
          src="/menu.svg"
          alt="menu"
          className=" w-[24]px h-[24px] object-contain"
          onClick={() => setShow(!show)}
        /> */}
        {show ? (
          <AiOutlineClose
            onClick={() => setShow(!show)}
            className="text-white w-[24px] h-[24px]"
          ></AiOutlineClose>
        ) : (
          <img
            src="/menu.svg"
            alt="menu"
            className=" w-[24px] h-[24px] object-contain"
            onClick={() => setShow(!show)}
          />
        )}
        {show && (
          <motion.div
            className=" absolute top-10 right-1 w-30 h-60 bg-slate-800 px-20 z-20 flex justify-evenly items-center flex-col"
            variants={zoomIn(0.1, 0.5)}
            initial="hidden"
            whileInView="show"
          >
            <a
              href=""
              className=" text-secondary-white hover:text-violet-600 transition-colors duration-500"
            >
              Home
            </a>
            <a
              href="#explore"
              className=" text-secondary-white hover:text-violet-600 transition-colors duration-500"
            >
              Explore
            </a>
            <a
              href=""
              className=" text-secondary-white hover:text-violet-600 transition-colors duration-500"
            >
              About
            </a>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
};

export default Navbar;
