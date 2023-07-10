import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const GET_URL = 'http://localhost:3001/products';
const IMAGES_PER_SLIDE = 5;

const Carousel = () => {
  const [carouselImages, setCarouselImages] = useState([]);
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchCarouselImages();
  }, []);

  const fetchCarouselImages = async () => {
    try {
      const response = await axios.get(GET_URL);
      const data = response.data;
      setProducts(data); // Guardar la matriz de productos en el estado
      const images = data.map((product) => product.images[0].imageUrl);
      setCarouselImages(images);
    } catch (error) {
      console.error('Error fetching carousel data:', error);
    }
  };

  const handleSlideChange = (slideIndex) => {
    setCurrentSlideIndex(slideIndex);
  };

  const renderCarouselItems = () => {
    const startIndex = currentSlideIndex * IMAGES_PER_SLIDE;
    const endIndex = startIndex + IMAGES_PER_SLIDE;

    return carouselImages.slice(startIndex, endIndex).map((image, index) => {
      const productIndex = startIndex + index; // Asignar el índice del producto
      const product = products[productIndex]; // Obtener el objeto de producto correspondiente
      const productId = product ? product.id : null;

      return (
        <Link
          key={index}
          to={productId ? `/home/${productId}` : '#'} // Verificar si productId existe antes de establecer el atributo 'to' del enlace
          className="carousel-item max-w-xs max-h-96 object-cover"
        >
          <img src={image} alt="Product" />
        </Link>
      );
    });
  };

  const renderSlideButtons = () => {
    const totalSlides = Math.ceil(carouselImages.length / IMAGES_PER_SLIDE);
    const buttons = [];

    for (let i = 0; i < totalSlides; i++) {
      buttons.push(
        <button
          key={i}
          className={`carousel-button ${
            i === currentSlideIndex ? 'active' : 'bg-gray-300'
          }`}
          onClick={() => handleSlideChange(i)}
        />
      );
    }

    return buttons;
  };

  return (
    <div className="carousel rounded-box mt-16">
      {renderCarouselItems()}
      <div className="flex justify-center mt-4">{renderSlideButtons()}</div>
    </div>
  );
};

export default Carousel;
