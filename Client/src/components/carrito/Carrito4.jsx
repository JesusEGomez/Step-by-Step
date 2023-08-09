import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { IoMdCloseCircleOutline } from "react-icons/io";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { TiDelete } from 'react-icons/ti';

import {
  deleteProduct,
  getCartProducts,
  getTotalCartProducts,
} from "../../features/cartSlice";

import { useAuth0 } from "@auth0/auth0-react";

function Carrito2() {
  const { loginWithRedirect, isAuthenticated, isLoading, error, user } =
    useAuth0();
  const dispatch = useDispatch();
  const total = useSelector(getTotalCartProducts);
  const CartProducts = useSelector(getCartProducts);
  console.log(CartProducts)

  const handlerDelete = (size) => {
    const product = CartProducts.find((element) => element.sizes[0] === size);
    // console.log(product);
    dispatch(deleteProduct(product));
  };

  const handleClick = (e) => {
    e.preventDefault();
  };
  return (
    <div className="flex-none">
      {isAuthenticated && user.email_verified ?
        <div className="dropdown dropdown-hover dropdown-bottom dropdown-end ml-3 ">
          <Link to="/checkout" className="text-black hover:no-underline ">
            <label tabIndex={0} className="btn btn-ghost btn-circle ">
              <div className="indicator dark:text-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>

                <span className="badge badge-sm indicator-item">

                  {CartProducts.length}
                </span>

              </div>
            </label>

          </Link>
          <ul tabIndex={0} className="dropdown-content   menu p-5 transition-all shadow bg-base-100 rounded-box w-72  ">
            {CartProducts.map((product) => {
              return (
                <li>
                  <div>
                    <img src={product.images[0].imageUrl} width={"50px"} alt={product.model} />
                    <p className="text-s">{product.model}</p>
                    <div className="flex flex-col">
                      <p>catidad: <span className="font-bold">{product.quantity}</span></p>
                      <p>precio: $<span className="font-bold">{product.totalPrice}</span></p>
                      <p>talle: <span className="font-bold">{product.sizes[0]}</span></p>

                    </div>

                    <TiDelete
                      onClick={() => handlerDelete(product.sizes[0])}
                      className="text-xl hover:bg-white hover:rounded-full hover:text-black " />

                  </div>
                </li>
              )
            })}

          </ul>

        </div>
        :
        <div
          className="dropdown dropdown-hover dropdown-bottom dropdown-end ml-3 "
        >
          <label tabIndex={0} className="btn btn-ghost btn-circle ">
            <div
              onClick={() => {
                Swal.fire({
                  title: "Oops..",
                  text: "No puedes realizar la compra sin antes iniciar sesión en una cuenta verificada.",
                  icon: "error",
                  showCancelButton: false,
                  confirmButtonColor: "#3085d6",
                  cancelButtonColor: "#d33",
                  confirmButtonText: "Ir al login",
                }).then((result) => {
                  if (result.isConfirmed) {

                    loginWithRedirect()
                  }
                });
              }}
              className="indicator dark:text-white">

              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
              <span className="badge badge-sm indicator-item">

                {CartProducts.length}
              </span>
            </div>
          </label>
          <ul tabIndex={0} className="dropdown-content   menu p-5 transition-all shadow bg-base-100 rounded-box w-72  ">
            {CartProducts.map((product) => {
              return (
                <li>
                  <div>
                    <img src={product.images[0].imageUrl} width={"50px"} alt={product.model} />
                    <p className="text-s">{product.model}</p>
                    <div className="flex flex-col">
                      <span>{`catidad: ${product.quantity}`}</span>
                      <span>{`Precio: ${product.totalPrice}`}</span>
                      <span>{`talle: ${product.sizes[0]}`}</span>

                    </div>

                    <TiDelete
                      onClick={() => handlerDelete(product.sizes[0])}
                      className="text-xl hover:bg-white hover:rounded-full hover:text-black " />

                  </div>
                </li>
              )
            })}

          </ul>
        </div>}
    </div>
  );
}

export default Carrito2;

// 
