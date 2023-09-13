"use client";

import { motion } from "framer-motion";
import { StartSteps, ExploreCard, TitleText, TypingText } from "../components";
import styles from "../styles";
import { staggerContainer, fadeIn, planetVariants } from "../utils/motion";
import { startingFeatures } from "../constants";
const GetStarted = () => {
  // const fetchapi = async () => {
  //   const response = await fetch("http://localhost:3000/api/hello");
  //   const data = await response.json();
  //   console.log(data);
  // };
  // fetchapi();
  return (
    <section className={`${styles.paddings} relative z-10`}>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: "false", ammount: 0.25 }}
        className={`${styles.innerWidth} mx-auto flex lg:flex-row flex-col gap-8`}
      >
        <motion.div
          variants={planetVariants("left")}
          className={` flex-1 ${styles.flexCenter}`}
        >
          <img
            src="/get-started.png"
            alt="imgae"
            className=" w-[90%] h-[90%] object-contain"
          />
        </motion.div>
        <motion.div
          variants={fadeIn("left", "tween", 0.2, 1)}
          className="flex-[0.75] flex justify-center flex-col"
        >
          <TypingText title="| How Metaverses works"></TypingText>
          <TitleText
            title={<>Get started with just a few clicks</>}
          ></TitleText>
          <div className="mt-[31px] flex flex-col max-w-[370px] gap-[24px]">
            {startingFeatures.map((data, index) => {
              return <StartSteps key={data} number={index + 1} text={data} />;
            })}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default GetStarted;
