import React from "react";
import Logo from "../assets/Lookscout.png";
import {
  AppleIcon,
  FacebookIcon,
  GoogleIcon,
  InstagramIcon,
} from "../helper/icons";
import hex from "../assets/hex.png";

function Footer() {
  return (
    <div className="px-[16px] py-[32px] md:px-[32px] md:py-[40px] lg:py-[64px] lg:px-[80px]">
      {/*for large screen */}
      <div className="lg:flex lg:flex-row lg:w-full lg:justify-between lg:gap-[143px]">
        <div className="md:flex md:flex-row md:justify-between md:mb-[32px]">
          <div className="md:max-w-[247px]">
            <div className="w-[150px] h-[28px] mb-[16px]">
              <img src={Logo} alt="logo" className="h-full w-full" />
            </div>
            <p className="font-normal text-[16px] leading-[24px]  tracking-tighter-[-0.1px] text-[#5F6D7E] mb-[24px]">
              Generate outside the box thinking with the possibility to target
              the low.
            </p>
            <div className="flex flex-row px-[27.5px] md:hidden lg:flex lg:px-0 justify-between lg:justify-start lg:gap-[24px] mb-[24px]">
              <FacebookIcon />
              <GoogleIcon />
              <AppleIcon />
              <InstagramIcon />
            </div>
          </div>
          <div className="hidden md:block lg:hidden">
            <p className="font-semibold text-[16px] leading-[24px]  tracking-tighter-[-0.1px] mb-[16px]">
              About Us
            </p>
            <div className="flex flex-col gap-[12px]">
              <a
                href="#"
                className="font-medium text-[16px] leading-[24px]  tracking-tighter-[-0.1px] text-[#5F6D7E]"
              >
                Our Competition
              </a>
              <a
                href="#"
                className="font-medium text-[16px] leading-[24px]  tracking-tighter-[-0.1px] text-[#5F6D7E]"
              >
                Channels
              </a>
              <a
                href="#"
                className="font-medium text-[16px] leading-[24px]  tracking-tighter-[-0.1px] text-[#5F6D7E]"
              >
                Scale
              </a>
              <a
                href="#"
                className="font-medium text-[16px] leading-[24px]  tracking-tighter-[-0.1px] text-[#5F6D7E]"
              >
                Watch the Demo
              </a>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap lg:flex-nowrap gap-[64px] justify-between lg:flew-row lg:w-full">
          <div>
            <p className="font-semibold text-[16px] leading-[24px]  tracking-tighter-[-0.1px] mb-[16px]">
              Products
            </p>
            <div className="flex flex-col gap-[12px]">
              <a
                href="#"
                className="font-medium text-[16px] leading-[24px]  tracking-tighter-[-0.1px] text-[#5F6D7E]"
              >
                Features
              </a>
              <a
                href="#"
                className="font-medium text-[16px] leading-[24px]  tracking-tighter-[-0.1px] text-[#5F6D7E]"
              >
                Solutions
              </a>
              <a
                href="#"
                className="font-medium text-[16px] leading-[24px]  tracking-tighter-[-0.1px] text-[#5F6D7E]"
              >
                Integrations
              </a>
              <a
                href="#"
                className="font-medium text-[16px] leading-[24px]  tracking-tighter-[-0.1px] text-[#5F6D7E]"
              >
                Enterprise
              </a>
              <a
                href="#"
                className="font-medium text-[16px] leading-[24px]  tracking-tighter-[-0.1px] text-[#5F6D7E]"
              >
                Solutions
              </a>
            </div>
          </div>
          <div>
            <p className="font-semibold text-[16px] leading-[24px]  tracking-tighter-[-0.1px] mb-[16px]">
              Resources
            </p>
            <div className="flex flex-col gap-[12px]">
              <a
                href="#"
                className="font-medium text-[16px] leading-[24px]  tracking-tighter-[-0.1px] text-[#5F6D7E]"
              >
                Partners
              </a>
              <a
                href="#"
                className="font-medium text-[16px] leading-[24px]  tracking-tighter-[-0.1px] text-[#5F6D7E]"
              >
                Community
              </a>
              <a
                href="#"
                className="font-medium text-[16px] leading-[24px]  tracking-tighter-[-0.1px] text-[#5F6D7E]"
              >
                Developers
              </a>
              <a
                href="#"
                className="font-medium text-[16px] leading-[24px]  tracking-tighter-[-0.1px] text-[#5F6D7E]"
              >
                App
              </a>
              <a
                href="#"
                className="font-medium text-[16px] leading-[24px]  tracking-tighter-[-0.1px] text-[#5F6D7E]"
              >
                Blog
              </a>
            </div>
          </div>
          <div className="block md:hidden lg:block">
            <p className="font-semibold text-[16px] leading-[24px]  tracking-tighter-[-0.1px] mb-[16px]">
              Why Choose Us?
            </p>
            <div className="flex flex-col gap-[12px]">
              <a
                href="#"
                className="font-medium text-[16px] leading-[24px]  tracking-tighter-[-0.1px] text-[#5F6D7E]"
              >
                Channels
              </a>
              <a
                href="#"
                className="font-medium text-[16px] leading-[24px]  tracking-tighter-[-0.1px] text-[#5F6D7E]"
              >
                Scale
              </a>
              <a
                href="#"
                className="font-medium text-[16px] leading-[24px]  tracking-tighter-[-0.1px] text-[#5F6D7E]"
              >
                Watch the Demo
              </a>
              <a
                href="#"
                className="font-medium text-[16px] leading-[24px]  tracking-tighter-[-0.1px] text-[#5F6D7E]"
              >
                Our Competition
              </a>
            </div>
          </div>
          <div>
            <p className="font-semibold text-[16px] leading-[24px]  tracking-tighter-[-0.1px] mb-[16px]">
              Company
            </p>
            <div className="flex flex-col gap-[12px]">
              <a
                href="#"
                className="font-medium text-[16px] leading-[24px]  tracking-tighter-[-0.1px] text-[#5F6D7E]"
              >
                About Us
              </a>
              <a
                href="#"
                className="font-medium text-[16px] leading-[24px]  tracking-tighter-[-0.1px] text-[#5F6D7E]"
              >
                News
              </a>
              <a
                href="#"
                className="font-medium text-[16px] leading-[24px]  tracking-tighter-[-0.1px] text-[#5F6D7E]"
              >
                Leadership
              </a>
              <a
                href="#"
                className="font-medium text-[16px] leading-[24px]  tracking-tighter-[-0.1px] text-[#5F6D7E]"
              >
                Media Kit
              </a>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="w-[24px] h-[25.71px] my-[24px] mx-auto">
          <img src={hex} alt="hex img" className="w-full h-full" />
        </div>
        <div className="flex flex-row justify-center md:justify-between lg:justify-center">
          <p className="text-center font-normal text-[16px] leading-[24px]  tracking-tighter-[-0.1px] text-[#5F6D7E]">
            © {new Date().getFullYear()} Lookscout. All Rights Reserved.
          </p>
          <div className="hidden md:flex lg:hidden flex-row px-[27.5px] md:px-0 justify-between md:justify-start md:gap-[24px]">
            <FacebookIcon />
            <GoogleIcon />
            <AppleIcon />
            <InstagramIcon />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
