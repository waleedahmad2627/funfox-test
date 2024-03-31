import React from "react";

import Students from "../assets/Students";
import Cloud1 from "./Cloud1";
import Cloud2 from "./Cloud2";
import Box from "./Box";

const FirstPage = () => {
  return (
    <div className="absolute inset-0 mt-20 bg-[#FFFFFF] flex justify-center ">
      <div className="w-[1065px] p-6 h-[694px] bg-[#F7F9FE] rounded-2xl flex flex-col gap-1">
        <div className="flex justify-center items-center">
          <h1
            style={{
              boxShadow: "0px 0px 11.047767639160156px 0px rgba(0, 0, 0, 0.25)",
              fontWeight: 400,
            }}
            className="bg-[#FE6784] text-[32px] leading-[35px] rounded-3xl px-4 py-2 border-[#FFAEBE] text-white border-[3.31px] border-dashed"
          >
            Elements of Story Writing
          </h1>
        </div>
        <div>
          <p className="text-[#1E242F] text-[24px] leading-[29px] font-[400] tracking-[-6%] ">
            Welcome to term 2 of Writers Club. Are you excited for this amazing
            journey? Over the next week, we will be practicing the different
            elements of story writing. Our aim is to make stories more
            interesting and exciting.
          </p>
        </div>
        <div
          style={{ boxShadow: "0px 0px 10px 0px rgba(0, 0, 0, 0.25)" }}
          className="bg-[#25A3A1] border-[3px] border-dashed mt-3 border-[#A4FDFB] p-2 relative"
        >
          <p className="text-white text-[24px] leading-[29px] font-[400] w-3/4 tracking-[-6%] ">
            There are <strong>five</strong> elements which make the foundation for story writing. An
            element is an essential part of something and every fiction story
            has the same key elements:
          </p>
          <div className="absolute top-0 right-0">
            <Students />
          </div>
        </div>
        <div className="flex flex-row justify-between mt-3 items-center">
          <Cloud1 text={"SETTING"} />
          <Cloud2 text={"CHARACTERS"} />
          <Cloud1 text={"PLOT"} />
          <Cloud1 text={"PROBLEM OR CONFLICT"} />
          <Cloud2 text={"RESOLUTION"} />
        </div>
        <div className="mt-2">
          <p className="text-[#1E242F] font-[400] text-[24px] leading-[29px]">
            You must be familiar with some of these. If not, do not worry! we
            will cover all these elements as we go along.
          </p>
        </div>
        <div className="mt-6">
          <Box
            text={
              "For today’s lesson, we will try to understand and practice writing the setting for our stories. The setting is an important element of every fiction story"
            }
          />
        </div>
      </div>
    </div>
  );
};

export default FirstPage;
