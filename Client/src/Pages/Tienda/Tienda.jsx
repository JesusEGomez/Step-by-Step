//filtros
import { fetchProducts, getAllProducts, setCurrentPage } from "../../features/productsSlice"
import { useSelector } from "react-redux/es/hooks/useSelector"
import { useDispatch } from "react-redux"
import { useEffect } from "react"
import { getCurrentPage } from "../../features/productsSlice"
import PaginationControls from "../../components/PaginationControls/PaginationControls"

function Tienda() {
    const dispatch = useDispatch()
    //order by price
    useEffect(() => {
        dispatch(fetchProducts())
    }, [])
    const currentPage = useSelector(getCurrentPage)
    const products = useSelector(getAllProducts)
    let arrayLength = products.length
    const startIndex = (currentPage - 1) * 8;
    const endIndex = startIndex + 8;
    const displayedProducts = products.slice(startIndex, endIndex);

    console.log(displayedProducts)
    return (
        <div className="flex-col text-center mt-20 ">
            <div className="flex flex-wrap h-3/4 w-screen  justify-center">

                {displayedProducts?.map((element) => {
                    return <div className="card  w-96 bg-base-100 shadow-xl m-5">
                        <figure><img src={element.images[0]} alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">{element.model}</h2>
                            {/* <p>{element.description}</p> */}
                            <div className="card-actions justify-end">
                                <button className="btn btn-primary">Buy Now</button>
                            </div>
                        </div>
                    </div>
                })}
            </div>
            <PaginationControls className="" arrayLength={arrayLength} />
        </div>

    )
}

export default Tienda