//filtros
import { fetchProducts, getAllProducts } from "../../features/productsSlice";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { getCurrentPage } from "../../features/productsSlice";
import PaginationControls from "../../components/PaginationControls/PaginationControls";
import { addProduct } from "../../features/cartSlice";
import Card from "../../components/Card/Card";
import Filters from "../../components/FilterOptions/filtersOptions";
function Tienda() {
  const dispatch = useDispatch();
  //order by price
  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  const currentPage = useSelector(getCurrentPage);
  const products = useSelector(getAllProducts);
  const startIndex = (currentPage - 1) * 8;
  const endIndex = startIndex + 8;
  const displayedProducts = products.slice(startIndex, endIndex);
  let arrayLength = products.length;

  console.log("displayProdcuts", displayedProducts);
  return (
    <div className="flex-col text-center mt-32 ">
      <div className="flex flex-wrap h-3/4 justify-center">
        {displayedProducts.map((element) => {
          return (
            <Card
              totalPrice={element.totalPrice}
              id={element.id}
              images={element.images[0]}
              model={element.model}
            />
          );
        })}
      </div>
      <PaginationControls className="" arrayLength={arrayLength} />
    </div>
  );
}

export default Tienda;
