/* eslint-disable react-refresh/only-export-components */
import { SectionWrapper } from "../hoc";

// import { motion } from "framer-motion";
// import { fadeIn, textVariant } from "../utils/motion";
import { Link } from "react-router-dom";
const year = new Date().getFullYear();
import { SVNITLOGO, EurekaHome } from "../assets";

function HomeE() {
  const handleclick = () => {
    <Link to="/data" />;
  };
  const Upload_file = () => {
    <Link to="/Upload"></Link>;
  };

  return (
    <>
      <section className="relative w-full mx-auto overflow-hidden ">
        <div className="w-full flex flex-row justify-between items-center mt-[2rem]">
          <div className="flex flex-col">
            <h1 className="text-text-100 font-bold md:text-[75px] sm:text-[60px] text-[55px] font-openSans es:text-[2.2rem]">
              Eureka 6.0
            </h1>
            <div className="text-[2rem] font-openSans mx-auto em:text-[1.75rem] emobile:text-[1.5rem] es:text-[1.5rem]">
              Find your Eureka Moment!
            </div>
          </div>
          <img
            src={EurekaHome}
            alt="Home-image"
            className="w-[26rem] h-[25rem] em:h-[20rem] em:w-[22rem] emobile:w-[15rem] emobile:h-[15rem] es:w-[10rem] es:h-[10rem]"
          />
        </div>
        <div>
          {sessionStorage.getItem("token") && (
            <div className="flex gap-4 mt-4">
              <Link to="/Upload">
                <button
                  className="bg-secondary-600 py-2 px-6 rounded-xl outline-none w-fit text-text-100 font-bold shadow-md hover:bg-secondary-800"
                  onClick={Upload_file}>
                  upload
                </button>
              </Link>
              <Link to="/data">
                <button
                  className="   bg-secondary-700 py-2 px-6 rounded-xl outline-none w-fit text-text-100 font-bold shadow-md hover:bg-secondary-800  "
                  onClick={handleclick}>
                  Dashboard
                </button>
              </Link>
            </div>
          )}
        </div>
        <div className="relative w-full flex flex-col align-center items-center mt-[2rem]">
          <div className="text-[2rem] font-openSans mx-auto mb-[0.5rem] items-center">
            About
          </div>
          <hr className="border-[0.1rem] w-[55rem]"></hr>
          <div className="pt-[0.5rem] text-center">
            Eureka-the journey from raw thinking & imagination to a properly
            designed innovation! It began in 2018 as a research competition
            initiative by Chemical Engineering Society (ChES), SVNIT where teams
            with different thought processes, innovations compete with each
            other on a common platform to solve different problems after
            performing meticulous research work on their problem statements.
            Along with research, this initiative aims to promote a sense of
            cooperation, coordination & patience among its participants. Team
            ChES is proud to say that, participants of eureka 1.0 applied the
            experience gained in eureka to compete in national and international
            research competitions like ChemTech Student Outreach Program, Smart
            India Hackathon, STPC & Poster Competitions in AIChE Student
            Regional Conference.
          </div>
        </div>
        <footer className="flex flex-col items-center justify-center bg-background-950 mt-[3rem] text-center">
          <img
            src={SVNITLOGO}
            alt="logo"
            className="h-[5rem] w-[5rem] mt-[2.5rem] mb-[1.5rem]"></img>
          <div>AIChE ChES</div>
          <div>Sardar Vallabhbhai National Institute of Technology, Surat</div>
          {/*<hr className="border-1.5 border-accent-600 my-[2.5rem] w-[60rem]"/>*/}
          <p className="text-text-200 text-sm mt-4 mb-[2rem]">
            © {year} AIChE ChES SVNIT. All rights reserved.
          </p>
        </footer>
      </section>
    </>
  );
}

export default SectionWrapper(HomeE, "HomeE");
