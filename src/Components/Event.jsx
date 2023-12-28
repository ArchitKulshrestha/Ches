/* eslint-disable react/prop-types */
/* eslint-disable react-refresh/only-export-components */

import { motion } from "framer-motion";
import { styles } from "../styles";
import Tilt from "react-parallax-tilt";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";
import { ChesLogo } from "../assets";
import { events } from "../Constants";

const EventCard = ({ content, index }) => {
  return (
    <>
      <Tilt
        tiltMaxAngleX={10}
        scale={1.02}
        tiltMaxAngleY={10}
        transitionSpeed={1950}>
        <motion.div
          variants={fadeIn("right", "spring", index * 0.4, 0.3)}
          className="w-[90%] sm:w-[280px] bg-background-900/70 rounded-[20px] py-4 px-4 min-h-[300px]    cursor-pointer"
          onClick={() =>
            document.getElementById(`my_modal_${index}`).showModal()
          }>
          <h1 className="text-2xl font-semibold">Event {index + 1}</h1>
          <p className="text-[16px] my-6">{content}</p>
        </motion.div>{" "}
      </Tilt>
      <dialog
        id={`my_modal_${index}`}
        className="drop-shadow-md backdrop-blur-[10px] bg-background-800/70 rounded-[20px] py-8 px-8 sm:w-1/2 w-full ">
        <div className="modal-box">
          <div className="flex gap-4 flex-wrap">
            <div>
              <img
                src={ChesLogo}
                alt="About Icon"
                className="w-32 h-16 object-contain"
              />
            </div>

            <div>
              <h3 className="text-2xl text-text-200 font-semibold">
                Event {index}
              </h3>
              <p className="py-4 text-lg text-text-200 font-semibold">
                {content}
              </p>
              <a className="text-text-300 hover:text-accent-400 my-2">
                important link
              </a>
            </div>
          </div>
          <div className="modal-action">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button className="bg-secondary-600 py-3 mt-3 px-8 rounded-xl outline-none w-fit text-text-100 font-bold shadow-md hover:bg-secondary-800">
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
      <motion.div variants={textVariant(0.2)}>
        <h2 className={styles.sectionHeadText}>Events.</h2>

        <motion.p
          variants={fadeIn("right", "spring", 0.4, 0.5)}
          className="mt-4  max-w-3xl leading-[30px]">
          lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea
        </motion.p>
        <div className="mt-20 flex flex-wrap gap-8">
          {/* Open the modal using document.getElementById('ID').showModal() method */}
          {events.map((event, index) => (
            <EventCard key={index} index={index} {...event} />
          ))}
        </div>
      </motion.div>
    </>
  );
}

export default SectionWrapper(Event, "Events");
