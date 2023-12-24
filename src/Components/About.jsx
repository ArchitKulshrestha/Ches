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

function About() {
  const slides = [
    {
      name: `SVNIT`,
      img: `/src/assets/svnit-logo.png`,
      content: `Sardar Vallabhbhai National Institute of Technology (SVNIT) is a public technical university located in Surat, Gujarat, India. It was established in 1961 as one of the Regional Engineering Colleges (RECs) and was later declared a "Deemed University" under the University Grants Commission Act, of 1956. In 2007, it was granted the status of an "Institute of National Importance." SVNIT offers undergraduate courses in Civil, Mechanical, Electrical, Electronics, Computer, Production, and Chemical Engineering undergraduate programs. It also provides postgraduate programs, M.Sc. programs, and a doctoral program in various branches of engineering.`,
    },
    {
      name: `AIChE`,
      img: `/src/assets/aiche_logo.png`,
      content: `AIChE (American Institute of Chemical Engineers) is a professional organization dedicated to advancing the field of chemical engineering. It provides resources, networking opportunities, and professional development for its members, imbibing innovation and knowledge exchange.`,
    },
    {
      name: `ChES`,
      img: `/src/assets/ches-logo.png`,
      content: `The Chemical Engineering Society (ChES) at SVNIT, founded on January 16, 2014, and affiliated with AIChE, promotes knowledge sharing and collaboration among future chemical engineers. It organizes events, seminars, and workshops to foster curiosity and understanding in Chemical Engineering.`,
    },
    {
      name: `Mission`,
      img: `/src/assets/ches-logo.png`,
      content: `ChES is dedicated to simplifying technical complexities for public understanding, promoting excellence in chemical engineering, and encouraging the exchange of ideas. We actively contribute to societal progress by sharing knowledge on diverse technical issues, empowering individuals to make informed decisions. Through a comprehensive approach, ChES seeks to bridge the gap between the technical realm and the broader community, playing a pivotal role in advancing both awareness and solutions in the field of chemical engineering.`,
    },
    {
      name: `Vision`,
      img: `/src/assets/ches-logo.png`,
      content: `ChES envisions becoming a catalyst for excellence in chemical engineering at SVNIT by promoting a united community. Our vision is to dedicate ourselves to advancing knowledge, sharing experiences, and collectively addressing technical challenges. We aim to promote a culture of open dialogue, effective problem-solving, and active community engagement. Crucially, we strive to ensure that the impact of chemical engineering extends beyond academia, addressing real-world challenges and contributing positively to global progress.`,
    },
  ];
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <>
      <motion.div variants={fadeIn("left", "tween", 0.2, 0.75)}>
        <h2 className={styles.sectionHeadText}>About.</h2>
      </motion.div>

      <div className="w-[80%] mt-8 m-auto about_width:w-[88%] about_width_mobile:w-[85%] about_width_logo_mobile_small:w-[80%] ">
        <Tilt
          tiltMaxAngleX={1}
          scale={1.01}
          tiltMaxAngleY={1}
          transitionSpeed={1950}>
          <div className="hover:shadow-xl hover:shadow-text-500/60  backdrop-blur-[10px] rounded-3xl">
            <Slider {...settings}>
              {slides.map((s) => (
                <motion.div
                  className=" bg-background-900/70 rounded-3xl  h-70 about_width:overflow-y-scroll scroll-my-5 about_width_mobile:overflow-y-scroll scroll-my-5 h-96"
                  variants={textVariant(0.2)}>
                  <div
                    className="flex flex-row justify-between h-2/6 about_width_logo:flex-col items-center about_width_logo:h-2/5 about_width_logo_mobile:flex-col items-center
                  about_width_logo_mobile_small:flex-col items-center">
                    <span
                      className="text-text-100 font-bold sm:text-[60px] text-[55px] font-OpenSans px-5 pt-4 pb-2 about_width_font: text-[39px] about_width_logo:pt-2 about_width_logo:pb-1 about_width_logo:text-[65px] about_width_logo_mobile:pt-2
                    about_width_logo_mobile:pb-1 about_width_logo_mobile_small:pt-2 about_width_logo_mobile_small:pb-1 about_width_logo_mobile_small:text-[39px]">
                      {s.name}
                    </span>

                    <img
                      src={s.img}
                      alt="logo"
                      className="pl-5 pr-12 pt-4 pb-2 h-[75%] my-auto about_width_logo:h-[45%] about_width_logo:pt-1 about_width_logo:my-0 about_width_logo:pb-4 about_width_logo:px-0 about_width_logo:mx-auto about_width_logo_mobile:pt-1 about_width_logo_mobile:my-0 about_width_logo_mobile:pb-4 about_width_logo_mobile:px-0 about_width_logo_mobile:mx-auto about_width_logo_mobile:h-[55%] about_width_logo_mobile_small:pt-1 about_width_logo_mobile_small:my-0 about_width_logo_mobile_small:pb-4 about_width_logo_mobile_small:px-0 about_width_logo_mobile_small:mx-auto about_width_logo_mobile_small:h-[45%]"
                    />
                  </div>
                  <p className="sm:text-[18px] text-[14px] text-text-100 tracking-wider px-5 pb-5 pt-3 about_width_logo:pt-5 about_width_logo_mobile:pt-8">
                    {s.content}
                  </p>
                </motion.div>
              ))}
            </Slider>
          </div>
        </Tilt>
      </div>
    </>
  );
}
export default SectionWrapper(About, "About");
