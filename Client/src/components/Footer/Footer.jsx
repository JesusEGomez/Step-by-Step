import { FaRegFileCode } from 'react-icons/fa';
import { BiLogoPostgresql,BiLogoTailwindCss } from 'react-icons/bi';
import { BsGithub } from 'react-icons/bs'
import { LiaReact } from 'react-icons/lia'
import {SiMercadopago} from 'react-icons/si'
const Footer = () => {
    return (
        <div>
        <footer className="footer p-10 bg-gray-100 text-gray-600">
        <div>
        <FaRegFileCode
        size={56}
        className="fill-current"
        >
        </FaRegFileCode>
        <p>HENRY proyecto final <br />julio 2023</p>
        </div>
        <div>
        <span className="footer-title">TECNOLOGIAS</span>
        <div className="grid grid-flow-col gap-4">
        
        <LiaReact
        size={30}
        className="fill-current"
        >
        </LiaReact>
        
        
        <BsGithub
        size={30}
        className="fill-current"
        >
        </BsGithub>
        <BiLogoPostgresql
        size={30}
        className="fill-current">
        </BiLogoPostgresql>
        
        <BiLogoTailwindCss
        size={30}
        className="fill-current">
        </BiLogoTailwindCss>
        
        <SiMercadopago
        size={30}
        className="fill-current">
        </SiMercadopago>
        
        </div>
        </div>
        </footer>
        </div>
        );
    };
    
    export default Footer;
    