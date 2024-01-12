/* eslint-disable react/prop-types */
/* eslint-disable react-refresh/only-export-components */

import { styles } from "../styles";
import Tilt from "react-parallax-tilt";
//import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";
//import { ChesLogo } from "../assets";
import { events } from "../Constants";

const EventCard = ({ content, title, img, inside_img, index, link }) => {
  return (
    <>
      <Tilt
        tiltMaxAngleX={5}
        tiltMaxAngleY={5}
        transitionSpeed={2000}
        scale={1.01}>
        <div
          onClick={() =>
            document.getElementById(`my_modal_${index}`).showModal()
          }>
          <div className="flex flex-col items-start justify-center bg-background-900 rounded-xl cursor-pointer py-4 px-2 sm:px-6 hover:shadow-lg hover:shadow-text-500/60">
            <h1 className={"text-2xl sm:text-3xl font-semibold mb-4"}>
              {title}
            </h1>
            <img
              className="sm:h-40 w-full rounded-xl  "
              src={inside_img}
              alt="titleImage"
            />
          </div>
        </div>
      </Tilt>
      <dialog
        id={`my_modal_${index}`}
        className="px-6 py-4 rounded-2xl top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] drop-shadow-md backdrop-blur-[10px]  bg-background-800/80 w-full sm:w-[75%]  ">
        <div className="modal-box">
          <div className="flex md:flex-row flex-col gap-x-8 gap-y-2 justify-between">
            <img
              className="md:h-[25rem] rounded-xl h-[18rem]"
              alt="Event Image"
              src={img}
            />
            <div>
              <h3 className="text-base md:text-xl text-text-200">{content}</h3>
            </div>
          </div>
          <div className="modal-action mt-4">
            <form method="dialog" className="flex flex-wrap">
              {/* if there is a button in form, it will close the modal */}
              <button className="bg-transparent py-2 mr-3 mt-3 px-5 rounded-xl outline-none  text-text-100 font-bold shadow-md hover:bg-secondary-700 border-2 border-secondary-500">
                Close
              </button>
              <a
                href={link}
                target="_blank"
                rel="noreferrer"
                className="bg-secondary-700 py-2 mt-3 px-5 rounded-xl outline-none  text-text-100 font-bold shadow-md hover:bg-secondary-800 border-2 border-secondary-500">
                Know More
              </a>
            </form>
          </div>
        </div>
      </dialog>
    </>
  );
};

function Event() {
  return (
    <section>
      <div>
        <h1 className={styles.sectionHeadText}>Events.</h1>

        <p className="mt-2 text-justify ">
          At ChES, we are proud to curate a diverse calendar of events that
          ignite the enthusiasm for chemical engineering and nurture an
          innovative spirit. Annually, our society organizes a variety of
          engaging activities, with flagship events such as SIPHON, ALCHEMY, and
          EUREKA taking center stage. The remaining year is filled with
          workshops, industrial visits, Chem-E-Car Competitions, and numerous
          K-12 activities.
        </p>
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {/* Open the modal using document.getElementById('ID').showModal() method */}
          {events.map((event, index) => (
            <EventCard key={index} index={index} {...event} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default SectionWrapper(Event, "Events");
