import React from "react";
import TeamCard from "../components/TeamCard";
import { teams } from "../helper/teamData";

function Team() {
  return (
    <div className="px-[32px] py-[40px] lg:px-[80px] lg:py-[64px] flex flex-col justify-center items-center">
      <div className="mb-[32px] lg:max-w-[800px]">
        <p className="font-bold text-[24px] md:text-[32px] leading-[32px] md:leading-[40px] tracking-tighter-[-2%] text-center mb-[12px] md:mb-[16px]">
          The Core of Our Team
        </p>
        <p className="font-normal text-[16px] leading-[24px] tracking-tighter-[-0.1px] text-center text-[#5F6D7E]">
          Organically grow the holistic world view of disruptive innovation via
          workplace diversity and empowerment of people and great talent that
          truly rocks.
        </p>
      </div>
      <div className="flex flex-col flex-wrap md:flex-row gap-[32px]">
        {teams?.map((team, i) => {
          return (
            <TeamCard
              key={i}
              img={team.img}
              name={team.name}
              designation={team.designation}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Team;
