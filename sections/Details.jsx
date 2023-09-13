"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import styles from "../styles";
import { detailData } from "../constants";
import { TitleText, Medium, DetailCard } from "../components";

import {
  staggerContainer,
  fadeIn,
  planetVariants,
  navVariants,
} from "../utils/motion";

function Details() {
  const [Index, setIndex] = useState(
    detailData.filter((data) => data.id === "04")
  );

  const changeIndex = (id) => {
    let newData = detailData.filter((data) => data.id === id);
    console.log(newData);
    setIndex(newData);
  };
  console.log(Index);
  return (
    <section className={`${styles.paddings} relative z-10`}>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: "false", ammount: 0.25 }}
        className={`${styles.innerWidth} flex flex-col mx-auto`}
      >
        <motion.div
          variants={navVariants}
          className="flex lg:flex-row flex-col justify-between items-center"
        >
          <Medium title="Metaverse" />
          <div className=" flex flex-row justify-around lg:gap-8 gap-2 px-[20px] lg:mt-[0px] mt-[30px]">
            {detailData.map((data) => {
              return (
                <div
                  className={`${styles.flexCenter} w-[70px] h-[70px] rounded-[24px] bg-[#323f5d]`}
                  key={data.id}
                  onClick={() => changeIndex(data.id)}
                >
                  <p className="text-white cursor-pointer font-bold">
                    {data.id}
                  </p>
                </div>
              );
            })}
          </div>
        </motion.div>

        <DetailCard data={Index} />
        {/*  */}
      </motion.div>
    </section>
  );
}

export default Details;
