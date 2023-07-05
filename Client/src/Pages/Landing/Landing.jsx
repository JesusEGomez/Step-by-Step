import React from 'react';
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

      <div className={`flex flex-col items-center justify-center h-full text-white relative ${styles.content}`}>
        <h1 className={`text-5xl font-extrabold ${styles.title}`}>Step - By - Step</h1>
        <p className={`text-xl ${styles.description}`}>Discover the Latest Shoes and Sneakers</p>
        <button
          className={`px-4 py-2 mt-4 text-white bg-gray-700 rounded hover:bg-gray-800 ${styles.button}`}
          onClick={handleExploreClick}
        >
          Explorar colección
        </button>
      </div>
    </div>
  );
}


export default Landing;
