/* eslint-disable react-refresh/only-export-components */

import { motion } from "framer-motion";
import { styles } from "../styles";
import Tilt from "react-parallax-tilt";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";
import { ChesLogo } from "../assets";

const EventCard = () => {
  return (
    <>
      <div
        className="w-[90%] sm:w-[280px] bg-background-900/70 rounded-[20px] py-8 px-8 min-h-[280px]    cursor-pointer"
        onClick={() => document.getElementById("my_modal_1").showModal()}>
        <h1 className="text-2xl font-semibold">Event1</h1>
        <p className="text-[16px] my-6">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>
      <dialog
        id="my_modal_1"
        className="drop-shadow-md backdrop-blur-[10px] bg-background-800/70 rounded-[20px] py-8 px-8">
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
              <h3 className="text-2xl text-text-200 font-semibold">Event!</h3>
              <p className="py-4 text-lg text-text-200 font-semibold">
                Press ESC key or click the button below to close
              </p>
              <a className="text-text-300 hover:text-accent-400 mt-2">
                important link
              </a>
            </div>
          </div>
          <div className="modal-action">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button className="bg-secondary-600 py-3 px-8 rounded-xl outline-none w-fit text-text-100 font-bold shadow-md hover:bg-secondary-800">
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
        <motion.div variants={textVariant()}>
          <h2 className={styles.sectionHeadText}>Events.</h2>
        </motion.div>
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-4  max-w-3xl leading-[30px]">
          lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea
        </motion.p>
        <div className="mt-20 flex flex-wrap gap-8">
          {/* Open the modal using document.getElementById('ID').showModal() method */}
          <EventCard />
        </div>
      </div>
    </>
  );
}

export default SectionWrapper(Event, "Event");
