import React from 'react';
import { FaRegFileCode } from 'react-icons/fa';
import { BiLogoPostgresql, BiLogoTailwindCss } from 'react-icons/bi';
import { BsGithub } from 'react-icons/bs';
import { LiaReact } from 'react-icons/lia';
import { SiMercadopago } from 'react-icons/si';
import { Link } from 'react-router-dom';
const Footer = () => {
  return (


    <footer className="footer flex justify-evenly pt-3   bg-gray-100 text-gray-600 ">


      <div className="flex flex-col w-2/5  text-sm sm:text-left  lg:text-xl">
        <FaRegFileCode size={56} className="fill-current sm:size-sm" />
        <p>HENRY proyecto final<br />julio 2023</p>
        <button className='btn' onClick={() => window.location.href = "/about"}>
          Conocenos
        </button>
      </div>

      <div className='flex flex-col w-2/5'>
        <span className="footer-title">TECNOLOGIAS</span>
        <div className="grid grid-flow-col ">
          <LiaReact size={30} className="fill-current" />
          <BsGithub size={30} className="fill-current" />
          <BiLogoPostgresql size={30} className="fill-current" />
          <BiLogoTailwindCss size={30} className="fill-current" />
          <SiMercadopago size={30} className="fill-current" />
        </div>
      </div>

    </footer>

  );
};

export default Footer;
