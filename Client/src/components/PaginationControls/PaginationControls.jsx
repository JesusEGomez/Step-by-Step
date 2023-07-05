import { useSelector, useDispatch } from "react-redux"
import { getCurrentPage, setCurrentPage } from "../../features/productsSlice"
const PaginationControls = ({ arrayLength }) => {
    const currentPage = useSelector(getCurrentPage)
    const dispatch = useDispatch()
    const totalPages = Math.ceil(arrayLength / 8)

    const handlePreviousClick = () => {
        if (currentPage > 1) {
            dispatch(setCurrentPage(currentPage - 1))
        }
    };

    const handleNextClick = () => {
        if (currentPage < totalPages) {
            dispatch(setCurrentPage(currentPage + 1))
        }
    };


    return (
        <div className="join">
            <button className="join-item btn" onClick={handlePreviousClick}>«</button>
            <button className="join-item btn">Página {currentPage} de {totalPages}</button>
            <button className="join-item btn" onClick={handleNextClick}>»</button>
        </div>
    )
}
export default PaginationControls