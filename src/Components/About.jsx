/* eslint-disable react/prop-types */
/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/jsx-key */
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Tilt from "react-parallax-tilt";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { slides } from "../Constants";

const AboutCard = ({ name, content, img }) => {
  return (
    <div className="min-h-[50vh] px-4 sm:px-6  rounded-2xl py-12 overflow-hidden bg-background-900/70 ">
      <div className="flex sm:flex-row flex-col w-full justify-between gap-y-4 items-center">
        <div>
          <h3 className="sm:text-5xl text-3xl font-bold">{name}</h3>
        </div>
        <div>
          <img
            src={img}
            alt="About Icon"
            className=" sm:h-20 h-16 object-contain"
          />
        </div>
      </div>
      <div>
        <p className="mt-6 text-left text-base sm:text-xl text-text-100  max-w-3xl">
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
    autoplaySpeed: 1600,
  };

  return (
    <section className=" py-10">
      <div>
        <h1 className={styles.sectionHeadText}>About.</h1>
      </div>
      <Tilt
        tiltMaxAngleX={1}
        scale={1.01}
        tiltMaxAngleY={1}
        transitionSpeed={1950}>
        <div className="sm:w-[85%] w-full mx-auto mt-12">
          <Slider className="overflow-hidden" {...settings}>
            {slides.map((slide) => (
              <AboutCard {...slide} />
            ))}
          </Slider>
        </div>
      </Tilt>
    </section>
  );
}
export default SectionWrapper(About, "About");
