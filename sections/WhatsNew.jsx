"use client";
import { motion } from "framer-motion";
import { TitleText, TypingText, NewFeatures } from "../components";
import styles from "../styles";
import { staggerContainer, fadeIn, planetVariants } from "../utils/motion";
import { newFeatures } from "../constants";

const WhatsNew = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: "false", ammount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex lg:flex-row flex-col gap-8`}
    >
      <motion.div
        variants={fadeIn("left", "tween", 0.2, 1)}
        className="flex-[0.75] flex justify-center flex-col"
      >
        <TypingText title="| Whats New?"></TypingText>
        <TitleText title={<>What's new about Metaverse?</>}></TitleText>
        <div className="mt-[48px] flex flex-wrap justify-between gap-[24px]">
          {newFeatures.map((data, index) => {
            return <NewFeatures key={data.title} {...data} />;
          })}
        </div>
      </motion.div>
      <motion.div
        variants={planetVariants("right")}
        className={` flex-1 ${styles.flexCenter}`}
      >
        <img
          src="/whats-new.png"
          alt="imgae"
          className=" w-[90%] h-[90%] object-contain"
        />
      </motion.div>
    </motion.div>
  </section>
);

export default WhatsNew;
