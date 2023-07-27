import { useState, useEffect } from "react";
import axios from "axios";
import { useAuth0 } from '@auth0/auth0-react';


const URL = import.meta.env.VITE_URL;

const MercadoPagoButton = ({ carrito }) => {
    const { user, isAuthenticated } = useAuth0()
    const [url, setUrl] = useState(null);
    const [loading, setLoading] = useState(true);
    console.log("este es el carrtio", carrito);

    useEffect(() => {
        const generateLink = async () => {
            setLoading(true)
            try {
                if (isAuthenticated) {

                    const { data: preference } = await axios.post(`${URL}/checkout`, {
                        carrito
                    });
                    // const { data: preference } = await axios.post("https://step-by-step-production.up.railway.app/checkout", {
                    //     carrito
                    // });

                    setUrl(preference.url);
                }
            } catch (error) {
                console.error(error);
            }
            setLoading(false);
        };
        console.log("este es el carrito", carrito);
        localStorage.setItem("user", JSON.stringify(user));
        generateLink();
    }, [carrito]);
    return (
        <div className="flex text-center" >
            {loading ? (
                <button disabled className="bg-black h-1">
                    <span className="loading loading-spinner loading-md text-white"></span>
                </button>
            ) : (
                isAuthenticated ? <a href={url} className="bg-black text-white  font-bold py-2 px-4  rounded w-5/6 content-center mx-20 my-2 mt-4 hover:bg-gray-800 ">
                    Finalizar compra
                </a> : <p className="no-underline text-white visited:text-white">Debes estar Registrado para comprar</p>

            )}
        </div>
    );
};

export default MercadoPagoButton;
