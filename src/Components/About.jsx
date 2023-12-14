/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/jsx-key */
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { motion } from "framer-motion";
import { SectionWrapper } from "../hoc";

import Tilt from "react-parallax-tilt";
import { styles } from "../styles";

import { fadeIn, textVariant } from "../utils/motion";
function About() {
  const slides = [
    {
      name: "AIChE",
      content:
        "AIChE is the world's leading organization for chemical engineering professionals, with more than 60,000 members from more than 110 countries. AIChE has the breadth of resources and expertise you need whether you are in core process industries or emerging areas, such as translational medicine.",
    },
    {
      name: "ChES",
      content:
        "The Chemical Engineering Society was instituted on 16th January 2014. Affiliated to the American Institute of Chemical Engineers (AIChE), ChES aims to spread knowledge and experience to the future chemical engineers about chemical engineering education and its applications. The faction provides a platform for the chemical engineering community of SVNIT where they can discuss, plan, execute and debug their problems among their peers.",
    },
    {
      name: "Mission",
      content:
        "● Promote excellence in chemical engineering education and practise. ● Advance the development and exchange of relevant knowledge and ideas. ● Facilitate public understanding of technical issues. ● Integrate the upliftment of society by providing awareness about different technical situations. ● Anticipate, recognise and evaluate hazardous conditions and practises affecting people, property and the environment, develop and evaluate appropriate strategies for the same.",
    },
    {
      name: "Vision",
      content:
        "To contribute in building an integrated and uplifted society by providing awareness about different technical scenarios. Events and seminars conducted by ChES focus on both building the public understanding of technical issues and the individual curiosity of the enthusiast.",
    },
  ];
  const settings = {
    dots: true,
    infinite: true,
    speed: 750,
    slidesoShow: 1,
    slidesToScroll: 1,
  };

  return (
    <motion.div variants={fadeIn("right", "tween", 0.2, 1)} className="w-full">
      <div className="relative w-full">
        <h1 className={styles.sectionHeadText}>About.</h1>
      </div>

      <div className="w-[90%] sm:w-[78%] ml-[6px]  mt-8">
        <Tilt
          tiltMaxAngleX={1}
          scale={1.01}
          tiltMaxAngleY={1}
          transitionSpeed={1550}>
          <div>
            <Slider {...settings}>
              {slides.map((s) => (
                <div className="bg-background-900/70 rounded-3xl h-[30rem] md:h-[24rem]  ">
                  <motion.p
                    variants={textVariant(0.75)}
                    className={`text-text-100 font-semibold md:text-[50px] sm:text-[45px]  text-[25px] px-4 sm:px-8 pt-8`}>
                    {s.name}
                  </motion.p>

                  <motion.p
                    variants={textVariant(1)}
                    className="sm:text-[18px] text-[14px] text-text-100 tracking-wider  px-4 sm:px-8 pt-5 ">
                    {s.content}
                  </motion.p>
                </div>
              ))}
            </Slider>
          </div>
        </Tilt>
      </div>
    </motion.div>
  );
}

export default SectionWrapper(About, "About");
