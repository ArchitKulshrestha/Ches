/* eslint-disable react-refresh/only-export-components */
import Typewriter from "typewriter-effect";
import { SectionWrapper } from "../hoc";
import { heroimage } from "../assets";
import { motion } from "framer-motion";
import { fadeIn } from "../utils/motion";

function Home() {
  return (
    <>
      <section className="relative w-full h-[88vh] mx-auto">
        <div className="absolute top-[7rem] w-full">
          <motion.div
            className="flex sm:flex-row flex-col gap-10"
            variants={fadeIn("right", "tween ", 0.3, 0.4)}>
            <div className="sm:w-[60%] w-full h-[150px]">
              <h3 className="text-text-100  font-bold md:text-[75px] sm:text-[60px] text-[40px] font-OpenSans">
                We Are
              </h3>
              <div className="mt-4 text-2xl  md:text-[2.8rem]">
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
            <div className="sm:w-[40%] w-full flex justify-center items-center">
              <img
                src={heroimage}
                alt="Home-image"
                className="sm:h-[30rem] h-[18rem] object-contain object-center "
              />
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}

export default SectionWrapper(Home, "Home");
