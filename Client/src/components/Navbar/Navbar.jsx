import { Link } from "react-router-dom";
import logo from '../../assets/logo.png'
const NavBar = () => {
    return (
        
        <div  >
            
            
        <Link  to="/home"  className="text-black hover:text-gray-500"><img src={logo} alt="logo" className="w-16 h-16 rounded-full object-cover absolute top-2 left-2" /></Link>
        <Link  to="/tienda" className="text-black hover:text-gray-500">MUJER/</Link>
        <Link  to="/tienda" className="text-black hover:text-gray-500">/VARON/</Link>
        <Link  to="/tienda" className="text-black hover:text-gray-500">/UNISEX/</Link>
        <Link  to="/tienda" className="text-black hover:text-gray-500">/ALL</Link>
        </div>
        
        );
    };
    
    export default NavBar;
    