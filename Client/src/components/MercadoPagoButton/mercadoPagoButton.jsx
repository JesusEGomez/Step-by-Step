import { useState, useEffect } from "react"
import axios from "axios";



const MercadoPagoButton = ({ carrito }) => {
    const [url, setUrl] = useState(null)
    const [loading, setLoading] = useState(true);
    console.log("este es el carrtio", carrito)

    useEffect(() => {
        const generateLink = async () => {
            setLoading(true)
            try {
                const { data: preference } = await axios.post("http://localhost:3001/checkout", {
                    carrito
                });

                setUrl(preference.url);
            } catch (error) {
                console.error(error);
            }
            setLoading(false)
        };
        console.log("este es el carrito", carrito)
        // localStorage.setItem("temporalCarrito", JSON.stringify(carrito));
        generateLink();
    }, [carrito]);
    return (
        <div>
            {loading ? (
                <button disabled className="bg-black h-1" >
                    <span className="loading loading-spinner loading-md text-white"></span>
                </button>
            ) : (
                <a href={url} className="no-underline text-white visited:text-white">
                    Finalizar compra 
                </a>
            )}
        </div>
    )
}

export default MercadoPagoButton