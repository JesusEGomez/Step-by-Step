import { Link } from "react-router-dom";
import logo from '../../assets/logo.png'
import { useSelector } from "react-redux/es/hooks/useSelector";
import { deleteProduct, getCartProducts, getTotalCartProducts } from "../../features/cartSlice";
import { useDispatch } from "react-redux";


const NavBar = () => {
    const dispatch = useDispatch()
    const total = useSelector(getTotalCartProducts)
    const CartProducts = useSelector(getCartProducts)

    const handlerDelete = (id) => {
        const product = CartProducts.find((element) => element.id === id)
        console.log(product)
        dispatch(deleteProduct(product))
    }

    return (
        <div className="navbar bg-base-100 fixed top-0 shadow-md  z-10">
            <div className="flex-1">
                <Link to="/home" className="text-black hover:text-gray-500"><img src={logo} alt="logo" className=" w-28 h-24 rounded-sm ml-5 mt-1  " /></Link>
            </div>
            <div className="flex-auto justify-between">
                <div className="" >
                    <Link to="/tienda" className="link">MUJER</Link>
                    <Link to="/tienda" className="link">VARON</Link>
                    <Link to="/tienda" className="link">UNISEX</Link>
                    <Link to="/tienda" className="link">ALL</Link>
                    <Link to="/form" className="link">CREATE</Link>
                </div>

                <div className="dropdown dropdown-end">
                    <label tabIndex={0} className="btn btn-ghost btn-circle">
                        <div className="indicator">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                            <span className="badge badge-sm indicator-item">{CartProducts.length}</span>
                        </div>
                    </label>
                    <div tabIndex={0} className="mt-3 z-[1] card max-h-80 overflow-auto card-compact dropdown-content w-64 bg-base-100 shadow">
                        <div className="card-body">
                            <span className="font-bold text-lg">{`${CartProducts.length} items`}</span>
                            <span className="text-info">{`Precio $${total}`}</span>
                            <div>
                                {CartProducts.map((product, i) => {
                                    return <div key={i} className="flex-col justify-center items-center p-5 m-5">
                                        <h6>{product.model}</h6>
                                        <h5><strong>{`Precio: ${product.totalPrice}`}</strong></h5>
                                        <h5><strong>{`Cantidad: ${product.quantity}`}</strong></h5>
                                        <div>{product.sizes.map((size) => {
                                            // console.log(size
                                            return <h6 className="font-bold">{`Talle: ${size}`}</h6>
                                        })}</div>

                                        <button onClick={() => handlerDelete(product.id)} className="">Quitar</button>
                                    </div>

                                })}
                            </div>
                            <div className="card-actions">
                                <button className="btn btn-primary btn-block">View cart</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
};

export default NavBar;
