import { GiRunningShoe } from 'react-icons/gi';
import NavBar from '../../components/Navbar/Navbar';

const Home =()=>{
    return(
        <div>
            <NavBar/>
        <h1>Step-by-Step</h1>
        <p className="flex items-center ">todo lo que buscas en zapas   <GiRunningShoe className="ml-1 " />   </p>
        </div>
        )
    }
    export default Home;
    