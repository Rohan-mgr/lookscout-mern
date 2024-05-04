import React from "react";
import { ArrowRight, DoneIcon } from "../helper/icons";
import Button from "../components/Button";
import brandImg from "../assets/brandimg.png";
import brandImgMd from "../assets/brandimgmd.png";
import brandImgLg from "../assets/brandimglg.png";

function Branding() {
  return (
    <div className="px-[16px] md:px-[32px] lg:px-[80px] py-[32px] md:py-[40px] lg:py-[64px] flex flex-col lg:flex-row lg:justify-center lg:items-center gap-[32px] lg:gap-[124px] md:gap-[48px]">
      <div className="lg:w-[532px] box-border">
        <h1 className="font-semibold text-[28px] md:text-[32px] leading-[36px] md:leading-[42px] tracking-tighter-[-2%] md:tracking-tighter-[-1%] mb-[24px]">
          Demonstrate branding consequently think outside
        </h1>
        <p className="hidden md:hidden lg:block mb-[24px] text-[#5F6D7E] font-normal text-[16px] leading-[24px] tracking-tighter-[-0.1px]">
          Velit purus egestas tellus phasellus. Mattis eget sed faucibus magna
          vulputate pellentesque a diam tincidunt. Aenean malesuada tellus
          tellus faucibus mauris quisque mauris in.
        </p>
        <div className="flex flex-col gap-[10px] mb-[32px] md:mb-[40px]">
          <p className="font-normal text-[16px] leading-[24px] tracking-tighter-[-0.1px] text-[#5F6D7E]">
            <DoneIcon sx={{ height: "18px", color: "#437EF7" }} />{" "}
            Enterprise-grade security
          </p>
          <p className="font-normal text-[16px] leading-[24px] tracking-tighter-[-0.1px] text-[#5F6D7E]">
            <DoneIcon sx={{ height: "18px", color: "#437EF7" }} /> 99.9%
            guaranteed uptime SLA
          </p>
          <p className="font-normal text-[16px] leading-[24px] tracking-tighter-[-0.1px] text-[#5F6D7E]">
            <DoneIcon sx={{ height: "18px", color: "#437EF7" }} /> Designated
            customer success team
          </p>
        </div>
        <Button>
          Start now <ArrowRight sx={{ marginLeft: "6px" }} />
        </Button>
      </div>

      <div className="w-full h-[343px] md:h-[460px] lg:w-[560px] lg:h-[560px]">
        <img
          className="w-full h-full block md:hidden lg:hidden"
          src={brandImg}
          alt="brand image"
        />
        <img
          className="w-full h-full hidden md:block lg:hidden"
          src={brandImgMd}
          alt="brand image"
        />
        <img
          className="w-full h-full hidden md:hidden lg:block"
          src={brandImgMd}
          alt="brand image"
        />
      </div>
    </div>
  );
}

export default Branding;
