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
        <div className="flex items-center justify-center w-full h-full mt-32 bg-gray-100">
            <div className="bg-white rounded-lg shadow-lg p-8 w-[90%] mx-4 md:mx-auto md:flex">

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
                                                className="absolute top-0 right-0 mt-2 mr-2 border-none bg-white hover:bg-gray-100"
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


                    <MercadoPagoButton carrito={CartProducts} />

                </div>
            </div>
        </div>
    );
};

export default Checkout;
