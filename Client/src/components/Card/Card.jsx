import { Link } from "react-router-dom";

function Card({ model, images, totalPrice, id }) {
  // console.log(model)
  return (
    <div className="card  w-80 bg-base-100 dark:bg-white dark:shadow-gray-300  dark:shadow-sm shadow-xl m-5">
      <Link to={`/home/${id}`}>
        <figure className="cursor-pointer ">
          <img width={"180px"} src={images} alt="Shoes" />
        </figure>
      </Link>
      <div className="card-body text-left justify-between ">
        <h2 className="card-title min-h-8 dark:text-black " >{model}</h2>
        <div className="card-actions">
          <span className="font-bold text-xl dark:text-black  ">{`$${totalPrice}`}</span>
        </div>
      </div>
    </div>
  );
}

export default Card;
