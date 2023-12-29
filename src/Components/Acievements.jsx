/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
/* eslint-disable react/no-unescaped-entities */
import { motion } from "framer-motion";
import { styles } from "../styles";
import { Achievements } from "../Constants";
import Tilt from "react-parallax-tilt";
import { fadeIn } from "../utils/motion";
import { SectionWrapper } from "../hoc";

const AchievementCard = ({ content, index, img }) => {
  return (
    <Tilt
      className="w-[90%] sm:w-[380px] "
      tiltMaxAngleX={10}
      scale={1.02}
      tiltMaxAngleY={10}
      transitionSpeed={1950}>
      <motion.div
        variants={fadeIn("right", "spring", index * 0.1, 0.3)}
        className="w-full  p-[1px] rounded-[10px]  ">
        <div className=" hover:shadow-lg hover:shadow-text-500/60  backdrop-blur-[10px] bg-background-900/70 rounded-[20px] py-2 px-6 min-h-[300px] flex flex-col items-center justify-start ">
          <img
            src={img}
            alt="About Icon"
            className="w-16 h-16 object-contain"
          />

          <h3 className=" text-sm my-4 text-ellipsis">{content}</h3>
        </div>
      </motion.div>
    </Tilt>
  );
};

const Achievement = () => {
  return (
    <>
      <h2 className={styles.sectionHeadText}>Achievements.</h2>

      <p className="mt-4  max-w-3xl leading-[30px]">
        lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      </p>
      <div className="mt-20 flex flex-wrap gap-8">
        {Achievements.map((Achievements, index) => (
          <AchievementCard key={index} index={index} {...Achievements} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Achievement, "Achievement");
