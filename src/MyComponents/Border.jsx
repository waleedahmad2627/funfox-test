import React from "react";
import funfox from "../assets/funfox.svg";
import week1 from "../assets/week1.svg";
import bag from "../assets/bag.svg";
import pencil from "../assets/pencil.svg";
import openbook from "../assets/openbook.svg";
import closebook from "../assets/closebook.svg";
import cap from "../assets/cap.svg";
import scale from "../assets/scale.svg";
import leftarrow from "../assets/leftarrow.svg";
import rightarrow from "../assets/rightarrow.svg";
import pagenumber from "../assets/pagenumber.svg";
import speaking from "../assets/speaking.svg";
import info from "../assets/info.svg";

import { useState } from "react";
import { useNavigate } from "react-router-dom";


const Border = ({ children }) => {

    const [page, setPage] = useState(1);

    const navigate = useNavigate();
    const handleLeftClick = () => {
        if (page > 1) {
            setPage(page - 1);
        }
        navigate  (`/`);
    }

    const handleRightClick = () => {
        if (page < 2) {
            setPage(page + 1);
        }
        navigate  (`/second`);
    }

  return (
    <div className="relative w-screen h-[930px]" style={{ fontFamily: "'Short Stack', sans-serif" }}>
      <div className="absolute inset-0 z-0">

        <div className="w-screen h-[930px] bg-[#F8D1E0]">
          <div className="flex">
            <img src={funfox} alt="funfox" className="" />
            <div
              style={{ position: "relative", width: "150px", height: "100px" }}
            >
              <img
                src={week1}
                alt="Logo"
                className="w-full h-full"
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                 
                }}
              />
              <div
                style={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  color: "white",
                  fontSize: "16px",
                }}
              >
                week 1
              </div>
            </div>
          </div>

          <div className="ml-8">
            <img src={pencil} alt="pencil" className="" />
          </div>
          <div
            className="bg-cover bg-center w-24 h-24 ml-4 rounded-full flex justify-center items-center absolute top-1/2 left-0 transform -translate-y-1/2"
            style={{ backgroundImage: `url(${bag})` }}
          ></div>
          <div
            className="ml-4 mb-16 absolute bottom-0 left-0
                 w-16 h-16 lg:w-24 lg:h-24
                 bg-no-repeat bg-center bg-cover
                 flex justify-center items-center"
            style={{ backgroundImage: `url(${openbook})` }}
          ></div>

          <div
            className="bg-cover bg-center w-24 h-24 transform -translate-x-1/2 translate-y-1/2 rounded-full flex justify-center items-center absolute top-1/2 right-0 "
            style={{ backgroundImage: `url(${closebook})` }}
          ></div>

          <div
            className="transform -translate-x-1/2 translate-y-1/2 mb-16 absolute bottom-0 right-0
                 w-16 h-16 lg:w-24 lg:h-24
                 bg-no-repeat bg-center bg-cover
                 flex justify-center items-center"
            style={{ backgroundImage: `url(${cap})` }}
          ></div>

          <div
            className="absolute top-0 right-0 transform -translate-x-1/2 translate-y-1/2
                 w-16 h-16 lg:w-24 lg:h-24
                 bg-no-repeat bg-center bg-cover
                 flex justify-center items-center
                 "
            style={{ backgroundImage: `url(${scale})` }}
          ></div>

          {/* <div className="absolute bottom-0">
            <img className="ml-[165px]" src={speaking} alt="" />
          </div> */}

          <div className="absolute bottom-0 left-0 right-0 flex justify-between p-4">
      <img src={speaking} className="w-12 h-12 mt-6 ml-32" />
      <div className="flex items-center mt-6">
        <img src={leftarrow} className="w-12 h-12" onClick={handleLeftClick} />
        <div className="mx-4">
            <div>
                <img src={pagenumber} className="w-12 h-12 "/>
                <div
                style={{
                  position: "absolute",
                  top: "60%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  color: "white",
                  fontSize: "14px",
                }}
              >
            {page}
              </div>

            </div>
        </div>
        <img src={rightarrow} className="w-12 h-12"  onClick={handleRightClick} />
      </div>
      <img src={info} className="w-12 h-12 mt-6 mr-32" />
    </div>

        </div>
      </div>

      <div className="relative z-10">{children}</div>
    </div>
  );
};

export default Border;
