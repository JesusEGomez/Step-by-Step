
import { useNavigate } from 'react-router-dom';
import landingvideo from '../../assets/zapatillas.mp4_Trim.mp4';
import styles from "./Landing.module.css";
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { clearCart } from "../../features/cartSlice";
import Swal from 'sweetalert2';



function Landing() {
  const navigate = useNavigate();

  const handleExploreClick = () => {
    navigate('/home');
  };
  const dispatch = useDispatch();
  const cart = JSON.parse(localStorage.getItem("cart"));
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const status = urlParams.get("status");
    const orderId = urlParams.get("payment_id");
    if (status === "approved") {
      const user = JSON.parse(localStorage.getItem("user"));
      const sendOrder = async () => {
        const order = cart.map((product) => {
          const { id, sizes, quantity } = product;
          const newOrden = {
            productId: id,
            size: sizes[0],
            quantity,
            ordenNumber: orderId,
            paymentStatus: status,
            email: user?.email,
          };
          return newOrden;
        });
        response = await axios.post(`${URL}/orders/create`, order);
      };
      sendOrder();
      console.log("orden", cart);
      dispatch(clearCart());
       Swal.fire(
        'Felicitaciones!',
        'Tu compra fue realizada correctamente!',
        'success'
      )
    }
  },[])


  return (
    <div className={`relative ${styles.container}`}>
      <video
        className={`absolute top-0 left-0 w-full h-full object-cover ${styles.video}`}
        autoPlay
        loop
        muted
        playsInline
      >
        <source src={landingvideo} type="video/mp4" />
      </video>

      <div className={`flex flex-col items-center justify-center h-full text-white relative font-sans ${styles.content}`}>
        <h1 className={`text-5xl font-extrabold font-sans ${styles.title}`}>Step-By-Step</h1>
        <p>&nbsp;</p>
        <p className={`text-xl font-sans ${styles.description}`}>Descubre lo ultimo en zapatillas</p>
        <button
          className={`px-4 py-2 mt-4 text-white bg-black rounded hover:bg-black-800 hover:border-2 hover:border-gray-300 font-sans ${styles.button}`}
          onClick={handleExploreClick}
        >
          Explorar colección
        </button>
      </div>
    </div>
  );
}

export default Landing;
