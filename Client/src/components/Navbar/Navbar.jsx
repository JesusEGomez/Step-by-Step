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
import Swal from "sweetalert2";
import Carrito from "../carrito/Carrito";
import Carrito2 from "../carrito/Carrito2";
import Carrito3 from "../carrito/Carrito3";
import Carrito4 from "../carrito/Carrito4";

const NavBar = () => {
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

  return (
    <div className="navbar flex flex-row  max-lg:flex-col justify-between  bg-base-100  fixed shadow-md   z-10 ">
      <div className=" ">
        <Link to="/home" className="text-black  hover:text-gray-500">
          <img
            src={logo}
            alt="logo"
            className="w-16 h-16 md:w-24 md:h-24 lg:w-28 max-lg:h-28 rounded-xl ml-5 mt-1 max-lg:ml-2 max-lg:w-32 dark:bg-white dark:shadow-g dark:shadow-sm" //se ajusto que el logo sea responsive segun el tamaño de la pantalla
          />
        </Link>
      </div>

      <div >
        <Filters />
      </div>

      <div className=" flex flex-row   ">
        <div >
          <main >
            {error && <p> Authentication Error </p>}
            {!error && isLoading && (
              <span className="loading loading-spinner loading-md "></span>
            )}
            {!error && !isLoading && (
              <div className="">
                <LoginButton />
                <Profile />
              </div>
            )}
          </main>
        </div>
        {/* <div>
            <Carrito3 />
          </div> */}

        {/* <div>
            <Carrito2 />
          </div> */}
        <div>
          <Carrito4 />
        </div>
        <div>{/* <Carrito /> */}</div>
      </div>
    </div>
  );
};

export default NavBar;


