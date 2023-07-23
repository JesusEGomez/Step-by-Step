import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { GiRunningShoe } from "react-icons/gi";
import { SiReebok, SiNike } from "react-icons/si";
import { CgAdidas } from "react-icons/cg";
import axios from "axios";
import { clearCart } from "../../features/cartSlice";
import { useDispatch } from "react-redux";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

import Comments from "../../components/comments/Comments";
import { fetchComments, getComments } from "../../features/commentsSlice";
import { fetchOrders } from "../../features/ordersSlice";
import { setSelectedBrand } from "../../features/productsSlice";

const URL = import.meta.env.VITE_URL;
const IMAGES_PER_SLIDE = 5;

const Home = () => {
  const [loading, setLoading] = useState(true);
   const navigate = useNavigate()
  const [carouselImages, setCarouselImages] = useState([]);
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [products, setProducts] = useState([]);
  const dispatch = useDispatch();
  const cart = JSON.parse(localStorage.getItem("cart"));

  useEffect(() => {
    fetchCarouselImages();
    const urlParams = new URLSearchParams(window.location.search);
    const status = urlParams.get("status");
    const orderId = urlParams.get("payment_id");
    if (status === "approved") {
     if (localStorage.getItem("user") !== undefined) {

        const user = JSON.parse(localStorage.getItem("user"));
        const sendOrder = async () => {
          const order = cart.map((product) => {
            const { id, sizes, quantity } = product;
            const newOrden = {
              productId: id,
              size: sizes[0],
              quantity,
              ordenNumber: orderId,
              paymentStatus: status,
              email: user?.email,
            };
            return newOrden;
          });
          response = await axios.post(`${URL}/orders/create`, order);
        };
        sendOrder();
        console.log("orden", cart);
        dispatch(clearCart());
        Swal.fire({
          title: 'Felicidades tu compra se realizo con exito',
          text: "Gracias por elegirnos",
          icon: 'success',
          showCancelButton: false,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Continuar'
        }).then((result) => {
          if (result.isConfirmed) {
            navigate("/tienda")
          }
        })
      }
    }
    dispatch(fetchComments());
    dispatch(fetchOrders());
  }, []);

  const fetchCarouselImages = async () => {
    try {
      const response = await axios.get(`${URL}/products`);
      const data = response.data;
      setProducts(data); // Guardar la matriz de productos en el estado
      const images = data.map((product) => product.images[1]);
      setCarouselImages(images);
      setLoading(false); // Establecer el estado de carga a false cuando las imágenes se carguen
    } catch (error) {
      console.error("Error fetching carousel data:", error);
      setLoading(false); // En caso de error, también debes establecer el estado de carga a false
    }
  };

  const handleSlideChange = (slideIndex) => {
    setCurrentSlideIndex(slideIndex);
  };

  const renderCarouselItems = () => {
    const startIndex = currentSlideIndex * IMAGES_PER_SLIDE;
    const endIndex = startIndex + IMAGES_PER_SLIDE;

    return carouselImages.slice(startIndex, endIndex).map((image, index) => {
      const productIndex = startIndex + index; // Asignar el ID del producto
      const product = products[productIndex]; // Obtener el objeto de producto correspondiente
      const productId = product ? product.id : null;

      return (
        <Link
          key={index}
          to={productId ? `/home/${productId}` : "#"} // finalmente, en el componente Link se  verifica si el 'productId' exista antes de establecer el atributo 'to'del enlace. si el 'productId' no existe (es 'null' ) se establece el atributo 'to' como '#' para evitar que el enlace sea valido.
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
          className={`carousel-button ${i === currentSlideIndex ? "active" : "bg-gray-300"
            }`}
          onClick={() => handleSlideChange(i)}
          style={{
            width: "15px",
            height: "15px",
            borderRadius: "50%",
            margin: "0 5px",
            padding: "0",
            border: "grey 2px ",
            outline: "none",
          }}
        />
      );
    }

    return buttons;
  };

  const handleBrandClick = (brandName) => {
    dispatch(setSelectedBrand(brandName));
  };

  return (
    <div className="mt-20">
      {loading ? (
        <button
          disabled
          className="bg-white w-64 h-48 mt-36   ml-96 mb-32 hover:border-none border-none"
        >
          <span className="loading loading-spinner loading-3xl text-black"></span>
        </button>
      ) : (
        <>
          <div className="carousel rounded-box mt-16">
            {renderCarouselItems()}
          </div>
          {/* Botones de cambio de slide */}
          <div className="flex justify-center mt-4 ">
            {renderSlideButtons()}
          </div>
          {/* Resto del código del componente Home */}
          <div className="m-6 mt-9 mb-9 text-center ">
            <h1 className="text-4xl">STEP-BY-STEP</h1>
            <p className="flex items-center justify-center">
              todo lo que buscas en zapas{" "}
              <GiRunningShoe className="ml-1 text-2xl" />
            </p>
            <div className="flex justify-center mt-4">
              <Link to="/tienda">
                <button className="bg-black text-white py-2 px-4 rounded hover:bg-gray-500">
                  COMPRAR
                </button>
              </Link>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="w-1/3 h-96 overflow-hidden relative">
              <img
                src="https://reebokarg.vtexassets.com/assets/vtex.file-manager-graphql/images/60761dab-3616-4721-902b-2e1d09142f19___ed7c12cfa15a0ddde6215f0f812f93f2.jpg"
                className="w-full h-full object-cover"
                alt="Reebok"
              />
              <div
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex justify-center tooltip"
                data-tip="Reebok"
              >
                {" "}
                <Link to="/tienda">
                  <button
                    name="reebok"
                    onClick={() => handleBrandClick("reebok")}
                    className="text-4xl px-8 py-2 bg-black inline-flex items-center text-white font-bold rounded-full shadow-lg hover:bg-gray-950 hover:border-slate-200 hover:border-2 transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1) duration-400 space-x-2"
                  >
                    <SiReebok />
                  </button>{" "}
                </Link>
              </div>
            </div>
            <div className="w-1/3 h-96 overflow-hidden relative">
              <img
                src="https://media.about.nike.com/images/8221b9c2-3f4e-4864-9a50-c760d336d8e2/5.jpg?fm=jpg&q=80&fit=max&crop=2400%2C3000%2C0%2C0&w=640"
                className="w-full h-full object-cover"
                alt="Nike"
              />
              <div
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex justify-center tooltip"
                data-tip="Nike"
              >
                {" "}
                <Link to="/tienda">
                  <button
                    onClick={() => handleBrandClick("nike")}
                    className="text-4xl px-8 py-2 bg-black inline-flex items-center text-white font-bold rounded-full shadow-lg hover:bg-gray-950 hover:border-slate-200 hover:border-2 transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1) duration-400 space-x-2"
                  >
                    <SiNike />
                  </button>
                </Link>
              </div>
            </div>
            <div className="w-1/3 h-96 overflow-hidden relative">
              <img
                src="https://media.revistagq.com/photos/5e0605b0aec425000859123f/master/w_1600%2Cc_limit/unnamed.jpg"
                className="w-full h-full object-cover"
                alt="Adidas"
              />
              <div
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex justify-center tooltip"
                data-tip="Adidas"
              >
                <Link to="/tienda">
                  <button
                    onClick={() => handleBrandClick("adidas")}
                    className="text-4xl px-8 py-2 bg-black inline-flex items-center text-white font-bold rounded-full shadow-lg hover:bg-gray-950 hover:border-slate-200 hover:border-2 transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1) duration-400 space-x-2"
                  >
                    <CgAdidas />
                  </button>
                </Link>
              </div>
            </div>
          </div>{" "}
          <Comments />
        </>
      )}
    </div>
  );
};

export default Home;
