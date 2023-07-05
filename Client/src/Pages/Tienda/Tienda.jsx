//filtros
import { fetchProducts, getAllProducts } from "../../features/productsSlice"
import { useSelector } from "react-redux/es/hooks/useSelector"
import { useDispatch } from "react-redux"
import { useEffect } from "react"

function Tienda() {
    const dispatch = useDispatch()
    //order by price
    useEffect(() => {
        dispatch(fetchProducts())
    }, [])
    const products = useSelector(getAllProducts)
    console.log(products)
    return (
        <div className="flex flex-wrap h-3/4 w-screen items-center justify-center">

            {products.map((element) => {
                return <div className="card  w-96 bg-base-100 shadow-xl m-5">
                    <figure><img src="https://www.stockcenter.com.ar/on/demandware.static/-/Sites-365-dabra-catalog/default/dw61742a4b/products/NI_DC3729-502/NI_DC3729-502-1.JPG" alt="Shoes" /></figure>
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
    )
}

export default Tienda