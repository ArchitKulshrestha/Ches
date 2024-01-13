/* eslint-disable react-refresh/only-export-components */
import { SectionWrapper } from "../hoc";
import { ChesLogo } from "../assets";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaYoutube,
  FaMapMarkerAlt,
} from "react-icons/fa";

const year = new Date().getFullYear();

function Footer() {
  return (
    <footer className=" ">
      <div className="flex flex-col sm:flex-row  justify-around gap-20">
        <div className="flex flex-col">
          <h1 className="text-2xl font-bold ">Email Us</h1>
          <a
            href="mailto:ches@svnit.ac.in"
            aria-label="mail"
            className="text-text-300 hover:text-accent-400 mt-2">
            ches@svnit.ac.in
          </a>
        </div>
        <div className="flex flex-col ">
          <img
            src={ChesLogo}
            alt="CHES-Logo"
            border="0"
            className=" h-20 w-36"
          />
          <p className="mt-4">
            Sardar Vallabhbhai National Institute of Technology, Surat
          </p>
        </div>
      </div>
      <div className="w-full text-center  mt-4">
        <div className="flex gap-8 p-8 justify-center w-full">
          <a
            href="https://m.facebook.com/ches.svnit.aiche"
            target="_blank"
            aria-label="link"
            rel="noreferrer">
            <FaFacebook className="text-2xl text-text-200 hover:text-accent-400" />
          </a>
          <a
            href="https://www.instagram.com/ches_svnit_aiche/"
            target="_blank"
            aria-label="link"
            rel="noreferrer">
            <FaInstagram className="text-2xl text-text-200 hover:text-accent-400" />
          </a>
          <a
            href="https://www.linkedin.com/company/chemical-engineering-society-svnit/mycompany/"
            target="_blank"
            aria-label="link"
            rel="noreferrer">
            <FaLinkedin className="text-2xl text-text-200 hover:text-accent-400" />
          </a>
          <a
            href="https://www.youtube.com/@aichechessvnit7048"
            target="_blank"
            aria-label="link"
            rel="noreferrer">
            <FaYoutube className="text-2xl text-text-200 hover:text-accent-400" />
          </a>
          <a
            href="https://www.google.com/maps/place/Sardar+Vallabhbhai+National+Institute+of+Technology,+SVNIT./@21.1663287,72.7642292,15z/data=!4m10!1m2!2m1!1ssvnit+location!3m6!1s0x3be04dec8b56fdf3:0x423b99085d26d1f9!8m2!3d21.1663287!4d72.7832836!15sCg5zdm5pdCBsb2NhdGlvbpIBCnVuaXZlcnNpdHngAQA!16zL20vMDZscjIz?entry=ttu"
            target="_blank"
            rel="noreferrer"
            aria-label="link">
            <FaMapMarkerAlt className="text-2xl text-text-200 hover:text-accent-400" />
          </a>
        </div>
        <hr className="border-accent-600" />

        <p className="text-text-200 text-sm mt-4">
          © {year} AIChE ChES SVNIT. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default SectionWrapper(Footer, "Footer");
