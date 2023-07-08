import { GiRunningShoe } from 'react-icons/gi';
import { Link } from 'react-router-dom';
import { SiReebok, SiNike } from 'react-icons/si';
import { CgAdidas } from 'react-icons/cg';
import axios from "axios";
import { useEffect, useState } from 'react';

const GET_URL = "http://localhost:3001/products";

const Home = () => {
  const [carouselImages, setCarouselImages] = useState([4]);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    fetchCarouselImages();

    const intervalId = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % carouselImages.length);
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, [carouselImages]);

  const fetchCarouselImages = async () => {
    try {
      const response = await axios.get(GET_URL);
      const products = response.data;
      const firstImages = products.map((product) => product.images[0].imageUrl);
      setCarouselImages(firstImages);
    } catch (error) {
      console.error("Error fetching carousel images:", error);
    }
  };

  return (
    <div>
      <div className="carousel rounded-box mt-16">
        {carouselImages.map((image, index) => {
          const productId = index + 1; // Asignar el ID del producto
          return (
            <Link key={index} to={`/home/${productId}`} className={`carousel-item max-w-xs max-h-96 object-cover ${index === currentImageIndex ? 'active' : ''}`}>
              <img src={image} alt="Product" />
            </Link>
          );
        })}
      </div>

      <div className="m-6 mt-9 mb-9 text-center">
        <h1>STEP-BY-STEP</h1>
        <p style={{ display: 'inline-flex', alignItems: 'center' }}>
          todo lo que buscas en zapas <GiRunningShoe className="ml-1" />
        </p>
        <div className="flex justify-center mt-4">
          <Link to="/tienda">
            <button className="bg-black text-white py-2 px-4 rounded hover:border-gray-500 hover:bg-gray-500">
              COMPRAR
            </button>
          </Link>
        </div>
      </div>

      <div className="flex justify-center">
        <div className="w-1/3 h-96 overflow-hidden relative">
          <img src="https://reebokarg.vtexassets.com/assets/vtex.file-manager-graphql/images/60761dab-3616-4721-902b-2e1d09142f19___ed7c12cfa15a0ddde6215f0f812f93f2.jpg" className="w-full h-full object-cover" alt="Reebok" />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex justify-center tooltip" data-tip="Reebok">
            <button className="text-4xl px-8 py-2 bg-black inline-flex items-center text-white font-bold rounded-full shadow-lg hover:bg-gray-950 hover:border-slate-200 hover:border-2  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1) duration-400 space-x-2">
              <SiReebok />
            </button>
          </div>
        </div>
        <div className="w-1/3 h-96 overflow-hidden relative">
          <img src="https://media.about.nike.com/images/8221b9c2-3f4e-4864-9a50-c760d336d8e2/5.jpg?fm=jpg&q=80&fit=max&crop=2400%2C3000%2C0%2C0&w=640" className="w-full h-full object-cover" alt="Nike" />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex justify-center tooltip" data-tip="Nike">
            <button className="text-4xl px-8 py-2 bg-black inline-flex items-center text-white font-bold rounded-full shadow-lg hover:bg-gray-950 hover:border-slate-200 hover:border-2  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1) duration-400 space-x-2">
              <SiNike />
            </button>
          </div>
        </div>
        <div className="w-1/3 h-96 overflow-hidden relative">
          <img src="https://media.revistagq.com/photos/5e0605b0aec425000859123f/master/w_1600%2Cc_limit/unnamed.jpg" className="w-full h-full object-cover" alt="Adidas" />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex justify-center tooltip" data-tip="Adidas">
            <button className="text-4xl px-8 py-2 bg-black inline-flex items-center text-white font-bold rounded-full shadow-lg hover:bg-gray-950 hover:border-slate-200 hover:border-2  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1) duration-400 space-x-2">
              <CgAdidas />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
