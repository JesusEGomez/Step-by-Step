
import { useNavigate } from 'react-router-dom';
import landingvideo from '../../assets/zapatillas.mp4_Trim.mp4';
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
        <h1 className={`text-5xl font-extrabold font-sans ${styles.title}`}>Step-By-Step</h1>
        <p>&nbsp;</p>
        <p className={`text-xl font-sans ${styles.description}`}>Descubre lo ultimo en zapatillas</p>
        <button
          className={`px-4 py-2 mt-4 text-white bg-black rounded hover:bg-black-800 hover:border-2 hover:border-gray-300 font-sans ${styles.button}`}
          onClick={handleExploreClick}
        >
          Explorar colección
        </button>
      </div>
    </div>
  );
}

export default Landing;
