function cardItem({ model, images, clickHandler, id }) {
    console.log(model)
    return (
        <div className="card  w-96 bg-base-100 shadow-xl m-5">
            <figure><img src={images} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title min-h-16">{model}</h2>
                <div className="card-actions justify-end ">
                    <button onClick={() => clickHandler(id)} className="btn bg-black text-white">Agregar</button>
                </div>
            </div>
        </div>
    );
}

export default cardItem;
