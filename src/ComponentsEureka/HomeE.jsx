/* eslint-disable react-refresh/only-export-components */
import { SectionWrapper } from "../hoc";

// import { motion } from "framer-motion";
// import { fadeIn, textVariant } from "../utils/motion";
import { Link } from "react-router-dom";

import { EurekaHome } from "../assets";

function HomeE() {
  const handleclick = () => {
    <Link to="/data" />;
  };
  const Upload_file = () => {
    <Link to="/Upload"></Link>;
  };
  const handleSignOut = () => {
    sessionStorage.removeItem("token");
    window.location.href = "/eureka";
  };

  return (
    <>
      <section className="relative w-full mx-auto min-h-screen overflow-hidden ">
        <div className="w-full flex flex-col sm:flex-row justify-between items-center mt-[4rem]">
          <div className="flex flex-col">
            <h1 className="text-text-100 font-bold md:text-[70px] sm:text-[60px] text-[40px] font-openSans es:text-[2.2rem]">
              Eureka 6.0
            </h1>
            <div className=" font-openSans  text-2xl sm:text-4xl">
              Find your Eureka Moment!
            </div>
          </div>
          <img
            src={EurekaHome}
            alt="Home-image"
            className=" mt-6 w-[22rem] h-[15rem] em:h-[15rem] em:w-[18rem] emobile:w-[15rem] emobile:h-[12rem] es:w-[12rem] es:h-[8rem]"
          />
        </div>
        <div className="">
          {sessionStorage.getItem("token") && (
            <div className="flex gap-4 my-4 items-center">
              <Link to="/Upload">
                <button
                  className="bg-secondary-600 py-1 px-5 rounded-full outline-none w-fit text-text-100 font-bold shadow-md hover:bg-secondary-800"
                  onClick={Upload_file}>
                  Upload
                </button>
              </Link>
              <Link to="/data">
                <button
                  className="   bg-secondary-600 py-1 px-5 rounded-full outline-none w-fit text-text-100 font-bold shadow-md hover:bg-secondary-800  "
                  onClick={handleclick}>
                  Dashboard
                </button>
              </Link>
            </div>
          )}
          {sessionStorage.getItem("token") ? (
            <Link to="/eureka">
              <button
                className="border-2 border-background-300/50  py-1 px-5 rounded-full outline-none w-fit text-text-100 font-bold shadow-md hover:bg-secondary-800"
                onClick={handleSignOut}>
                LogOut
              </button>
            </Link>
          ) : (
            <Link to="/login">
              <button className="bg-secondary-600 py-2 px-5 rounded-xl outline-none w-fit text-text-100 font-bold shadow-md hover:bg-secondary-800">
                Login
              </button>
            </Link>
          )}
        </div>
        <div className="relative w-full flex flex-col align-center items-center mt-[2rem]">
          <div className="text-[2rem] font-openSans mx-auto mb-[0.5rem] items-center">
            About
          </div>
          <hr className="border-[0.1rem] w-[55rem]"></hr>
          <div className="pt-[0.5rem] text-sm sm:text-base text-center">
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
      </section>
    </>
  );
}

export default SectionWrapper(HomeE, "HomeE");
