/* eslint-disable react-refresh/only-export-components */
import { SectionWrapper } from "../hoc";

import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../utils/motion";
import { Link } from "react-router-dom";

function HomeE() {
  const handleclick = () => {
    <Link to="/data" />;
  };
  const Upload_file = () => {
    <Link to="/Upload"></Link>;
  };

  return (
    <>
      <section className="relative w-full h-[85dvh] mx-auto ">
        <div className="absolute top-[2.5rem] sm:top-[3.5rem] w-full">
          <motion.div
            className="mt-[5rem]"
            variants={fadeIn("right", "spring", 0.5, 0.5)}>
            <h1 className=" text-text-100 font-bold md:text-[75px] sm:text-[60px] text-[55px] font-OpenSans">
              Eureka{" "}
            </h1>

            <motion.p
              className="my-4  max-w-3xl text-base  sm:text-xl "
              variants={textVariant(0.5)}>
              Eureka is a research-based event that aims to guide participants
              through the vast realms of Chemical Engineering and unlock truth
              within thier imagination. It consists of several stages, It
              consists It consists of several stages, including issue statement
              creation, team discussion, portal update, video presentation,ppt
              presentaion, and poster presentaion.
            </motion.p>
            {sessionStorage.getItem("token") && (
              <div className="flex gap-4 mt-10">
                <Link to="/Upload">
                  <button
                    className="bg-secondary-600 py-2 px-6 rounded-xl outline-none w-fit text-text-100 font-bold shadow-md hover:bg-secondary-800"
                    onClick={Upload_file}>
                    upload
                  </button>
                </Link>
                <Link to="/data">
                  <button
                    className="   bg-secondary-600 py-2 px-6 rounded-xl outline-none w-fit text-text-100 font-bold shadow-md hover:bg-secondary-800  "
                    onClick={handleclick}>
                    Dashboard
                  </button>
                </Link>
              </div>
            )}
          </motion.div>
        </div>
      </section>
    </>
  );
}

export default SectionWrapper(HomeE, "HomeE");
