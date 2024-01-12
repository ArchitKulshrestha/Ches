/* eslint-disable react-refresh/only-export-components */
import { Teams } from "../Constants/index";
import Tilt from "react-parallax-tilt";

import { FaLinkedin } from "react-icons/fa";
import { SectionWrapper } from "../hoc";
import { styles } from "../styles";
import FacultyCard from "./FacultyCard";
import { teamImg } from "../assets";

function Team() {
  return (
    <section>
      <h2 className={styles.sectionHeadText}>The Team.</h2>
      <div className="w-full mt-8 ">
        <img
          src={teamImg}
          alt="team"
          className="h-[50vh] object-center rounded-md w-full object-cover"
        />
      </div>

      <FacultyCard />
      <div className="h-screen sm:h-[50vh] w-full mt-8 bg-contain bg-center bg-no-repeat bg-aluminiMobile sm:bg-alumini"></div>

      <h2 className={"text-4xl font-semibold mt-10 mb-5"}>Committee</h2>

      <div className="mt-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  gap-8  mx-auto">
        {Teams.map((team) => (
          <Tilt
            key={team.id}
            tiltMaxAngleX={10}
            scale={1.02}
            tiltMaxAngleY={10}
            transitionSpeed={1950}>
            <div className="w-full  rounded-[10px]  ">
              <div className=" w-[98%] sm:w-[280px] h-[120px]  hover:shadow-text-500/70 backdrop-blur-[10px] bg-background-900/70 rounded-[20px] text-[#f7ebfa]  p-4 hover:shadow-lg">
                <div className=" font-semibold text-lg ">{team.name}</div>
                <div className="text-md py-2">{team.Head}</div>

                <a
                  href={`${team.Linkedin}`}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="linkedIn">
                  <FaLinkedin className="text-2xl text-text-200 hover:text-accent-400" />
                </a>
              </div>
            </div>
          </Tilt>
        ))}
      </div>
    </section>
  );
}

export default SectionWrapper(Team, "Team");
