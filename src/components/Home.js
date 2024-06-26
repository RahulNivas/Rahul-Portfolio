import React from "react";
import HeroImage from "../assets/HeroImg.png";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";
// import Navbar from "./Navbar";

const Home = () => {
  return (
    <>
    {/* <Navbar/> */}
    
    <div
      name="home"
      className=" h-screen w-full bg-gradient-to-b from-black via-black to-gray-800 "
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-screen px-4  md:flex-row ">
        <div className="flex flex-col justify-center h-full lg:ml-10 mt-20 sm:mt-0  ">
          <h2 className="text-2xl sm:text-6xl  font-bold text-white">
            I'm a Full Stack Developer
          </h2>
          <p className="text-gray-500 py-4 max-w-md">
            I have 8 years of experience building and desgining software.
            Currently, I love to work on web application using technologies like
            React, Tailwind, Next JS and GraphQL.
          </p>

          <div>
            <Link to="portfolio" smooth duration={500} className="group text-white w-fit px-2 py-2 md:px-6 md:py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
            >
              Portfolio
              <span className="group-hover:rotate-90 duration-300">
                <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
              </span>
            </Link >
          </div>
        </div>

        <div className="">
          <img
            src={HeroImage}
            alt="my profile"
            className="rounded-2xl h-[250px] md:h-[330px] mt-4 mb-16 md:mb-0 md:mt-[-40px]  w-full lg:pr-2"
          />
        </div>
      </div>
    </div>

    </> 
     );
};

export default Home;
