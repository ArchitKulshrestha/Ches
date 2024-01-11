/* eslint-disable react/prop-types */
/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/jsx-key */
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";
import { fadeIn, textVariant } from "../utils/motion";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { slides } from "../Constants";

const AboutCard = ({ name, content, img }) => {
  return (
    <div className="min-h-[50vh] px-2 sm:px-6  rounded-2xl py-8 overflow-hidden bg-background-900/70 ">
      <div className="flex sm:flex-row flex-col w-full justify-between gap-y-4">
        <div>
          <h3 className="sm:text-5xl text-3xl font-bold">{name}</h3>
        </div>
        <div>
          <img
            src={img}
            alt="About Icon"
            className=" h-[4rem] sm:w-[14rem] aspect-4/3  object-contain "
          />
        </div>
      </div>
      <div>
        <p className="mt-4 text-base sm:text-xl text-text-100  max-w-3xl ">
          {content}
        </p>
      </div>
    </div>
  );
};

function About() {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1300,
  };

  return (
    <>
      <motion.div variants={fadeIn("left", "tween", 0.2, 0.5)}>
        <h2 className={styles.sectionHeadText}>About.</h2>
      </motion.div>
      <Tilt
        tiltMaxAngleX={1}
        scale={1.01}
        tiltMaxAngleY={1}
        transitionSpeed={1950}>
        <div className="sm:w-[85%] w-full mx-auto mt-8">
          <Slider className="overflow-hidden" {...settings}>
            {slides.map((slide) => (
              <AboutCard {...slide} />
            ))}
          </Slider>
        </div>
      </Tilt>
    </>
  );
}
export default SectionWrapper(About, "About");
