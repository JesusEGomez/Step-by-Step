import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { IoMdCloseCircleOutline } from "react-icons/io";
import { Link } from "react-router-dom";

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
      {/* Open the modal using ID.showModal() method */}
      {/* <button className="btn" onClick={() => window.my_modal_2.showModal()}>
        <label tabIndex={0} className="btn btn-ghost btn-circle ">
          <div className="indicator">
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
              {" "}
              {CartProducts.length}
            </span>
          </div>
        </label>
      </button> */}
      <dialog id="my_modal_2" className="modal">
        <form method="dialog" className="modal-box">
          <h3 className="font-bold text-lg">Hello!</h3>
          <p className="py-4">Press ESC key or click outside to close</p>
        </form>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
      <div className="dropdown  dropdown-hover dropdown-end ">
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
                {" "}
                {CartProducts.length}
              </span>
            </div>
          </label>
        </Link>
        {/* <div
          tabIndex={0}
          className="mt-3 z-[1] card card-compact dropdown-content w-52 bg-base-100 shadow"
        >
          <div className="card-body">
            <span className="font-bold text-lg">8 Items</span>
            <span className="text-info">Subtotal: $999</span>
            <div className="card-actions">
              <Link to="/checkout" className="text-black hover:no-underline ">
                <button className="btn btn-primary btn-block">View cart</button>
              </Link>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
}

export default Carrito2;

// {
//   <div className="flex-none">
//     <div className="dropdown dropdown-hover dropdown-end ">
//       <label
//         tabIndex={0}
//         className="btn btn-ghost btn-circle"
//         onClick={() => {
//           Swal.fire({
//             title: "Oops..",
//             text: "No puedes realizar la compra sin antes iniciar sesión en una cuenta verificada.",
//             icon: "error",
//             showCancelButton: false,
//             confirmButtonColor: "#3085d6",
//             cancelButtonColor: "#d33",
//             confirmButtonText: "Ir al login",
//           }).then((result) => {
//             if (result.isConfirmed) {
//               loginWithRedirect();
//             }
//           });
//         }}
//       >
//         <div className="indicator">
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             className="h-5 w-5"
//             fill="none"
//             viewBox="0 0 24 24"
//             stroke="currentColor"
//           >
//             <path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               strokeWidth="2"
//               d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
//             />
//           </svg>
//           <span className="badge badge-sm indicator-item">8</span>
//         </div>
//       </label>
//       <div
//         tabIndex={0}
//         className="mt-3 z-[1] card card-compact dropdown-content w-52 bg-base-100 shadow"
//       >
//         <div className="card-body">
//           <span className="font-bold text-lg">
//             {" "}
//             {CartProducts.map((product, i) => {
//               return (
//                 <div
//                   key={i}
//                   className="hover:bg-white hover:text-black text-gray-500 ml-1 mt-1 pl-1 py-1 w-6 h-6 md:w-8 md:h-8 border-none rounded-full text-lg md:text-xl" //se ajustan elementos del carrito el icono de eliminacion tendra un tamaño de 6x6 pixeles en pantallas pequeñas
//                 >
//                   <button
//                     className="hover:bg-white hover:text-black text-gray-500 ml-36 mt-1 pl-1 py-1 w-2 border-none rounded-full text-lg"
//                     onClick={() => handlerDelete(product.sizes[0])}
//                   >
//                     <IoMdCloseCircleOutline className="align-center" />
//                   </button>
//                   <img
//                     className="rounded-3xl w-32 hover:border-2 hover:border-white"
//                     src={product.images[0].imageUrl}
//                     alt={product.model}
//                   />
//                   <h6 className="text-base font-light py-2">{product.model}</h6>
//                   <h5 className="font-medium text-xs">
//                     <strong>Precio:</strong> ${`${product.totalPrice}`}
//                   </h5>
//                   <h5 className="font-medium text-xs">
//                     <strong>Cantidad:</strong> {` ${product.quantity}`}
//                   </h5>
//                   {product.sizes.map((size) => {
//                     return (
//                       <p className="font-medium text-xs mb-2">
//                         <strong>Talle: </strong> {` ${size}`}
//                       </p>
//                     );
//                   })}
//                 </div>
//               );
//             })}
//           </span>
//           <span className="text-info">Subtotal: $999</span>
//           <div className="card-actions">
//             <button className="btn btn-primary btn-block">View cart</button>
//           </div>
//         </div>
//       </div>
//     </div>
//   </div>;
// }
