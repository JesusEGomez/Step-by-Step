import { GiRunningShoe } from 'react-icons/gi';
import Footer from '../../components/Footer/Footer';
import { Link } from 'react-router-dom';
import { SiReebok ,SiNike} from 'react-icons/si'
import {CgAdidas} from 'react-icons/cg'
const Home = () => {
    return (
        <div className=''>
        {/* carrousel
        falta link por id de producto y 
    cambiar las img por las de la base de dator */}
    
    <div className="carousel rounded-box mt-16">
    
    <div className="carousel-item max-w-xs max-h-96 object-cover ">
    <img src="https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/816e676888404f6db541aed30115eaed_9366/Zapatillas_adidas_4D_Krazed_Negro_GX9603_01_standard.jpg" alt="Burger" />
    </div>
    <div className="carousel-item  max-w-xs max-h-96	 object-cover ">
    <img src="https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/49413ab1-a863-417a-b0e8-1476c3a204cb/air-max-pulse-womens-shoes-TLnkLm.png" alt="Burger" />
    </div>
    <div className="carousel-item max-w-xs max-h-96 object-cover ">
    <img src="https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/bc4b52ea20944a4c8e56ae750169a021_9366/Zapatillas_Galaxy_6_Negro_GW4131_01_standard.jpg" alt="Burger" />
    </div>
    <div className="carousel-item max-w-xs max-h-96 object-cover ">
    <img src="https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/b3c9aea0-80b6-4858-94c9-741b6638f929/tech-hera-womens-shoes-NjvkxR.png" alt="Burger" />
    </div>
    <div className="carousel-item max-w-xs max-h-96 object-cover ">
    <img src="https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/a3a6851c80d94bfba393af5b011f795c_9366/Zapatillas_Adifom_Q_Verde_GW2218_01_standard.jpg" alt="Burger" />
    </div>
    <div className="carousel-item max-w-xs max-h-96 object-cover ">
    <img src="https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/d5e9d36d-c1c7-4298-b0e8-720c4cc33280/air-max-90-se-womens-shoes-2ZsM2w.png" alt="Burger" />
    </div>
    <div className="carousel-item max-w-xs max-h-96 object-cover ">
    <img src="https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/ed861b22275b4b42a62daf460039a6b1_9366/Zapatillas_Zntasy_Lightmotion_Beige_HP6667_01_standard.jpg" alt="Burger" />
    </div>
    </div>
    
    <div>
    
    
    </div>
    
    {/* //title// */}
    <div className='m-6 mt-9 mb-9 text-center'>
    <h1>STEP-BY-STEP</h1>
    <p style={{ display: 'inline-flex', alignItems: 'center' }}>
    todo lo que buscas en zapas <GiRunningShoe className="ml-1" />
    </p>
    <div className="flex justify-center mt-4">
    <Link to="/tienda"><button className="bg-black text-white py-2 px-4 rounded hover:border-gray-500 hover:bg-gray-500">
    COMPRAR
    </button>
    </Link>
    </div>
    </div>
    
    
    {/* banner 
    agregar 
-Link con filtros por marca*/}
<div className="flex justify-center">
<div className="w-1/3 h-96 overflow-hidden relative">
<img src="https://reebokarg.vtexassets.com/assets/vtex.file-manager-graphql/images/60761dab-3616-4721-902b-2e1d09142f19___ed7c12cfa15a0ddde6215f0f812f93f2.jpg" className="w-full h-full object-cover" />
<div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex justify-center tooltip" data-tip="Reebok">
<button className="text-4xl px-8 py-2 bg-black inline-flex items-center text-white font-bold rounded-full shadow-lg hover:bg-gray-950 hover:border-slate-200 hover:border-2  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1) duration-400 space-x-2">
<SiReebok />


</button>       
</div>
</div>
<div className="w-1/3 h-96 overflow-hidden relative">
<img src="https://media.about.nike.com/images/8221b9c2-3f4e-4864-9a50-c760d336d8e2/5.jpg?fm=jpg&q=80&fit=max&crop=2400%2C3000%2C0%2C0&w=640" className="w-full h-full object-cover" />
<div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex justify-center tooltip" data-tip="Nike">
<button className="text-4xl px-8 py-2 bg-black inline-flex items-center text-white font-bold rounded-full shadow-lg hover:bg-gray-950 hover:border-slate-200 hover:border-2  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1) duration-400 space-x-2">

<SiNike />
</button>       
</div>

</div>
<div className="w-1/3 h-96 overflow-hidden relative">
<img src="https://media.revistagq.com/photos/5e0605b0aec425000859123f/master/w_1600%2Cc_limit/unnamed.jpg" className="w-full h-full object-cover" />
<div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex justify-center tooltip" data-tip="Adidas">
<button className="text-4xl px-8 py-2 bg-black inline-flex items-center text-white font-bold rounded-full shadow-lg hover:bg-gray-950 hover:border-slate-200 hover:border-2  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1) duration-400 space-x-2">

<CgAdidas/>
</button>       
</div>
</div>
</div>




<Footer />
</div>


)
}
export default Home;
