const year = new Date().getFullYear();
import { SVNITLOGO } from "../assets";
import { Developers } from "../Constants";

const FooterE = () => {
  return (
    <footer className="flex flex-col  items-center justify-center  mt-[1rem] text-center text-text-200">
      <img
        src={SVNITLOGO}
        alt="logo"
        className="h-[5rem] w-[5rem] mt-[1rem] mb-[1.5rem]"></img>
      <h2>AIChE ChES</h2>
      <h2>Sardar Vallabhbhai National Institute of Technology, Surat</h2>
      <hr className=" border-accent-600 my-4 w-[60rem]" />

      <p className="text-text-200 text-[14px]  mb-2">
        © {year} AIChE ChES SVNIT. All rights reserved.
      </p>
      <h2 className="text-text-200/80 text-[12px] mt-2 mb-4">
        Designed and Developed by :<br />
        {Developers.map((dev, index) => (
          <span key={index}>
            <a
              href={dev.Linkedin}
              target="_blank"
              rel="noreferrer"
              className="  hover:text-accent-300 cursor-pointer text-[14px]">
              {dev.name}
            </a>
            {index !== Developers.length - 1 && ",  "}
          </span>
        ))}
      </h2>
    </footer>
  );
};

export default FooterE;
