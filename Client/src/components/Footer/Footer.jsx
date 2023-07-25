import React from 'react';
import { FaRegFileCode } from 'react-icons/fa';
import { BiLogoPostgresql, BiLogoTailwindCss } from 'react-icons/bi';
import { BsGithub } from 'react-icons/bs';
import { LiaReact } from 'react-icons/lia';
import { SiMercadopago } from 'react-icons/si';

const Footer = () => {
  return (
    <div>
      <footer className="footer p-12 w-screen bg-gray-100 text-gray-600">
        <div className="text-sm sm:text-left md:text-lg lg:text-xl">
          <FaRegFileCode size={56} className="fill-current" />
          <p>HENRY proyecto final<br />julio 2023</p>
        </div>

        <div >
            <button onClick={() => window.location.href = "/about"}>
              Conocenos 
            </button>
          </div>

        <div className='ml-[50%]'>
          <span className="footer-title">TECNOLOGIAS</span>
          <div className="grid grid-flow-col gap-6">
            <LiaReact size={30} className="fill-current" />
            <BsGithub size={30} className="fill-current" />
            <BiLogoPostgresql size={30} className="fill-current" />
            <BiLogoTailwindCss size={30} className="fill-current" />
            <SiMercadopago size={30} className="fill-current" />
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;

