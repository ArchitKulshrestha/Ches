/* eslint-disable react/prop-types */
/* eslint-disable react-refresh/only-export-components */

import { styles } from "../styles";
import Tilt from "react-parallax-tilt";
//import { fadeIn, textVariant } from "../utils/motion";
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
        <div
          className="w-[98%] sm:w-[350px] hover:shadow-lg hover:shadow-text-500/60  backdrop-blur-[10px] bg-background-900/70 rounded-[20px] py-4 px-4 min-h-[300px]    cursor-pointer"
          onClick={() =>
            document.getElementById(`my_modal_${index}`).showModal()
          }>
          <h1 className="text-3xl  font-semibold"> {title}</h1>

          <div className="  rounded-[20px] py-5 px-6 min-h-[280px] flex justify-evenly items-center flex-col">
            <img
              src={img}
              alt="About Icon"
              className="h-[16rem] object-cover   overflow-hidden  rounded-xl "
            />

            <p className="text-text-300 text-center mt-4 font-semibold">
              <h9>Explore</h9>
            </p>
          </div>
        </div>{" "}
      </Tilt>
      <dialog
        id={`my_modal_${index}`}
        className=" top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] drop-shadow-md backdrop-blur-[10px] bg-background-800/70 rounded-[20px] py-8 px-4 sm:w-1/2 w-full">
        <div className="modal-box">
          <div className="flex gap-4 flex-wrap">
            <div>
              <h3 className="text-3xl text-text-200 font-semibold">{title}</h3>
              <p className="py-4 text-[14px] sm:text-lg text-text-100 font-semibold">
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

        <p className="mt-2 text-justify ">
          At ChES, we are proud to curate a diverse calendar of events that
          ignite the enthusiasm for chemical engineering and nurture an
          innovative spirit. Annually, our society organizes a variety of
          engaging activities, with flagship events such as SIPHON, ALCHEMY, and
          EUREKA taking center stage. The remaining year is filled with
          workshops, industrial visits, Chem-E-Car Competitions, and numerous
          K-12 activities.
        </p>
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-6">
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
