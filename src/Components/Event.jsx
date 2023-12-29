/* eslint-disable react/prop-types */
/* eslint-disable react-refresh/only-export-components */

import { motion } from "framer-motion";
import { styles } from "../styles";
import Tilt from "react-parallax-tilt";
import { fadeIn } from "../utils/motion";
import { SectionWrapper } from "../hoc";
//import { ChesLogo } from "../assets";
import { events } from "../Constants";

const EventCard = ({ content, title, img, index, link }) => {
  return (
    <>
      <Tilt
        tiltMaxAngleX={10}
        scale={1.02}
        tiltMaxAngleY={10}
        transitionSpeed={1950}>
        <motion.div
          variants={fadeIn("right", "spring", index * 0.1, 0.3)}
          className="w-[90%] sm:w-[280px] hover:shadow-lg hover:shadow-text-500/60  backdrop-blur-[10px] bg-background-900/70 rounded-[20px] py-4 px-4 min-h-[300px]    cursor-pointer"
          onClick={() =>
            document.getElementById(`my_modal_${index}`).showModal()
          }>
          <h1 className="text-3xl  font-semibold"> {title}</h1>

          <div className="  rounded-[20px] py-5 px-6 min-h-[280px] flex justify-evenly items-center flex-col">
            <img
              src={img}
              alt="About Icon"
              className="h-[14rem] object-cover   overflow-hidden  rounded-xl "
            />

            <p className="text-text-300 text-center mt-4 font-semibold">
              Explore
            </p>
          </div>
        </motion.div>{" "}
      </Tilt>
      <dialog
        id={`my_modal_${index}`}
        className="drop-shadow-md backdrop-blur-[10px] bg-background-800/70 rounded-[20px] py-8 px-8 sm:w-1/2 w-full ">
        <div className="modal-box">
          <div className="flex gap-4 flex-wrap">
            <div>
              <h3 className="text-3xl text-text-200 font-semibold">{title}</h3>
              <p className="py-4 text-base sm:text-lg text-text-100 font-semibold">
                {content}
              </p>
              <a
                className="text-text-300 hover:text-accent-400 my-2"
                href={link}
                target="_blank"
                rel="noopener noreferrer">
                Know More
              </a>
            </div>
          </div>
          <div className="modal-action">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button className="bg-secondary-800 py-2 mt-3 px-5 rounded-xl outline-none  text-text-100 font-bold shadow-md hover:bg-secondary-700 border-2 border-secondary-500">
                Close
              </button>
            </form>
          </div>
        </div>
      </dialog>
    </>
  );
};

function Event() {
  return (
    <>
      <div>
        <h2 className={styles.sectionHeadText}>Events.</h2>

        <p className="mt-4  max-w-3xl leading-[30px]">
          lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud
        </p>
        <div className="mt-20 flex flex-wrap gap-8">
          {/* Open the modal using document.getElementById('ID').showModal() method */}
          {events.map((event, index) => (
            <EventCard key={index} index={index} {...event} />
          ))}
        </div>
      </div>
    </>
  );
}

export default SectionWrapper(Event, "Events");
