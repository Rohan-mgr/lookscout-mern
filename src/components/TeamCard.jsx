import React from "react";
import {
  FacebookIcon,
  LinkedInIcon,
  TelegramIcon,
  TwitterIcon,
} from "../helper/icons";

function TeamCard({ img, name, designation }) {
  return (
    <div>
      <div className="mb-[16px]">
        <div className="w-[311px] h-[281.67px] md:w-[336px] md:h-[286px] lg:w-[384px] lg:h-[348px]">
          <img className="w-full h-full" src={img} alt="team image" />
        </div>
      </div>
      <div className="mb-[12px]">
        <p className="font-semibold text-[20px] md:text-[22px] leading-[28px] md:leading-[30px] tracking-tighter-[-2%] md:tracking-tighter-[-1%]">
          {name}
        </p>
        <p className="font-normal text-[16px] leading-[24px] tracking-tighter-[-0.1px] text-[#5F6D7E]">
          {designation}
        </p>
      </div>
      <div>
        <TwitterIcon sx={{ fontSize: "20px", marginRight: "16px" }} />
        <FacebookIcon sx={{ fontSize: "20px", marginRight: "16px" }} />
        <LinkedInIcon sx={{ fontSize: "20px", marginRight: "16px" }} />
        <TelegramIcon sx={{ fontSize: "20px", marginRight: "16px" }} />
      </div>
    </div>
  );
}

export default TeamCard;
