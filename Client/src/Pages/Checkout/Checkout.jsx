import React from "react";
import { FaTrashCan } from "react-icons/fa6";
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
  console.log(total);
  const handlerDelete = (size) => {
    const product = CartProducts.find((element) => element.sizes[0] === size);
    dispatch(deleteProduct(product));
  };

  return (
    <div className="flex flex-col items-center max-lg:h-full  h-screen justify-center  mt-32 ">
      <h2 className="text-2xl font-bold dark:text-black   ">Checkout</h2>
      <div className=" rounded-lg shadow-lg p-8 h-full  w-full  md:flex">
        <div className="md:w-full flex items-center flex-col">
          <div className="bg-white rounded-lg shadow-md flex  items-center justify-center  p-4 mb-4">
            <div className=" m-6 ">
              <div className="flex flex-col justify-center   ">
                {CartProducts.map((product, i) => {
                  return (
                    <div
                      key={i}
                      className=" divide-y-2  items-center w-full flex max-lg:flex-col  "
                    >
                      <img
                        className="w-20 h-20 object-cover rounded  "
                        src={product.images[0].imageUrl}
                        alt={product.model}
                      />
                      <div className="max-lg:text-center flex flex-col xl:ml-5   ">
                        <h6 className="font-bold  dark:text-black">
                          {product.model}
                        </h6>
                        <p className="text-gray-600  dark:text-black">{`Precio: $ ${product.totalPrice}`}</p>
                        <h5 className="text-gray-600  dark:text-black">{`Cantidad: ${product.quantity}`}</h5>
                        {product.sizes.map((size) => {
                          return (
                            <p
                              className="text-gray-600  dark:text-black"
                              key={size}
                            >{`Talle: ${size}`}</p>
                          );
                        })}
                      </div>
                      <button
                        className="  dark:text-black  mt-2  border-none bg-white hover:bg-gray-100"
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
          </div>

          <div className="w-full flex justify-center">
            <p className="dark:text-black text-xl">{`Total: $${total}`}</p>
          </div>
          <MercadoPagoButton carrito={CartProducts} />
        </div>
      </div>
    </div>
  );
};

export default Checkout;
