import React from 'react';
import GithubBtn from './GithubBtb';
import LinkedinBtn from './LinkedinBtn';

const TeamCard = ({ name, image, linkedin, github, phrase }) => {
  return (
    <div
    className="mb-12 lg:mb-12 p-4 hover:scale-110 duration-200  bg-white shadow-xl dark:shadow-[rgb(77,77,77)] shadow-gray-500 rounded-md w-56 relative"
  >
    <div
      className="rounded-lg shadow-sm mb-3 mx-auto object-cover "
      style={{
        width: '200px',
        height: '180px',
        backgroundImage:
          'url("http://res.cloudinary.com/dldahkp7e/image/upload/v1690391378/sbs/x6vfgfmumnt9mw9r6hh8.png")',
        backgroundSize: 'cover',
      }}
    />
    <h5 className="text-lg font-bold mb-2 text-gray-700">{name}</h5>
    <p className="mb-3 text-gray-700">{phrase}</p>
    <ul className="list-inside flex mx-auto justify-center">
      <GithubBtn  github={github} />
      <LinkedinBtn linkedin={linkedin} />
    </ul>
  </div>
);
};

export default TeamCard;
