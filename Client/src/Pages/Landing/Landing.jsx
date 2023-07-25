import { useNavigate } from 'react-router-dom';
import landingvideo from '../../assets/shoes.mp4';
import styles from "./Landing.module.css";

function Landing() {
  const navigate = useNavigate();

  const handleExploreClick = () => {
    navigate('/home');
  };

  return (
    <div className={`relative ${styles.container} h-screen w-screen `}>
      <video
        className={`absolute top-0 left-0 w-full h-full object-fill`}
        autoPlay
        loop
        muted
        playsInline
      >
        <source src={landingvideo} type="video/mp4" />
      </video>

      <div className="flex items-center justify-center h-full">
        <div className={`text-white font-sans text-xs md:text-base lg:text-3xl xl:text-4xl ${styles.content}`}>
          <h1 className="font-extrabold">Step-By-Step</h1>
          <p>&nbsp;</p>
          <p>Descubre lo último en zapatillas</p>
          <button
            className={`px-4 py-2 mt-4 text-white bg-black rounded hover:bg-black-800 hover:border-2 hover:border-gray-300 font-sans ${styles.button}`}
            onClick={handleExploreClick}
          >
            Explorar colección
          </button>
        </div>
      </div>
    </div>
  );
}

export default Landing;


