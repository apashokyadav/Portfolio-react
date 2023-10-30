import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b
    from-gray-800 to-black text-white"
    >
      <div
        className="max-w-screen-lg p-4 mx-auto flex flex-col
        justify-center w-full h-full "
      >
        <div className="pb-8">
          <p
            className="text-4xl font-bold inline border-b-4
                border-gray-500
                "
          >
            About
        
          </p>

        </div>

        <p className="text-xl mt-20">
          My name is Vishnu Jangid, and I am a passionate full-stack developer I
          have a solid foundation in Frontend-framworks,javascript,React.js and I am
          constantly expanding my knowledge of back-end.
        </p>

        <br />

        <p className="text-xl ">
          I am deeply fascinated by user-centric design and strive to create
          intuitive and visually appealing interfaces. Moreover, I am a team
          player and love collaborating with others to solve problems and
          achieve shared goals.
        </p>
      </div>
    </div>
  );
};

export default About;
