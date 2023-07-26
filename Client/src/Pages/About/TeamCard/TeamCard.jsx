import React from 'react';
import GithubBtn from './GithubBtb';
import LinkedinBtn from './LinkedinBtn';

const TeamCard = ({ name, image, linkedin, github, phrase }) => {
  return (
    <div
      className="mb-12 lg:mb-12 p-4 hover:scale-110 duration-200 dark:bg-[#1B1A1F] bg-white shadow-xl dark:shadow-[rgb(77,77,77)] shadow-[rgb(8,7,7)] rounded-2xl w-56"
      style={{
        backgroundImage: 'url("https://w0.peakpx.com/wallpaper/252/133/HD-wallpaper-shoes-anime-shoes.jpg")',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <img
        className="rounded-lg shadow-lg mb-3 mx-auto object-cover"
        src={image}
        // alt="avatar"
        style={{ width: '180px', height: '180px' }}
      />
      <h5 className="text-lg font-bold mb-2 text-[#000000]">{name}</h5>
      <p className="mb-3 dark:text-[#F0EEEE]">{phrase}</p>
      <ul className="list-inside flex mx-auto justify-center">
        <GithubBtn github={github} />
        <LinkedinBtn linkedin={linkedin} />
      </ul>
    </div>
  );
};

export default TeamCard;
