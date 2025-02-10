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
        I am a Full-Stack Developer specializing in Java, Spring Boot, and React.js, passionate about building scalable, high-performance applications. 
        With expertise in secure authentication, RESTful APIs, and database management, I craft seamless, efficient, and user-centric solutions. My experience spans frontend, backend, and system optimization, ensuring clean architecture and maintainable code.

        </p>

        <br />

        <p className="text-xl ">
        
        I’ve developed multilingual platforms, video streaming apps, and performance-driven web solutions that enhance user engagement.
        Always eager to innovate, collaborate, and solve complex problems—let’s build something amazing together! 
        </p>
      </div>
    </div>
  );
};

export default About;
