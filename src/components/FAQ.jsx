import { Button } from "@mui/material";
import React from "react";
import { faq } from "../helper/faqData";
import { ArrowDown } from "../helper/icons";

function FAQ() {
  return (
    <div className="py-[40px] px-[16px] md:px-[32px] lg:py-[64px] lg:px-[80px]">
      <div className="lg:max-w-[800px] mb-[32px] lg:mb-[64px] mx-auto">
        <p className="font-bold text-[24px] md:text=[32px] leading-[32px] md:leading-[40px] tracking-tighter-[-2%] md:tracking-tighter-[-2%] mb-[12px] text-center">
          Frequently asked questions
        </p>
        <p className="font-normal text-[16px]  leading-[24px]  tracking-tighter-[-0.1px]  text-[#5F6D7E] text-center">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s,{" "}
        </p>
      </div>
      <div className="flex flex-col rounded-[5px] border-[1px] border-[#EAEBF0]">
        {faq.map((f, i) => {
          return (
            <div
              key={i}
              className="flex flex-row justify-between items-center shadow-sm shadow-[#EAEBF0]"
            >
              <div className="px-[32px] py-[16px]">
                <p className="font-medium text-[16px] leading-[24px] tracking-tighter-[-0.1px]">
                  {f.title}
                </p>
                {f.subTitle && (
                  <p className="font-normal text-[16px] leading-[24px]  tracking-tighter-[-0.1px]  text-[#5F6D7E] text-center">
                    {f.subTitle}
                  </p>
                )}
              </div>
              {i === 0 && (
                <Button
                  href="#new"
                  sx={{
                    fontWeigth: 500,
                    fontSize: "14px",
                    lineHeight: "20px",
                    letterSpacing: "-0.1px",
                    textTransform: "capitalize",
                  }}
                >
                  New
                </Button>
              )}
              {f.updatedTime && (
                <div>
                  <p className="hidden md:hidden lg:block font-medium text-[16px] leading-[24px] tracking-tighter-[-0.1px] text-[#5F6D7E]">
                    {f.updatedTime}
                    <ArrowDown
                      sx={{
                        fontSize: "20px",
                        marginLeft: "16px",
                        marginRight: "30px",
                        color: "#5F6D7E",
                      }}
                    />
                  </p>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default FAQ;
