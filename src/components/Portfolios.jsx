import React from "react";
import Ecommerce from "../assets/portfolios/Ecommerce.jpg";
import Memorify from "../assets/portfolios/Memorify.jpg";
import crowdfunding from "../assets/portfolios/crowdfunding.png";
import FoodVilla from "../assets/portfolios/FoodVilla.png";
import myyoutube from "../assets/portfolios/my-youtube.png"

const portfolio = () => {
  const list = [
    {
      id: 1,
      name:"My-YouTube",
      src: myyoutube,
      Demolink: "https://main--vishnu-my-youtube.netlify.app/ ",
      codelink: "https://github.com/apashokyadav/my-youtube",
    },
    {
      id: 2,
      name:"FoodVillaS",
      src: FoodVilla,
      Demolink: "https://main--vishnu-foodvila.netlify.app/",
      codelink: "https://github.com/Vis01/FoodVilla ",
    },
    {
      id: 3,
      name:"Memorify",
      src: Memorify,
      Demolink: "https://jazzy-frangipane-b317d5.netlify.app",
      codelink: "https://github.com/Vis01/Memorify",
    },
    {
      id: 4,
      name:"Ecommerce",
      src: Ecommerce,
      Demolink: "https://github.com/Vis01",
      codelink: "https://github.com/Vis01",
    },
    {
      id: 5,
      name:"crowdfunding",
      src: crowdfunding,
      Demolink: "https://github.com/Vis01/Crowdfunding-using-blockchain",
      codelink: "https://github.com/Vis01/Crowdfunding-using-blockchain",
    } 
  ];
  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black
    to-gray-800 w-full text-white md:h-screen "
    >
      <div
        className="max-w-screen-lg p-4 mx-auto flex flex-col 
        justify-center w-full h-full "
      >
        <div className="pb-8 ">
          <p
            className="text-4xl font-bold inline border-b-4
          border-gray-500"
          >
            Portfolio
          </p>

          <p className="py-6 ">check out some of my work right here</p>
        </div>
        <div
          className="grid sm:grid-cols-2 md:grid-cols-3 gap-8
              px-12 sm:px-0  "
         >
          {list.map(({ id,name, src, Demolink, codelink }) => (
            <div key={id} className="shadow-md  shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt="  "
                className="rounded-md h-4/6 w-full duration-200
                  hover:scale-105  "
              />
              <div className="flex items-center justify-center h-1/6 shadow-gray-600 rounded-lg">
                  <button className="w-1/2 px-3 py-.5 m-2 duration-200 hover:scale-105 ">
                    {name}
                  </button>
              </div>
              <div className="flex items-center justify-center  ">
                <a href={Demolink} className="rounded-xl duration-200  hover:bg-gray-800 hover:scale-125" >
                  <button className="w-1/2 px-8 py-.5 m-2    ">
                    Demo
                  </button>
                </a>

                <a href={codelink} className="rounded-xl duration-200  hover:bg-gray-800 hover:scale-125" >
                  <button className="w-1/2 px-8 py-.5 m-2 duration-200 hover:scale-105 ">
                    Code
                  </button>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default portfolio;
