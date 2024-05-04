import React from "react";

function Hero() {
  return (
    <div className="flex flex-col items-center h-[376px] md:h-[352px] lg:h-[404px]  gap-[32px] md:gap-0 lg:gap-[16px] text-center px-[16px] md:px-[48px] lg:px-[30px] pt-[32px] md:pt-[48px] lg:pt-[80px] pb-[40px] md:pb-[88px] lg:pb-[92px]   ">
      <div className="w-[343px] md:w-[672px] lg:w-[640px]">
        <p className="text-[#437EF7] font-semibold text-[14px] leading-[20px] tracking-tighter-[-0.1px]">
          1% OF THE INDUSTRY
        </p>
        <div className="flex flex-col gap-[16px] md:gap-[24px]">
          <h1 className="font-semibold md:font-bold text-[36px] md:text-[52px] leading-[44px] md:leading-[60px] tracking-tighter-[-2%] md:tracking-tighter-[-1%]">
            Hype got you here. of it. Stay for best ever help.
          </h1>
          <p className="text-[#5F6D7E] text-[18px] font-normal leading-[26px] tracking-tighter-[-0.1px]">
            We’ve been told it is possible to revolutionize the payment
            industry. We have not reinvented the wheel, we decided to build upon
            it - successfully.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
