"use client";
import React from "react";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer, slideIn } from "../utils/motion";
import { TitleText } from "../components";
import styles from "../styles";
function DetailCard({ data }) {
  console.log(data);
  return (
    <div>
      {data.map((single_data) => {
        return (
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: "false", ammount: 0.25 }}
            className=" flex lg:flex-row flex-col justify-between items-center mt-[50px]"
          >
            <div
              className=" flex lg:w-[400px] w-[300px] lg:h-[400px] h-[300px]"
              key={single_data.id}
            >
              <img
                src={single_data.imgUrl}
                alt={single_data.id}
                className=" w-[100%] h-[100%] object-cover rounded-[30px]"
              />
            </div>
            <div className="feedback-gradient" />
            <div className="flex flex-col">
              <TitleText title={single_data.title} />
              <div className=" h-[2px] bg-white opacity-10" />
              <div className="flex lg:flex-row flex-col gap-[60px] justify-between items-center mt-[20px]">
                <div className="flex flex-col mt-6">
                  <div
                    className={`${styles.flexCenter} w-[60px] h-[60px] rounded-[24px] bg-[#323f5d]`}
                  >
                    <img
                      src="/headset.svg"
                      alt="icons"
                      className=" w-1/2 h-1/2 object-contain"
                    />
                  </div>
                  <div className=" flex flex-col sm:max-w-[250px] min-w-[230px]">
                    <h4 className="text-white mt-[20px] text-[22px]">
                      Read this before you go
                    </h4>
                    <p className=" text-secondary-white text-[18px] mt-2">
                      {single_data.text}
                    </p>
                  </div>
                </div>

                <div className="flex flex-col mt-6">
                  <div
                    className={`${styles.flexCenter} w-[60px] h-[60px] rounded-[24px] bg-[#323f5d]`}
                  >
                    <img
                      src="/headset.svg"
                      alt="icons"
                      className=" w-1/2 h-1/2 object-contain"
                    />
                  </div>
                  <div className=" flex flex-col sm:max-w-[250px] min-w-[230px]">
                    <h4 className="text-white mt-[20px] text-[22px]">
                      Read this before you go
                    </h4>
                    <p className=" text-secondary-white text-[18px] mt-2">
                      {single_data.text}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        );
      })}
    </div>

    // <motion.div
    //   variants={staggerContainer}
    //   initial="hidden"
    //   whileInView="show"
    //   viewport={{ once: "false", ammount: 0.25 }}
    //   className=" flex md:flex-col flex-row justify-evenly items-center"
    // >
    //   {data.map((single_data) => {
    //     return (
    //       <div className=" flex w-[300px] h-[300px]  " key={single_data.id}>
    //         <img
    //           src={single_data.imgUrl}
    //           alt={single_data.id}
    //           className=" w-[100%] h-[100%] object-cover rounded-2xl "
    //         />
    //       </div>
    //     );
    //   })}
    // </motion.div>
  );
}

export default DetailCard;
