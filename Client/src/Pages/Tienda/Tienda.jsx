//filtros
import { useState, useEffect } from "react";
import {
  fetchIsPublishProducts,
  getCurrentPage,
  getfilteredProducts,
} from "../../features/productsSlice";
import { useSelector, useDispatch } from "react-redux";
import PaginationControls from "../../components/PaginationControls/PaginationControls";
import Card from "../../components/Card/Card";
import { FaHeartBroken } from "react-icons/fa"

function Tienda() {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    dispatch(fetchIsPublishProducts()).then(() => setIsLoading(false));
  }, []);

  const currentPage = useSelector(getCurrentPage);
  const products = useSelector(getfilteredProducts);
  const startIndex = (currentPage - 1) * 8;
  const endIndex = startIndex + 8;
  const displayedProducts = products.slice(startIndex, endIndex);
  const arrayLength = products.length;

  return (
    <div className="flex-col w-screen text-center mt-40">
      {isLoading ? (
        <button
          disabled
          className="bg-white w-24 h-20 ml-16 mt-20 mb-96 hover:border-none border-none"
        >
          <span className="loading loading-spinner loading-3xl text-black"></span>
        </button>
      ) : (
        <>
          {displayedProducts.length === 0 ? (
            <div className="alert shadow-lg h-72 flex flex-col justify-center items-center mx-5 mb-10">
              <FaHeartBroken className="stroke-info shrink-0 w-10 h-10" />
              <div>
                <h3 className="font-bold text-lg">No encontramos nada con esos parametros!</h3>
              </div>
            </div>
          ) : (
            <>
              <div className="flex flex-wrap h-3/4 justify-center">
                {displayedProducts.map((element, i) => (
                  <Card
                    key={i}
                    totalPrice={element.totalPrice}
                    id={element.id}
                    images={element.images[0]}
                    model={element.model}
                  />
                ))}
              </div>
              <PaginationControls className="" arrayLength={arrayLength} />
            </>
          )}
        </>
      )}
    </div>
  );
}

export default Tienda;
