import { GiRunningShoe } from 'react-icons/gi';
import Footer from '../../components/Footer/Footer';
import { Link } from 'react-router-dom';
import { SiReebok, SiNike } from 'react-icons/si';
import { CgAdidas } from 'react-icons/cg';
import Card from '../../components/Card/Card';

const Home = () => {
  return (
    <div>
      <div className='card  w-96 bg-base-100 shadow-xl m-5'>
        <Card></Card>
      </div>
      

      <div className="m-6 mt-9 mb-9 text-center">
        <h1>STEP-BY-STEP</h1>
        <p style={{ display: 'inline-flex', alignItems: 'center' }}>
          todo lo que buscas en zapas <GiRunningShoe className="ml-1" />
        </p>
        <div className="flex justify-center mt-4">
          <Link to="/tienda">
            <button className="bg-black text-white py-2 px-4 rounded hover:border-gray-500 hover:bg-gray-500">
              Añadir al Carrito
            </button>
          </Link>
        </div>
      </div>

      {/* banner agregar -Link con filtros por marca */}
      <div className="flex justify-center">
        <div className="w-1/3 h-96 overflow-hidden relative">
          <img
            src="https://reebokarg.vtexassets.com/assets/vtex.file-manager-graphql/images/60761dab-3616-4721-902b-2e1d09142f19___ed7c12cfa15a0ddde6215f0f812f93f2.jpg"
            className="w-full h-full object-cover"
          />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex justify-center tooltip" data-tip="Reebok">
            <button className="text-4xl px-8 py-2 bg-black inline-flex items-center text-white font-bold rounded-full shadow-lg hover:bg-gray-950 hover:border-slate-200 hover:border-2  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1) duration-400 space-x-2">
              <SiReebok />
            </button>
          </div>
        </div>
        <div className="w-1/3 h-96 overflow-hidden relative">
          <img
            src="https://media.about.nike.com/images/8221b9c2-3f4e-4864-9a50-c760d336d8e2/5.jpg?fm=jpg&q=80&fit=max&crop=2400%2C3000%2C0%2C0&w=640"
            className="w-full h-full object-cover"
          />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex justify-center tooltip" data-tip="Nike">
            <button className="text-4xl px-8 py-2 bg-black inline-flex items-center text-white font-bold rounded-full shadow-lg hover:bg-gray-950 hover:border-slate-200 hover:border-2  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1) duration-400 space-x-2">
              <SiNike />
            </button>
          </div>
        </div>
        <div className="w-1/3 h-96 overflow-hidden relative">
          <img
            src="https://media.revistagq.com/photos/5e0605b0aec425000859123f/master/w_1600%2Cc_limit/unnamed.jpg"
            className="w-full h-full object-cover"
          />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex justify-center tooltip" data-tip="Adidas">
            <button className="text-4xl px-8 py-2 bg-black inline-flex items-center text-white font-bold rounded-full shadow-lg hover:bg-gray-950 hover:border-slate-200 hover:border-2  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1) duration-400 space-x-2">
              <CgAdidas />
            </button>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Home;
