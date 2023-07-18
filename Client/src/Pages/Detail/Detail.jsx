import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { addProduct } from "../../features/cartSlice";
import heartImage from "./imagenes/bx-heart.svg.jpg";
import { useDispatch } from "react-redux";
import Carousel from "./Carousel.jsx";
import Swal from 'sweetalert2'

const URL = import.meta.env.VITE_URL;

function Detail(clickHandler) {
  const { id } = useParams();
  const [productData, setProductData] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedSize, setSelectedSize] = useState("Ninguno seleccionado");
  const [carouselImages, setCarouselImages] = useState([]);
  const [carouselSelectedImage, setCarouselSelectedImage] = useState(null);
  const [addedToCart, setAddedToCart] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${URL}/products/${id}`);
        const data = await response.json();
        setProductData(data);
        setSelectedImage(data.images[0].imageUrl); // Establecer la primera imagen como seleccionada inicialmente
        const carouselImages = data.images.map((image) => image.imageUrl);
        setCarouselImages(carouselImages);
        setCarouselSelectedImage(data.images[0]?.imageUrl); // Establecer la primera imagen como seleccionada inicialmente en el carrusel
      } catch (error) {
        console.error("Error fetching product data:", error);
      }
    };

    fetchData();
  }, [id]);

  const clickAddHandler = (product) => {
    console.log("Producto", productData);
    if (selectedSize !== "Ninguno seleccionado") {
      dispatch(addProduct({ ...product, sizes: [selectedSize.size] }));
      setAddedToCart(true);
    } else {
      Swal.fire('Selecciona un talle')

    }
  };

  const handleImageClick = (imageUrl) => {
    setSelectedImage(imageUrl);
  };

  const handleImageSize = (size) => {
    setSelectedSize(size);
  };

  // const handleCarouselImageClick = (imageUrl) => {
  //   setCarouselSelectedImage(imageUrl);
  // };

  const dispatch = useDispatch();

  return (
    <div className="mb-96 w-96">
      {productData ? (
        <div className="container h-screen flex mt-28 mb-8">
          <div className="bg-white flex flex-row justify-between relative w-full items-center pl-16 pr-[210px]">
            <div className="min-w-[520px]  bg-cover bg-50%_50% bg-blend-normal flex flex-col justify-end relative h-[725px] w-[650px] items-center my-12 py-6 ">
              <img
                src={selectedImage}
                alt="Shoes"
                className="object-cover w-96 h-full"
                style={{ objectFit: "contain" }}
              />
            </div>
            <div className="flex flex-col justify-start gap-2 relative h-[694px] items-start">
              <div className="overflow-hidden bg-[#edf0f1] flex  flex-col justify-start mb-2 relative w-12 items-stretch px-2 rounded">
                <div className="text-sm font-['Inter'] font-semibold tracking-[-0.0840000033378601] leading-[24px] text-[#242c31] relative">
                  New!
                </div>
              </div>
              <div className="mt-4 whitespace-nowrap text-2xl font-sans w-20 font-bold tracking-[-0.7920000171661377] leading-[58px] text-[#242c31] self-stretch mr-20 relative">
                {productData.model}
              </div>
              <div className="whitespace-nowrap text-sm font-sans tracking-[-0.0840000033378601] leading-[24px] text-[#6e7c86] mb-1 relative w-20">
                {productData.gender}
              </div>
              <div className="text-xl font-['Inter'] font-semibold tracking-[-0.7920000171661377] leading-[48px] text-[#242c31] mb-1 relative w-20">
                ${productData.totalPrice}
              </div>
              <div>
                <p className="font-extralight text-sm w-96">{productData.description}</p>
              </div>
              <div className="flex flex-row justify-start mb-4 relative items-center">
                {/* Mostrar las imágenes adicionales */}
                <div className="flex space-x-2 ">
                  {productData.images.map((image, index) => (
                    <div
                      key={index}
                      className="border border-gray-300 p-1 transition-transform duration-300 hover:scale-110 hover:border-gray-500"
                      onClick={() => handleImageClick(image.imageUrl)}
                    >
                      <img
                        src={image.imageUrl}
                        alt="Shoes"
                        className="min-h-0 min-w-0 relative w-20 h-20 shrink-0 cursor-pointer"
                      />
                    </div>
                  ))}
                </div>
              </div>
              <div className="whitespace-nowrap text-xs font-sans  tracking-[-0.0840000033378601] leading-[24px] text-gray-600  mb-2 relative w-20 font-semibold">
  Stock:{" "}
                {selectedSize.stockPerSize ? selectedSize.stockPerSize : 0}

              </div>
              <div className=" inline  text-gray-800  text-xs font-light mb-1 w-52">
                SELECCIONA UN TALLE:
              </div>
              <div className="flex flex-row justify-start mb-2 relative items-center">
                {/* Mostrar las imágenes adicionales */}
                <div className="grid grid-cols-5 gap-2">
                  {productData.stock.map((size, index) => (
                    <div
                      key={index}
                      className={` border-gray-200 p-1 rounded  transition-transform duration-300 hover:scale-110 hover:border-gray-300 ${
                        selectedSize === size.size
                          ? "bg-gray-200 border-solid rounded  border-sm"
                          : ""
                      }`}
                      onClick={() => handleImageSize(size)}
                    >
                      <label class="group relative flex items-center justify-center bg-gray-50 rounded-sm border-none  p-3 text-base font-medium uppercase hover:bg-gray-100 focus:outline-none sm:flex-1  cursor-pointer  text-gray-900 shadow-sm">
                        <input
                          type="radio"
                          name="size-choice"
                          value="3XL"
                          class="sr-only"
                          aria-labelledby="size-choice-7-label"
                        />
                        <span id="size-choice-7-label">{size.size}</span>

                        <span
                          class="pointer-events-none absolute -inset-px rounded-md"
                          aria-hidden="true"
                        ></span>
                      </label>
                    </div>
                  ))}
                </div>
              </div>
              <p className="font-semibold text-sm">{`Talle seleccionado: ${
                selectedSize.size ? selectedSize.size : ""
              }`}</p>
              <div></div>
              {addedToCart && (

                <div className="text-green-600 text-base font-normal mb-1">
                  Producto agregado al carrito
                </div>
              )}

              <div className="self-stretch flex flex-row justify-start gap-5 relative items-center mb-3 mr-12">
                <button
                  onClick={() => clickAddHandler(productData)}
                  className="bg-black text-white cursor-pointer flex flex-col justify-center relative w-1/2 h-10 border-gray-400 hover:border-2 hover:border-gray-300 hover:bg-gray-800 items-center rounded-md"
                >
                  Comprar
                </button>
              </div>

              <div className="whitespace-nowrap text-sm font-['Inter'] tracking-[-0.0840000033378601] leading-[24px] text-[#252c32] self-stretch justify-start mr-40 relative">
                {/* Shipping* */}
                <br />
                {/* <Carousel /> */}
              </div>
            </div>
          </div>
        </div>
      ) : (

        <button disabled className="bg-white w-96 h-96 ml-80 mt-20  mb-96">

          <span className="loading loading-spinner loading-3xl text-black"></span>
        </button>
      )}
    </div>
  );
}

export default Detail;
