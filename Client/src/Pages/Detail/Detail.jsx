import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { addProduct } from "../../features/cartSlice";
import heartImage from "./imagenes/bx-heart.svg.jpg";
import { useDispatch } from "react-redux";
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
        console.log(data);
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
    // console.log("Producto", productData);
    if (selectedSize !== "Ninguno seleccionado") {
      dispatch(addProduct({ ...product, sizes: [selectedSize.size] }));
      setAddedToCart(true);
    } else {
      Swal.fire("Selecciona un talle");
    }
  };

  const handleImageClick = (imageUrl) => {
    setSelectedImage(imageUrl);
  };

  const handleImageSize = (size) => {
    // console.log(size);
    setSelectedSize(size);
  };

  // const handleCarouselImageClick = (imageUrl) => {
  //   setCarouselSelectedImage(imageUrl);
  // };

  const dispatch = useDispatch();
  // const selectSizeTest = productData.stock.map((size, index) => size);
  // console.log("selectedSize", selectSizeTest);
  return (
    <div className=" max-lg:h-screen  w-screen h-full   ">
      {productData ? (
        <div className="   flex  flex-col items-center md:flex-row mt-36 max-lg:mt-44   px-2 md:px-8 lg:px-16 xl:px-20">
          <div className="bg-white  shadow-sm shadow-gray-300  max-lg:mt-5 flex-shrink-0 w-1/3">
            <img
              src={selectedImage}
              alt="Shoes"
              className="   object-contain"
              style={{ objectFit: "contain" }}
            />
          </div>
          <div className="flex flex-col  justify-start     relative w-full md:w-auto items-start md:ml-8">

            <div className="mt-4  dark:text-white whitespace-wrap text-xl max-lg:text-sm  font-sans font-bold tracking-[-0.7920000171661377] leading-[58px] text-[#242c31]  mr-8 md:mr-20 ">
              {productData.model}
            </div>
            <div className="whitespace-nowrap text-x font-sans tracking-[-0.0840000033378601] leading-[24px] text-[#6e7c86] mb-1 relative w-20 md:w-auto">
              {productData.gender}
            </div>
            <div className="text-xl max-lg:text-sm  dark:text-white  font-['Inter'] font-semibold tracking-[-0.7920000171661377] leading-[48px] text-[#242c31] mb-1 relative w-20 md:w-auto">
              ${productData.totalPrice}
            </div>
            <div className="m-5  ">
              <p className="font-extralight max-lg:text-sm max-sm:hidden ">
                {productData.description}
              </p>
            </div>
            <div className="flex flex-row justify-start mb-4 relative items-center">
              {/* Mostrar las imágenes adicionales */}
              <div className="flex space-x-2 flex-wrap items-center  ">
                {productData.images.map((image, index) => (
                  <div
                    key={index}
                    className="border border-gray-300 mx-2  transition-transform duration-300 hover:scale-110  hover:border-gray-500"
                    onClick={() => handleImageClick(image.imageUrl)}
                  >
                    <img
                      src={image.imageUrl}
                      alt="Shoes"
                      className="w-20 h-20 shrink-0 cursor-pointer "
                    />
                  </div>
                ))}
              </div>
            </div>
            <div className="whitespace-nowrap dark:text-white  text-xs font-sans tracking-[-0.0840000033378601] leading-[24px] text-gray-600 mb-2 relative w-20 md:w-auto font-semibold">
              Stock: {selectedSize.stockPerSize ? selectedSize.stockPerSize : 0}
            </div>
            <div className="inline dark:text-white text-gray-800 text-xs font-light mb-1 w-52 md:w-auto">
              SELECCIONA UN TALLE:
            </div>
            <div className="flex flex-row justify-start mb-2 flex-wrap relative items-center">
              {/* Mostrar las imágenes adicionales */}
              <div className="grid grid-cols-5 gap-2">
                {productData.stock.map((size, index) => (
                  <div
                    key={index}
                    className={`border-gray-200 p-1 rounded transition-transform duration-300 hover:scale-110 hover:border-gray-300 ${selectedSize === size.size
                      ? "bg-gray-200 border-solid rounded  border-sm"
                      : ""
                      }`}
                    onClick={() => handleImageSize(size)}
                  >
                    <label className="group relative flex items-center justify-center bg-gray-50 rounded-sm border-none p-3 text-base font-medium uppercase hover:bg-gray-100 focus:outline-none sm:flex-1 cursor-pointer text-gray-900 shadow-sm">
                      <input
                        type="radio"
                        name="size-choice"
                        value="3XL"
                        className="sr-only"
                        aria-labelledby="size-choice-7-label"
                      />
                      <span id="size-choice-7-label">{size.size}</span>

                      <span
                        className="pointer-events-none  -inset-px rounded-md"
                        aria-hidden="true"
                      ></span>
                    </label>
                  </div>
                ))}
              </div>
            </div>
            <p className="font-semibold text-sm">
              {`Talle seleccionado: ${selectedSize.size ? selectedSize.size : ""
                }`}
            </p>

            {addedToCart && (
              <div className="text-green-600 text-base font-normal mb-1">
                Producto agregado al carrito
              </div>
            )}
            <div className="self-stretch  flex flex-row justify-start gap-5  items-center mb-3 w-full md:w-auto">
              {selectedSize.stockPerSize > 0 ? (
                <button
                  onClick={() => clickAddHandler(productData)}
                  className="bg-black text-white cursor-pointer flex flex-col justify-center relative w-32 h-10 border-gray-400 hover:border-2 hover:border-gray-300 hover:bg-gray-800 items-center rounded-md"
                >
                  Comprar
                </button>
              ) : (
                <button className="bg-black text-white cursor-pointer flex flex-col justify-center relative w-32 h-10 border-gray-400 hover:border-2 hover:border-gray-300 hover:bg-gray-800 items-center rounded-md">
                  Sin Stock
                </button>
              )}
            </div>
            <div className="whitespace-nowrap text-sm font-['Inter'] tracking-[-0.0840000033378601] leading-[24px] text-[#252c32] self-stretch justify-start w-full md:w-auto mr-40 relative">
              {/* Shipping* */}
              <br />
              {/* <Carousel /> */}
            </div>
          </div>
        </div>
      ) : (
        <button disabled className="bg-white w-96 h-96 ml-80 mt-20 mb-96">
          <span className="loading loading-spinner loading-3xl text-black"></span>
        </button>
      )}
    </div>
  );
}

export default Detail;
