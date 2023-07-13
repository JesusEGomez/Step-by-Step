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
import { IoMdCloseCircleOutline } from "react-icons/io"
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
    <div className="navbar bg-base-100 fixed top-0 shadow-md w-full py-3 z-10 p-10">
      <div >
        <Link to="/home" className="text-black hover:text-gray-500">
          <img
            src={logo}
            alt="logo"
            className=" w-28 h-24 rounded-sm ml-5 mt-1  "
          />
        </Link>
      </div>
      <div className="flex-auto  justify-end">
        <div className="">
          <div className="flex fixed  top-9 left-[45%] text-sm ">
            <Filters />
          </div>
        </div>

        <main className="m-5">
          {error && <p> Authentication Error </p>}
          {!error && isLoading && <span className="loading loading-spinner loading-md  fixed top-0 rigth-0"></span>}
          {!error && !isLoading && (
            <div className="fixed top-0 rigth-0">
              {" "}
              <LoginButton />
              <Profile />
              {" "}
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
                      className="flex-col justify-center items-center bg-gray-50 p-3 m-5 border-2 border-gray-200 box-border px-8 rounded-xl  "
                    >
                      <button className="hover:bg-white ml-24 w-5 border-none rounded-full text-" onClick={() => handlerDelete(product.sizes[0])}>
                        <IoMdCloseCircleOutline />
                      </button>
                      <img

                        className="rounded-3xl w-20"
                        src={product.images[0].imageUrl}
                        alt={product.model}
                      />
                      <h6>{product.model}</h6>
                      <h5>
                        <strong>{`Precio: ${product.totalPrice}`}</strong>
                      </h5>
                      <h5>
                        <strong>{`Cantidad: ${product.quantity}`}</strong>
                      </h5>
                      {product.sizes.map((size) => {
                        return <p>{`Talle: ${size}`}</p>;
                      })}
                    </div>
                  );
                })}
                <span className="text-lg">{`${CartProducts.length} items`}</span>
                <span className="text-gray-700 mx-4">{`Monto total $${total}`}</span>
              </div>


              <div className="card-actions">
                <Link to="/checkout"><button className="bg-black mx-10 px-8 text-white hover:border-gray-200  hover:bg-gray-800">Ir a pagar</button></Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
