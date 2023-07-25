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

        <div className="mt-4 sm:mt-6 md:mt-8">
          <button onClick={() => window.location.href = "/about"} className="text-sm sm:text-base md:text-lg lg:text-xl">
            Conócenos
          </button>
        </div>

        <div className="flex items-center mt-6 md:mt-8">
          <span className="footer-title text-sm sm:text-base md:text-lg lg:text-xl">TECNOLOGIAS</span>
          <div className="flex space-x-6 ml-6">
            {/* Aplica clases de tamaño responsivo a los íconos */}
            <LiaReact size={20} className="fill-current sm:w-6 sm:h-6 md:w-6 md:h-6 lg:w-8 lg:h-8" />
            <BsGithub size={20} className="fill-current sm:w-6 sm:h-6 md:w-6 md:h-6 lg:w-8 lg:h-8" />
            <BiLogoPostgresql size={20} className="fill-current sm:w-6 sm:h-6 md:w-6 md:h-6 lg:w-8 lg:h-8" />
            <BiLogoTailwindCss size={20} className="fill-current sm:w-6 sm:h-6 md:w-6 md:h-6 lg:w-8 lg:h-8" />
            <SiMercadopago size={20} className="fill-current sm:w-6 sm:h-6 md:w-6 md:h-6 lg:w-8 lg:h-8" />
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;

