import React from "react";
import TeamCard from "./TeamCard/TeamCard";
import team from '../About/team';


const About = () => {
  return (
    <div className="bg-[url('http://res.cloudinary.com/dldahkp7e/image/upload/v1690393073/sbs/aabyjrs1gpkxlfm4wxtm.png')] bg-center">
      <div className="w-full h-[1px] bg-gray-500 dark:bg-gray-800" />

      <h1 className="mt-40 text-center text-4xl font-normal text-gray-700 font-sans mb-12 drop-shadow-2xl">
        ABOUT US
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 justify-items-center">
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
