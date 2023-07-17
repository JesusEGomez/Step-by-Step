import React, { useEffect, useState } from "react";
import imagen18 from "../Detail/imagenes/image 18.png";
import imagen26 from "../Detail/imagenes/image 26.png";
import imagen27 from "../Detail/imagenes/image 27.png";
import imagen28 from "../Detail/imagenes/image 28.png";
import imagen29 from "../Detail/imagenes/image 29.png";


const URL = import.meta.env.VITE_URL;

const Carousel = () => {
  const [firstImage, setFirstImage] = useState(null);

  useEffect(() => {
    const fetchFirstImage = async () => {
      try {
        const response = await fetch(`${URL}/products`);
        const data = await response.json();
        const firstImageData = data[0].images[0].imageUrl; // Obtener la URL de la primera imagen
        setFirstImage(firstImageData);
      } catch (error) {
        console.error("Error fetching first image data:", error);
      }
    };

    fetchFirstImage();
  }, []);

  return (
    <div className="carousel w-full">
      <div id="slide1" className="carousel-item relative w-full">
        <img src={firstImage || imagen26} className="w-full" />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide4" className="btn btn-circle">❮</a>
          <a href="#slide2" className="btn btn-circle">❯</a>
        </div>
      </div>
      <div id="slide2" className="carousel-item opacity-0 absolute w-full">
        <img src={imagen27} className="w-full" />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide1" className="btn btn-circle">❮</a>
          <a href="#slide3" className="btn btn-circle">❯</a>
        </div>
      </div>
      <div id="slide3" className="carousel-item opacity-0 absolute w-full">
        <img src={imagen28} className="w-full" />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide2" className="btn btn-circle">❮</a>
          <a href="#slide4" className="btn btn-circle">❯</a>
        </div>
      </div>
      <div id="slide4" className="carousel-item opacity-0 absolute w-full">
        <img src={imagen18} className="w-full" />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide3" className="btn btn-circle">❮</a>
          <a href="#slide1" className="btn btn-circle">❯</a>
        </div>
      </div>
    </div>
  );
};

export default Carousel;

