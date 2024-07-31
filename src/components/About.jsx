import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className="text-xl mt-20">
         I'm Neema Rao,from Mangaluru,Karnataka,India. Currently in my third year 
         of Computer Science and Engineering at St Joseph Engineering College.
         I am driven by a deep passion for technology and a strong desire to share
         knowledge in my journey as an aspiring engineer.

        </p>

        <br />

        <p className="text-xl">
        I have a soft spot in my heart for cats, and I can never get enough of their 
        cute antics to make me smile.
        </p>
      </div>
    </div>
  );
};

export default About;