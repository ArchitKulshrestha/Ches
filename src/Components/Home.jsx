/* eslint-disable react-refresh/only-export-components */
import Typewriter from "typewriter-effect";
import { SectionWrapper } from "../hoc";

import { motion } from "framer-motion";
import { fadeIn } from "../utils/motion";

function Home() {
  return (
    <>
      <section className="relative w-full h-[88vh] mx-auto">
        <div className="absolute top-[7rem] w-full">
          <motion.div
            className="flex sm:flex-row flex-col gap-y-20"
            variants={fadeIn("right", "tween ", 0.3, 0.4)}>
            <div className="sm:w-[60%] w-full h-[150px]">
              <h1 className="text-text-100  font-bold md:text-[75px] sm:text-[60px] text-[45px] font-OpenSans">
                We Are
              </h1>
              <div className="mt-4 text-3xl  md:text-[2.8rem]">
                <Typewriter
                  options={{
                    strings: [
                      "ChES",
                      "Chemical Engineering Society",
                      "AIChE SVNIT Student Chapter",
                      "The Future",
                    ],
                    pauseFor: 1000,
                    delay: 100,
                    deleteSpeed: 15,
                    autoStart: true,
                    loop: true,
                  }}
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}

export default SectionWrapper(Home, "Home");
