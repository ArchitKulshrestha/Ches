/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
/* eslint-disable react/no-unescaped-entities */
import { styles } from "../styles";
import { Achievements } from "../Constants";
import Tilt from "react-parallax-tilt";
import { SectionWrapper } from "../hoc";
import { IoMdLink } from "react-icons/io";

const AchievementCard = ({ content, img, link }) => {
  return (
    <Tilt
      tiltMaxAngleX={5}
      scale={1.02}
      tiltMaxAngleY={5}
      transitionSpeed={1950}>
      <div className="w-full p-[1px] rounded-[10px] h-[450px]">
        <div className="w-[98%] sm:w-[380px] hover:shadow-lg hover:shadow-text-500/60 backdrop-blur-[10px] bg-background-900/70 rounded-[20px] py-2 px-4 flex flex-col items-center justify-start h-full relative">
          {" "}
          <img
            src={img}
            alt="About Icon"
            className=" h-[14rem] rounded-2xl object-contain my-4"
          />{" "}
          <div className="w-full text-left mt-4">
            <h3 className="text-sm">{content}</h3>
          </div>
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="absolute bottom-3 left-4 text-text-200 hover:text-accent-400">
            <IoMdLink className="text-3xl" />
          </a>
        </div>
      </div>
    </Tilt>
  );
};

const Achievement = () => {
  return (
    <section>
      <h2 className={styles.sectionHeadText}>Achievements.</h2>

      <p className="mt-2  max-w-3xl leading-[30px]">
        In our relentless pursuit of excellence, ChES has achieved significant
        milestones along its journey. These accomplishments are a testament to
        the dedication of our determined team members, the unwavering support
        from our esteemed faculty advisors, and the encouragement received from
        the college administration.
      </p>
      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8  place-content-center ">
        {Achievements.map((Achievements, index) => (
          <AchievementCard key={index} index={index} {...Achievements} />
        ))}
      </div>
    </section>
  );
};

export default SectionWrapper(Achievement, "Achievement");
