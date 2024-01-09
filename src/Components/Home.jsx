/* eslint-disable react-refresh/only-export-components */
import Typewriter from "typewriter-effect";
import { SectionWrapper } from "../hoc";

import { motion } from "framer-motion";
import { fadeIn } from "../utils/motion";
import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <section className="relative w-full h-[88dvh] mx-auto">
        <div className="absolute top-[7rem] w-full">
          <motion.div variants={fadeIn("right", "tween ", 0.3, 0.4)}>
            <h3 className="text-text-100 font-bold md:text-[75px] sm:text-[60px] text-[55px] font-OpenSans">
              We Are
            </h3>
            <div className="mt-2 text-4xl sm:text-[2.8rem] max-w-3xl ">
              <Typewriter
                options={{
                  strings: [
                    "ChES",
                    "Chemical Engineering Society",
                    "AIChE SVNIT Student Chapter",
                    "The Future",
                  ],
                  pauseFor: 1500,
                  delay: 130,
                  deleteSpeed: 30,
                  autoStart: true,
                  loop: true,
                }}
              />
            </div>

            <div className="mt-[5rem]">
              <Link
                className="pt-10 underline uppercase font-bold"
                target="_blank"
                to="/eureka">
                Visit Eureka
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}

export default SectionWrapper(Home, "Home");
