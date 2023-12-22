/* eslint-disable react/jsx-key */
// import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import { motion } from "framer-motion";
// import Tilt from "react-parallax-tilt";
// import { fadeIn, textVariant } from "../utils/motion";

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
  // const settings = {
  //   dots: true,
  //   infinite: true,
  //   speed: 500,
  //   slidesToShow: 1,
  //   slidesToScroll: 1,
  // };

  return (
    <div>
      <h1>About</h1>
    </div>
  );
}

export default About;
