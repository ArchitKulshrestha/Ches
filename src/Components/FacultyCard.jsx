// import React from "react";

import { motion } from "framer-motion";

import Tilt from "react-parallax-tilt";
import { fadeIn } from "../utils/motion";

import { Sundar, Jignasa, Rathore, dhyey } from "../assets";

const FacultyCard = () => {
  return (
    <>
      <h1 className=" text-4xl font-semibold mt-10 mb-5">Mentors</h1>
      <div className="mt-10 flex flex-wrap gap-8">
        <Tilt
          className="w-[90%] sm:w-[280px] "
          tiltMaxAngleX={10}
          scale={1.02}
          tiltMaxAngleY={10}
          transitionSpeed={1950}>
          <div className="w-full  p-[1px] rounded-[10px]  ">
            <div className=" hover:shadow-lg hover:shadow-text-500/60  backdrop-blur-[10px] bg-background-900/70 rounded-[20px] py-6 px-6 min-h-[280px] flex justify-evenly items-center flex-col">
              <img
                src={Jignasa}
                alt="About Icon"
                className="w-30 h-40 rounded-xl object-contain overflow-hidden"
              />
              <h1 className="text-text-200 text-2xl font-semibold mt-2 text-center">
                Dr. Jignasa
              </h1>
              <h1 className="text-text-100 text-xl mt-1   text-center">
                Chairperson
              </h1>
              <a
                href="https://svnit.ac.in/facup/jvg_250919.pdf"
                className="text-text-300 hover:text-accent-400 my-2"
                target="_blank"
                rel="noopener noreferrer">
                C.V.
              </a>
            </div>
          </div>
        </Tilt>
        <Tilt
          className="w-[90%] sm:w-[280px] "
          tiltMaxAngleX={10}
          scale={1.02}
          tiltMaxAngleY={10}
          transitionSpeed={1950}>
          <div className="w-full  p-[1px] rounded-[10px]  ">
            <div className=" hover:shadow-lg hover:shadow-text-500/60  backdrop-blur-[10px] bg-background-900/70 rounded-[20px] py-5 px-6 min-h-[200px] flex justify-evenly items-center flex-col">
              <img
                src={Rathore}
                alt="About Icon"
                className="w-30 h-30 rounded-xl object-contain overflow-hidden"
              />
              <h1 className="text-text-200 text-2xl font-semibold mt-2 text-center">
                Dr. Rathode
              </h1>
              <h1 className="text-text-100 text-xl mt-1   text-center">
                Co-Chairperson
              </h1>
              <h3 className=" text-sm my-4 ">
                <a
                  href="https://www.linkedin.com/in/vineet-kumar-rathore-5170861a/?originalSubdomain=in"
                  className="text-text-300 hover:text-accent-400 my-2"
                  target="_blank"
                  rel="noopener noreferrer">
                  linkedin{" "}
                </a>
              </h3>
            </div>
          </div>
        </Tilt>
        <Tilt
          className="w-[90%] sm:w-[280px] "
          tiltMaxAngleX={10}
          scale={1.02}
          tiltMaxAngleY={10}
          transitionSpeed={1950}>
          <div className="w-full  p-[1px] rounded-[10px]  ">
            <div className=" hover:shadow-lg hover:shadow-text-500/60  backdrop-blur-[10px] bg-background-900/70 rounded-[20px] py-5 px-6 min-h-[280px] flex justify-evenly items-center flex-col">
              <img
                src={Sundar}
                alt="About Icon"
                className="w-30 h-30 rounded-xl object-contain overflow-hidden"
              />
              <h1 className="text-text-200 text-2xl font-semibold mt-2 text-center">
                Dr. Sundar{"  "}
              </h1>
              <h1 className="text-text-100 text-xl mt-1   text-center">
                Co-Chairperson
              </h1>
              <h3 className=" text-sm my-4 ">
                <a
                  href="https://www.svnit.ac.in/facup/SUNDARSK_CV.pdf"
                  className="text-text-300 hover:text-accent-400 my-2"
                  target="_blank"
                  rel="noopener noreferrer">
                  C.V.
                </a>
              </h3>
            </div>
          </div>
        </Tilt>
        <Tilt
          className="w-[90%] sm:w-[280px] "
          tiltMaxAngleX={10}
          scale={1.02}
          tiltMaxAngleY={10}
          transitionSpeed={1950}>
          <div className="w-full  p-[1px] rounded-[10px]  ">
            <div className=" hover:shadow-lg hover:shadow-text-500/60  backdrop-blur-[10px] bg-background-900/70 rounded-[20px] py-6 px-6 min-h-[280px] flex justify-evenly items-center flex-col">
              <img
                src={dhyey}
                alt="About Icon"
                className="w-30 h-40 rounded-xl object-contain overflow-hidden"
              />
              <h1 className="text-text-200 text-2xl font-semibold mt-2 text-center">
                Dhyey Bhagat
              </h1>
              <h1 className="text-text-100 text-xl mt-1   text-center">
                President
              </h1>
              <a
                href="https://www.linkedin.com/in/dhyey-bhagat-a36599215/"
                className="text-text-300 hover:text-accent-400 my-2"
                target="_blank"
                rel="noopener noreferrer">
                linkedin{" "}
              </a>
            </div>
          </div>
        </Tilt>
        <Tilt
          className="w-[90%] sm:w-[280px] "
          tiltMaxAngleX={10}
          scale={1.02}
          tiltMaxAngleY={10}
          transitionSpeed={1950}>
          <div className="w-full  p-[1px] rounded-[10px]  ">
            <div className=" hover:shadow-lg hover:shadow-text-500/60  backdrop-blur-[10px] bg-background-900/70 rounded-[20px] py-6 px-6 min-h-[280px] flex justify-evenly items-center flex-col">
              <img
                src={Jignasa}
                alt="About Icon"
                className="w-30 h-40 rounded-xl object-contain overflow-hidden"
              />
              <h1 className="text-text-200 text-2xl font-semibold mt-2 text-center">
                Dhyey Patel
              </h1>
              <h1 className="text-text-100 text-xl mt-1   text-center">
                Vice-President
              </h1>
              <a
                href="https://svnit.ac.in/facup/jvg_250919.pdf"
                className="text-text-300 hover:text-accent-400 my-2"
                target="_blank"
                rel="noopener noreferrer">
                C.V
              </a>
            </div>
          </div>
        </Tilt>
      </div>
    </>
  );
};

export default FacultyCard;
