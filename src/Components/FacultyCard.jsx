// import React from "react";

import { motion } from "framer-motion";

import Tilt from "react-parallax-tilt";
import { fadeIn } from "../utils/motion";

import { Sundar, Jignasa, Rathore } from "../assets";

const FacultyCard = () => {
  return (
    <>
      <div className=" text-4xl font-semibold mt-8 mb-3">Faculty Advisors</div>
      <div className="mt-10 flex flex-wrap gap-8">
        <Tilt
          className="w-[90%] sm:w-[280px] "
          tiltMaxAngleX={10}
          scale={1.02}
          tiltMaxAngleY={10}
          transitionSpeed={1950}>
          <motion.div
            variants={fadeIn("right", "spring", 0.5, 0.75)}
            className="w-full  p-[1px] rounded-[10px]  ">
            <div className=" hover:shadow-lg hover:shadow-text-500/60  backdrop-blur-[10px] bg-background-900/70 rounded-[20px] py-6 px-6 min-h-[280px] flex justify-evenly items-center flex-col">
              <img
                src={Jignasa}
                alt="About Icon"
                className="w-20 h-20 rounded-xl object-contain overflow-hidden"
              />
              <h1 className="text-text-200 text-2xl font-semibold mt-2 text-center">
                Dr. Jignasa{" "}
              </h1>
              <h3 className=" text-sm my-4 ">
                lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea
              </h3>
            </div>
          </motion.div>
        </Tilt>
        <Tilt
          className="w-[90%] sm:w-[280px] "
          tiltMaxAngleX={10}
          scale={1.02}
          tiltMaxAngleY={10}
          transitionSpeed={1950}>
          <motion.div
            variants={fadeIn("right", "spring", 0.5, 0.75)}
            className="w-full  p-[1px] rounded-[10px]  ">
            <div className=" hover:shadow-lg hover:shadow-text-500/60  backdrop-blur-[10px] bg-background-900/70 rounded-[20px] py-5 px-6 min-h-[280px] flex justify-evenly items-center flex-col">
              <img
                src={Rathore}
                alt="About Icon"
                className="w-20 h-20 rounded-xl object-contain overflow-hidden"
              />
              <h1 className="text-text-200 text-2xl font-semibold mt-2 text-center">
                Dr. Rathode{" "}
              </h1>
              <h3 className=" text-sm my-4 ">
                lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea
              </h3>
            </div>
          </motion.div>
        </Tilt>
        <Tilt
          className="w-[90%] sm:w-[280px] "
          tiltMaxAngleX={10}
          scale={1.02}
          tiltMaxAngleY={10}
          transitionSpeed={1950}>
          <motion.div
            variants={fadeIn("right", "spring", 0.5, 0.75)}
            className="w-full  p-[1px] rounded-[10px]  ">
            <div className=" hover:shadow-lg hover:shadow-text-500/60  backdrop-blur-[10px] bg-background-900/70 rounded-[20px] py-5 px-6 min-h-[280px] flex justify-evenly items-center flex-col">
              <img
                src={Sundar}
                alt="About Icon"
                className="w-20 h-20 rounded-xl object-contain overflow-hidden"
              />
              <h1 className="text-text-200 text-2xl font-semibold mt-2 text-center">
                Dr. Sundar{" "}
              </h1>
              <h3 className=" text-sm my-4 ">
                lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea
              </h3>
            </div>
          </motion.div>
        </Tilt>
      </div>
    </>
  );
};

export default FacultyCard;
