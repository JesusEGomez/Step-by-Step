import React from "react";
import { HiMiniArrowLongRight } from 'react-icons/hi2';
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux/es/hooks/useSelector";
import {
    deleteProduct,
    getCartProducts,
    getTotalCartProducts,
} from "../../features/cartSlice";

const Checkout = () => {
    
    
    const dispatch = useDispatch();
    const total = useSelector(getTotalCartProducts);
    const CartProducts = useSelector(getCartProducts);
    
    const handlerDelete = (size) => {
        const product = CartProducts.find((element) => element.sizes[0] === size);
        console.log(product);
        dispatch(deleteProduct(product));
    };
    return (
        <div className="flex items-center justify-center w-full h-screen mt-80 mb-40 bg-gray-100">
        <div className="bg-white rounded-lg shadow-lg p-8 w-[90%] mx-4 md:mx-auto md:flex">
        {/*  <div className="md:w-2/3 md:mr-8">
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
    
    <div className="md:w-1/3">
    <h2 className="text-2xl font-bold mb-4 m-3">Carrito</h2>
    <div className="bg-white rounded-lg shadow-md p-4 mb-4">
    <div className="mb-4 m-6">
    <div className="flex items-center mb-2">
    <img
    className="w-12 h-12 object-cover rounded"
    src="ruta-imagen-producto-1.jpg"
    alt="Producto 1"
    />
    <div className="ml-4">
    <h3 className="font-bold">Producto 1</h3>
    <p className="text-gray-600">$29.99</p>
    </div>
    </div>
    <hr className="my-2" />
    <div className="flex items-center mb-2">
    <img
    className="w-12 h-12 object-cover rounded"
    src="ruta-imagen-producto-2.jpg"
    alt="Producto 2"
    />
    <div className="ml-4">
    <h3 className="font-bold">Producto 2</h3>
    <p className="text-gray-600">$39.99</p>
    </div>
    </div>
    </div>
    <hr className="my-2" />
    <div className="flex justify-between font-bold">
    <p>Subtotal:</p>
    <p>$69.98</p>
    </div>
    <div className="flex justify-between font-bold">
    <p>Total:</p>
    <p>$69.98</p>
    </div>
    </div>
    <button className="bg-black text-white font-bold py-2 px-4 mt-4 rounded w-full">
    Finalizar Compra
    </button>
    </div>
    </div>
    </div>
    );
};

export default Checkout;
