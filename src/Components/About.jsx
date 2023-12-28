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

function About() {
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
                  className=" bg-background-900/70 rounded-3xl  h-70 about_width:overflow-y-scroll about_width:scroll-my-5 about_width_mobile:overflow-y-scroll scroll-my-5 h-96"
                  variants={textVariant(0.2)}>
                  <div
                    className="flex flex-row justify-between h-2/6 about_width_logo:flex-col items-center about_width_logo:h-2/5 about_width_logo_mobile:flex-col about_width_logo_mobile:items-center
                  about_width_logo_mobile_small:flex-col about_width_logo_mobile_small:items-center">
                    <span
                      className="text-text-100 font-bold sm:text-[60px] text-[55px] font-OpenSans px-5 pt-4 pb-2 about_width_font:text-[39px] about_width_logo:pt-2 about_width_logo:pb-1 about_width_logo:text-[65px] about_width_logo_mobile:pt-2
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
