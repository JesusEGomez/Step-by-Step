import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import { useSelector } from "react-redux/es/hooks/useSelector";
import {
  deleteProduct,
  getCartProducts,
  getTotalCartProducts,
} from "../../features/cartSlice";
import { useDispatch } from "react-redux";
import Filters from "../FilterOptions/filtersOptions";
import LoginButton from "../Login/auth0/LoginButton";
import Profile from "../Login/auth0/Profile";
import { useAuth0 } from "@auth0/auth0-react";
import { IoMdCloseCircleOutline } from "react-icons/io";
const NavBar = () => {
  const { isLoading, error } = useAuth0();
  const dispatch = useDispatch();
  const total = useSelector(getTotalCartProducts);
  const CartProducts = useSelector(getCartProducts);

  const handlerDelete = (size) => {
    const product = CartProducts.find((element) => element.sizes[0] === size);
    console.log(product);
    dispatch(deleteProduct(product));
  };

  return (
    <div className="navbar bg-base-100 fixed top-0 shadow-md py-3 z-10">
      <div className="flex-1">
        <Link to="/home" className="text-black hover:text-gray-500">
          <img
            src={logo}
            alt="logo"
            className=" w-28 h-24 rounded-sm ml-5 mt-1  "
          />
        </Link>
      </div>
      <div className="flex-auto justify-between">
        <div className="">
          <div className="flex space-x-2 fixed top-9 left-40 text-sm ">
            <Filters />
          </div>
        </div>

        <main>
          {error && <p> Authentication Error </p>}
          {!error && isLoading && (
            <span className="loading loading-spinner loading-md  fixed top-0 rigth-0"></span>
          )}
          {!error && !isLoading && (
            <div className="fixed top-0 rigth-0">
              {" "}
              <LoginButton />
              <Profile />{" "}
            </div>
          )}
        </main>
        <div className="dropdown dropdown-end flex ">
          <label tabIndex={0} className="btn btn-ghost btn-circle">
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
                {CartProducts.length}
              </span>
            </div>
          </label>
          <div
            tabIndex={0}
            className="mt-1 z-[1] card max-h-96 overflow-auto card-compact dropdown-content w-64 bg-base-100 shadow"
          >
            <div className="card-body">
              <div className="">
                {CartProducts.map((product, i) => {
                  return (
                    <div
                      key={i}
                      className=" bg-gray-50 pb-2 m-2 border-2 border-gray-200 box-border px-4 rounded-xl  "
                    >
                      <button
                        className="hover:bg-white hover:text-black text-gray-500 ml-40 mt-1 mr-1 pl-1 py-1 w-2 border-none rounded-full text-lg"
                        onClick={() => handlerDelete(product.sizes[0])}
                      >
                        <IoMdCloseCircleOutline className="align-center" />
                      </button>
                      <img
                        className="rounded-3xl w-32 hover:border-2 hover:border-white "
                        src={product.images[0].imageUrl}
                        alt={product.model}
                      />
                      <h6 className=" text-base font-light py-2">
                        {product.model}
                      </h6>
                      <h5 className="font-medium text-xs">
                        <strong>Precio:</strong> ${`${product.totalPrice}`}
                      </h5>
                      <h5 className="font-medium text-xs">
                        <strong>Cantidad:</strong>
                        {` ${product.quantity}`}
                      </h5>
                      {product.sizes.map((size) => {
                        return (
                          <p className="font-medium text-xs mb-2">
                            {" "}
                            <strong>Talle: </strong> {` ${size}`}
                          </p>
                        );
                      })}
                    </div>
                  );
                })}
                <div className="flex flex-col bg-gray-50 rounded-md p-2">
                  <span className="text-sm font-medium ml-1 mb-2">{`${CartProducts.length} items`}</span>
                  <span className="">
                    <p className="text-gray-700  font-bold ml-1 ">{`Monto total $${total}`}</p>
                  </span>
                </div>
              </div>

              <div className="card-actions">
                <Link to="/checkout">
                  <button className="bg-black mx-10 px-8 text-white hover:border-gray-200  hover:bg-gray-800">
                    Ir a pagar
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
