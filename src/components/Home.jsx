import React from "react";
import Neema from "../assets/neema.png";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div
      name="home"
      className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full">
          <h1 className="text-gray-500 py-4 max-w-md">
            Hello,
          </h1>
          <h2 className="text-4xl sm:text-7xl font-bold text-white">
            I'm Neema Rao
           
          </h2>
          <p className="text-blue-500 py-4 max-w-md">
          Aspiring Software Developer....
           
          </p>

          <div>
            <Link
              to="internship"
              smooth
              duration={500}
              className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
            >
              INTERNSHIP
              <span className="group-hover:rotate-90 duration-300">
                <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
              </span>
            </Link>
          </div>
        </div>
      
        <div>
          <img
            src={Neema}
            alt="my profile"
            className="rounded-4xl px-7 w-80 h-63 md:w-50 md:h-50"
            
          />
        </div>
      </div>
    </div>
  );
};

export default Home;