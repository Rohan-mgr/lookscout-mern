import React from "react";
import Button from "../components/Button";
import twilio from "../assets/twilio.png";
import slack from "../assets/slack.png";
import google from "../assets/google.png";
import paypal from "../assets/paypal.png";
import pinterest from "../assets/pinterest.png";
import mailchimp from "../assets/mailchimp.png";

function CallToAction() {
  return (
    <div className="bg-[#2B63D9]">
      <div className="py-[32px] px-[16px] flex flex-col items-center justify-center">
        <div className="md:w-[704px] lg:w-[620px] mx-auto">
          <p className="font-semibold text-[14px] leading-[20px]  tracking-tighter-[-0.1px] text-[#FFFFFF] text-center mb-[8px]">
            1% OF THE INDUSTRY
          </p>
          <p className="font-bold lg:font-semibold text-[28px] md:text-[32px] leading-[36px] md:leading-[42px] tracking-tighter-[-2%] lg:tracking-tighter-[-1%] md:tracking-tighter-[-0.1px] mb-[16px] lg:mb-[32px] text-center text-[#FFFFFF] w-full">
            Welcome to your new digital reality that which will rock your world
            truly at all.
          </p>
        </div>
        <div className="flex flex-col justify-center gap-[16px] w-full md:flex-row md:w-[704px]">
          <Button variant="secondary">Sign up</Button>
          <Button>Log in</Button>
        </div>
      </div>
      {/* logos section */}
      <div className="py-[32px] md:py-[40px] px-[16px] md:px-[32px] lg:py-[64px] lg:px-[80px]">
        <div className="px-[32px] text-center grid grid-cols-1 gap-y-[32px] md:grid-cols-4 lg:grid-cols-6 md:gap-x-[64px]">
          <img
            src={twilio}
            alt="logo"
            className="w-fit mx-auto object-contain h-auto"
          />
          <img
            src={slack}
            alt="logo"
            className="w-fit mx-auto object-contain h-auto"
          />
          <img
            src={google}
            alt="logo"
            className="w-fit mx-auto object-contain h-auto"
          />
          <img
            src={paypal}
            alt="logo"
            className="w-fit mx-auto object-contain h-auto"
          />
          <img
            src={pinterest}
            alt="logo"
            className="md:col-start-2 lg:col-auto w-fit mx-auto object-contain h-auto"
          />
          <img
            src={mailchimp}
            alt="logo"
            className="w-fit mx-auto object-contain h-auto"
          />
        </div>
      </div>
    </div>
  );
}

export default CallToAction;
