
function Card({name, img, price, brand}) {
    return (
        <div>
            <div className="card card-compact w-96 bg-base-100 shadow-xl">
            <figure><img src={img} /></figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>{price}, {brand} </p>
                <div className="card-actions justify-end">
                </div>
            </div>
            </div>
        </div>
        )
    }
    
    export default Card