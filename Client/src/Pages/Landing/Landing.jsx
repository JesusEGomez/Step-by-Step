
import { useNavigate } from 'react-router-dom';
import landingvideo from '../../assets/shoes.mp4';
import styles from "./Landing.module.css";


function Landing() {
  const navigate = useNavigate();

  const handleExploreClick = () => {
    navigate('/home');
  };


  return (
    <div className={`relative ${styles.container}`}>
      <video
        className={`absolute top-0 left-0 w-full h-full object-cover ${styles.video}`}
        autoPlay
        loop
        muted
        playsInline
      >
        <source src={landingvideo} type="video/mp4" />
      </video>

      <div className={`flex flex-col items-center justify-center h-full text-white relative font-sans ${styles.content}`}>
        <h1 className="text-5xl font-bold font-sans drop-shadow-2xl">Step-By-Step</h1>
        <p>&nbsp;</p>
        <button className=" btn glass btn-wide bg-gradient-to-r from-black to-transparent px-6 py-2 mt-4 text-white rounded font-sans transition duration-300 ease-in-out hover:from-black hover:to-transparent hover:text-black hover:border-white"          onClick={handleExploreClick}
        >
          Acceder a la tienda
        </button>
      </div>
    </div>
  );
}

export default Landing;
