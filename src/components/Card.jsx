import React from "react";
import { ArrowRight } from "../helper/icons";

function Card({ icon, title, desc, haveArrowBtn, index }) {
  console.log(index);
  return (
    <div
      className={`flex flex-col w-full lg:w-[384px] md:order-${
        index < 3 ? "none" : index
      }`}
    >
      <div className="w-[48px] h-[48px] p-[8px] rounded-[30px] bg-[#437EF7] mb-[16px] md:mb-[20px]">
        <img className="h-full w-full" src={icon} alt="icon" />
      </div>
      <p className="font-semibold text-[20px] md:text-[22px] leading-[28px] md:leading-[30px] tracking-tighter-[-2%] md:tracking-tighter-[-1%] mb-[8px] md:mb-[12px]">
        {title}
      </p>
      <p className="font-normal text-[16px] leading-[24px] tracking-tighter-[-0.1px] text-[#5F6D7E]">
        {desc}
      </p>
      {haveArrowBtn && (
        <p className=" mt-[16px] font-semibold text-[15px] leading-[22px] text-[#437EF7]">
          <span className="mr-[6px]">Learn more</span>
          <ArrowRight sx={{ fontSize: "20px" }} />
        </p>
      )}
    </div>
  );
}

export default Card;
