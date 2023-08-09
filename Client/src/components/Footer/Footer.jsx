import React from "react";
import { FaRegFileCode } from "react-icons/fa";
import { BiLogoPostgresql, BiLogoTailwindCss } from "react-icons/bi";
import { BsGithub } from "react-icons/bs";
import { LiaReact } from "react-icons/lia";
import { SiMercadopago } from "react-icons/si";
import { Link } from "react-router-dom";
const Footer = () => {
  return (

    <footer className="  w-screen  md:bottom-40 md:justify-center p-10  bg-gray-100 text-gray-600 ">
      <div className=" flex  flex-col justify-evenly items-center md:items-center md:flex-row  ">
        <div className=" flex flex-row text-center text-lg  ">
          <FaRegFileCode size={56} className="text-center sm:size-sm" />
          <div className=" flex flex-col items-start pl-1">
            <p className=" font-bold">PF Henry Bootcamp </p>
            <p>Julio 2023</p>
          </div>
        </div>

        <div className="flex justify-end sm:flex-row sm:justify-center sm:items-end">
          <div className="">
            <button
              className=" bg-transparent font-bold text-md"
              onClick={() => (window.location.href = "/about")}
            >
              CONOCENOS
            </button>
          </div>
        </div>

        <div className="flex flex-col justify-center items-center ">
          <span className="font-bold">TECNOLOGIAS</span>
          <div className=" grid grid-flow-col gap-6 mt-2">
            <LiaReact size={30} className="fill-current" />
            <BsGithub size={30} className="fill-current" />
            <BiLogoPostgresql size={30} className="fill-current" />
            <BiLogoTailwindCss size={30} className="fill-current" />
            <SiMercadopago size={30} className="fill-current" />
          </div>
        </div>
      </div>
    </footer>

  );
};

export default Footer;
