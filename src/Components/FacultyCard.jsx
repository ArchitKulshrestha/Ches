import Tilt from "react-parallax-tilt";

import { Sundar, Jignasa, Rathore, dhyey } from "../assets";

const FacultyCard = () => {
  return (
    <>
      <div className="mt-10 grid grid-cols-2 md:grid-cols-2 lg:grid-cols-5  gap-4">
        <Tilt
          className="w-[98%] sm:w-[200px]"
          tiltMaxAngleX={10}
          scale={1.02}
          tiltMaxAngleY={10}
          transitionSpeed={1950}>
          <div className="w-full  p-[1px] rounded-[10px]  ">
            <div className=" hover:shadow-lg hover:shadow-text-500/60  backdrop-blur-[10px] bg-background-900/70 rounded-[20px] py-6 px-4 min-h-[250px] flex justify-evenly items-center flex-col">
              <img
                src={dhyey}
                alt="About Icon"
                className="w-24 h-30 rounded-xl object-contain overflow-hidden"
              />
              <h1 className="text-text-200 text-xl font-semibold text-center">
                Dhyey Bhagat
              </h1>
              <h1 className="text-text-100 text-base    text-center">
                President
              </h1>
            </div>
          </div>
        </Tilt>
        <Tilt
          className="w-[98%] sm:w-[200px]"
          tiltMaxAngleX={10}
          scale={1.02}
          tiltMaxAngleY={10}
          transitionSpeed={1950}>
          <div className="w-full  p-[1px] rounded-[10px]  ">
            <div className=" hover:shadow-lg hover:shadow-text-500/60  backdrop-blur-[10px] bg-background-900/70 rounded-[20px] py-6 px-4 min-h-[250px] flex justify-evenly items-center flex-col">
              <img
                src={dhyey}
                alt="About Icon"
                className="w-24 h-30 rounded-xl object-contain overflow-hidden"
              />
              <h1 className="text-text-200 text-xl font-semibold text-center">
                Dhyey Bhagat
              </h1>
              <h1 className="text-text-100 text-base    text-center">
                President
              </h1>
            </div>
          </div>
        </Tilt>
      </div>
    </>
  );
};

export default FacultyCard;
