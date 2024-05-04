import React, { useEffect, useState } from "react";
import Card from "../components/Card";
import { features, featuresMd } from "../helper/featureData";

function Features() {
  const [visibleFeatures, setVisibleFeatures] = useState([]);

  useEffect(() => {
    const handleResize = () => {
      const screenWidth = window.innerWidth;
      if (screenWidth >= 1024) {
        setVisibleFeatures(features.slice(0, 3));
      } else if (screenWidth >= 768) {
        setVisibleFeatures(featuresMd);
      } else {
        setVisibleFeatures(features);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="flex flex-col items-center px-[16px] md:px-[32px] lg:px-[80px] py-[32px] md:py-[40px] lg:py-[64px]">
      <p className="font-bold text-[24px] md:text-[32px] leading-[24px] md:leading-[40px] tracking-tigher-[-2%] lg:mb-[16px]">
        Messaging for all
      </p>
      <p className="hidden lg:block lg:text-[#5F6D7E] lg:font-normal lg:text-[16px] lg:leading-[24px] tracking-tighter-[-0.1px]">
        User generated content in real-time will have multiple touchpoints for
        offshoring.
      </p>
      <div className="  mt-[32px] lg:px-[32px] lg:mt-[64px] grid grid-cols-1 gap-y-[40px] md:grid-cols-2  md:gap-x-[32px] lg:grid-cols-3">
        {visibleFeatures?.map((feature, i) => (
          <Card
            index={i}
            key={i}
            icon={feature.icon}
            title={feature.title}
            desc={feature.description}
            haveArrowBtn={feature.haveArrowIcon}
          />
        ))}
      </div>
    </div>
  );
}

export default Features;
