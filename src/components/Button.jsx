import React from "react";

function Button({ children, variant = "primary" }) {
  return (
    <button
      className={`${
        variant == "primary" ? "bg-[#437EF7]" : "bg-[#FFFFFF]"
      } px-[18px] py-[12px] ${
        variant == "primary" ? "text-[#FFFFFF]" : "text-[#437EF7]"
      } rounded-[6px]`}
    >
      <p className="font-semibold text-[15px] leading-[22px]">{children}</p>
    </button>
  );
}

export default Button;
