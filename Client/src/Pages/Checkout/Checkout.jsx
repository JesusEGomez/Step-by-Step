import React from "react";
import { FaTrashCan } from 'react-icons/fa6';
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux/es/hooks/useSelector";
import {
    deleteProduct,
    getCartProducts,
    getTotalCartProducts,
} from "../../features/cartSlice";
import MercadoPagoButton from "../../components/MercadoPagoButton/mercadoPagoButton";

const Checkout = () => {
    const dispatch = useDispatch();
    const total = useSelector(getTotalCartProducts);
    const CartProducts = useSelector(getCartProducts);
    
    const handlerDelete = (size) => {
        const product = CartProducts.find((element) => element.sizes[0] === size);
        dispatch(deleteProduct(product));
    };
    return (
        <div className="flex items-center justify-center w-full h-screen mt-80 mb-40 bg-gray-100">
        <div className="bg-white rounded-lg shadow-lg p-8 w-[90%] mx-4 md:mx-auto md:flex">
        {/* ///Form posible
        <div className="md:w-2/3 md:mr-8">
        <div className="flex flex-col w-full border-opacity-50">
        <div className="grid h-[20%] card bg-gray-50 p-6 rounded-box place-items-center">
        <h2 className="text-2xl font-medium not-italic  font-sans text-gray-700	mb-4">Información de Envío</h2>
        
        <button className="bg-gray-800 p-6 hover:bg-gray-700 hover:border-gray-500 hover:border-2 text-white font-bold py-2 px-4 rounded w-full mb-4 flex items-center justify-center">
        Iniciar Sesión <HiMiniArrowLongRight className="ml-1 w-6 h-auto" />
        </button>
        </div>
        <div className="divider">Ò</div>
        <div className="grid h-[100%] card bg-gray-50 p-6 rounded-box place-items-center">
        <div className="space-x-2 pb-4 w-[90%] p-10 mb-4">
        <h3 className="text-lg font-bold mb-2">Dirección de Envío</h3>
        <form>
        <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2" htmlFor="email">
        Email
        </label>
        <input
        className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        id="email"
        type="email"
        placeholder="Email"
        />
        </div>
        <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2" htmlFor="address">
        Dirección
        </label>
        <input
        className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        id="address"
        type="text"
        placeholder="Dirección"
        />
        </div>
        <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2" htmlFor="province">
        Provincia
        </label>
        <input
        className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        id="province"
        type="text"
        placeholder="Provincia"
        />
        </div>
        
        <button className="bg-black text-white font-bold py-2 px-4 rounded w-full">
        Registrar
        </button>
        
        </form>
        </div>
        </div>
        </div> 
    </div>*/}
    
    <div className="md:w-full">
    <h2 className="text-2xl font-bold mb-4 m-3">Carrito</h2>
    <div className="bg-white rounded-lg shadow-md p-4 mb-4">
    <div className="mb-4 m-6">
    
    <div className="flex flex-col place-items-center mb-2">
    {CartProducts.map((product, i) => {
        return (
            <div key={i} className="relative ml-4 w-full mb-6">
            <img
            className="w-24 h-24 object-cover rounded absolute top-0 left-0"
            src={product.images[0].imageUrl}
            alt={product.model}
            />
            <h6 className="font-bold ml-28">{product.model}</h6>
            <p className="text-gray-600 ml-28">{`$ ${product.totalPrice}`}</p>
            <h5 className="text-gray-600 ml-28">{`Cantidad: ${product.quantity}`}</h5>
            {product.sizes.map((size) => {
                return <p className="text-gray-600 ml-28" key={size}>{`Talle: ${size}`}</p>;
            })}
            <button
            className="absolute top-0 right-0 mt-2 mr-2"
            onClick={() => handlerDelete(product.sizes[0])}
            >
            <FaTrashCan />
            </button>
            <hr className="mb-4 mt-6" />
            </div>
            );
        })}
        </div>
        
        
        </div>
        <hr className="my-2" />
        <div className="flex justify-start p-3 font-bold">
        <p className="mr-2">Cantidad de productos:</p>
        {`${CartProducts.length} items`}
        </div>
        <div className="flex justify-start p-3 font-bold">
        <p className="mr-2">Total:</p>
        <p>{` $${total}`}</p>
        
        </div>
        </div>
        <button className="bg-black text-white  font-bold py-2 px-4  rounded w-5/6 content-center mx-20 my-2 mt-4 hover:bg-gray-800 ">
        
        <MercadoPagoButton carrito={CartProducts} />
        </button>
        </div>
        </div>
        </div>
        );
    };
    
    export default Checkout;
    