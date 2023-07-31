import React from 'react';
import { FaRegFileCode } from 'react-icons/fa';
import { BiLogoPostgresql, BiLogoTailwindCss } from 'react-icons/bi';
import { BsGithub } from 'react-icons/bs';
import { LiaReact } from 'react-icons/lia';
import { SiMercadopago } from 'react-icons/si';
import { Link } from 'react-router-dom';
const Footer = () => {
  return (
    <div>
    <footer className="footer p-12 w-screen bg-gray-100 text-gray-600">
    <div>
    <FaRegFileCode size={56} className="fill-current" />
    <p>HENRY proyecto final<br />julio 2023</p>
    <Link className='text-gray-600 no-underline' to='/about'>
Conocenos!</Link>
    </div>
    
    <div className="flex justify-center mt-8">
   
    </div>
    
    <div className='ml-60'>
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
  