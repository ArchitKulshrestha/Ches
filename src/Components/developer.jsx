/* eslint-disable react-refresh/only-export-components */
import { Developers } from "../Constants/index";
import Tilt from "react-parallax-tilt";
import { fadeIn, textVariant } from "../utils/motion";
import { motion } from "framer-motion";
import { FaLinkedin } from "react-icons/fa";
import { SectionWrapper } from "../hoc";
import { styles } from "../styles";


function Develop() {
  return (
    <>
      <motion.div variants={textVariant(0.3)}>
        <h2 className={styles.sectionHeadText}>The Team.</h2>
      </motion.div>
      <motion.p
        variants={fadeIn("right", "tween", 0.1, 0.4)}
        className="mt-4  max-w-3xl leading-[30px]">
      </motion.p>
      <motion.div variants={textVariant()}>
        <h2 className={"text-4xl font-semibold mt-10 mb-5"}>Developers</h2>
      </motion.div>
      <div className="mt-5 flex flex-wrap gap-10">
        {Developers.map((developer) => (
          <Tilt
            key={developer.id}
            className="sm:w-[280px] w-full"
            tiltMaxAngleX={10}
            scale={1.02}
            tiltMaxAngleY={10}
            transitionSpeed={1950}>
            <motion.div
              variants={fadeIn("right", "spring", 0.5, 0.75)}
              className="w-full  rounded-[10px]  ">
              <div className="w-[300px] h-[120px]  hover:shadow-text-500/70 backdrop-blur-[10px] bg-background-900/70 rounded-[20px] text-[#f7ebfa]  p-4 hover:shadow-lg">
                <div className=" font-semibold text-lg ">{developer.name}</div>

                <a href={`${developer.Linkedin}`} target="_blank" rel="noreferrer">
                  <FaLinkedin className="text-2xl text-text-200 hover:text-accent-400" />
                </a>
              </div>
            </motion.div>
          </Tilt>
        ))}
      </div>
    </>
  );
}

export default SectionWrapper(Develop, "Develop");
