import React from "react";
import TeamCard from "./TeamCard/TeamCard";
import team from '../About/team';

const About = () => {
  return (
    <div className="dark:bg-[#27242C] bg-[#EFF0F3]">
      <div className="w-full h-[1px] bg-gray-500 dark:bg-gray-800" />

      <h1 className="mt-8 text-center text-5xl font-bold text-[#060606] mb-12 dark:text-[#F0EEEE]">
        About Us
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 justify-items-center">
        {team.map((person, index) => (
          <TeamCard
            key={index}
            github={person.github}
            linkedin={person.linkedin}
            image={person.image}
            name={person.name}
            phrase={person.phrase}
            className="mb-8 md:mb-0"
          />
        ))}
      </div>
    </div>
  );
};

export default About;
