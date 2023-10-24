import React from "react";
import Ecommerce from "../assets/portfolios/Ecommerce.jpg";
import Memorify from "../assets/portfolios/Memorify.jpg";
import crowdfunding from "../assets/portfolios/crowdfunding.png";

const portfolio = () => {
  const list = [
    {
      id: 1,
      src: Memorify,
      Demolink:"https://github.com/Vis01/Memorify",
      codelink:"https://github.com/Vis01/Memorify",
    },
    {
      id: 2,
      src: Ecommerce,
      Demolink:"https://github.com/Vis01",
      codelink:"https://github.com/Vis01",
    },
    {
      id: 3,
      src: crowdfunding,
      Demolink:"https://github.com/Vis01/Crowdfunding-using-blockchain",
      codelink:"https://github.com/Vis01/Crowdfunding-using-blockchain",
    },
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
          {list.map(({ id, src,Demolink,codelink }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt="  "
                className="rounded-md duration-200
                  hover:scale-105  "
              />
              <div className="flex items-center justify-center ">
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105 ">
                  {" "}
                  Demo{" "}
                  
                </button>
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105 ">
                  {" "}
                  Code{" "}
                  
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default portfolio;