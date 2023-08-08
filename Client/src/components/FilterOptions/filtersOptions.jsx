import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getIsPublishProducts } from "../../features/productsSlice";
import { setFilteredProducts } from "../../features/productsSlice";
import { getAllColors } from "../../features/colorSlice";
import { getAllCategories } from "../../features/categoriesSlice";
import { getAllBrands } from "../../features/brandsSlice";
// import {getAllSizes} from "../../features/sizesSlice";//& Get all sizes
import { fetchBrands } from "../../features/brandsSlice";
import { fetchCategories } from "../../features/categoriesSlice";
import { fetchColors } from "../../features/colorSlice";
import { useNavigate, useLocation } from "react-router-dom";
import { BiSearchAlt2 } from "react-icons/bi";

// import { Link } from "react-router-dom";

const sizes = [34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45];

const Filters = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const allProducts = useSelector(getIsPublishProducts);

  const [brandSelect, setBrandSelect] = useState("");
  const [colorSelect, setColorSelect] = useState("");
  const [categorySelect, setCategorySelect] = useState("");
  const [genderSelect, setGenderSelect] = useState("");
  const [priceSelect, setPriceSelect] = useState("");

  useEffect(() => {
    dispatch(fetchBrands());
    dispatch(fetchCategories());
    dispatch(fetchColors());
  }, [dispatch]);

  //* Trae las listas de opciones.
  let brandsList = useSelector(getAllBrands);
  let categoriesList = useSelector(getAllCategories);
  let colorsList = useSelector(getAllColors);
  // let sizesList = useSelector(getAllSizes); //&& get all sizes
  let genderList = ["men", "women", "unisex"];

  // console.log("brandsList", brandsList);

  const [filterPanel, setFilterPanel] = useState({
    name: "",
    brand: "none",
    category: "none",
    gender: "none",
    price: "none",
    color: "none",
    size: "none",
  });

  useEffect(() => {
    let productsCopy = [...allProducts];
    // console.log("productsCopy", productsCopy);

    if (productsCopy.length > 0) {
      if (filterPanel.name !== "") {
        productsCopy = productsCopy.filter((p) =>
          p.model?.toLowerCase().includes(filterPanel.name.toLowerCase())
        );
        // console.log("productsCopy", productsCopy);
      }

      if (filterPanel.brand !== "none") {
        productsCopy = productsCopy.filter((p) =>
          p.brand?.includes(filterPanel.brand)
        );
      }

      if (filterPanel.gender !== "none") {
        productsCopy = productsCopy.filter((p) =>
          p.gender.includes(filterPanel.gender)
        );
      }

      if (filterPanel.category !== "none") {
        productsCopy = productsCopy.filter((p) => {
          return p.categories?.includes(filterPanel.category);
        });
      }

      if (filterPanel.color !== "none") {
        productsCopy = productsCopy.filter((p) =>
          p.colors?.includes(filterPanel.color)
        );
      }

      if (filterPanel.size !== "none") {
        productsCopy = productsCopy.filter((p) =>
          p.sizes?.includes(filterPanel.size)
        );
      }

      // totalPrice????
      if (filterPanel.price !== "none") {
        if (filterPanel.price === "lower") {
          productsCopy = productsCopy.sort((a, b) => a.price - b.price);
        } else {
          productsCopy = productsCopy.sort((a, b) => b.price - a.price);
        }
      }

      dispatch(setFilteredProducts(productsCopy));
    }
  }, [filterPanel]);

  // console.log("filterPanel", filterPanel);

  const handleChange = (e) => {
    e.preventDefault();
    setFilterPanel(() => {
      return { ...filterPanel, [e.target.name]: e.target.value };
    });
  };

  const handleClickTienda = (e) => {
    e.preventDefault();

    navigate("/tienda");
  };

  const handleClickTodos = (e) => {
    e.preventDefault();
    setFilterPanel(() => {
      return { ...filterPanel };
    });
    handleResetClick();
    navigate("/tienda");
  };

  const handleClickMen = (e) => {
    e.preventDefault();
    setFilterPanel(() => {
      return { ...filterPanel, gender: "men" };
    });
    navigate("/tienda");
  };

  const handleClickWomen = (e) => {
    e.preventDefault();
    setFilterPanel(() => {
      return { ...filterPanel, gender: "women" };
    });
    navigate("/tienda");
  };

  const handleClickUnisex = (e) => {
    e.preventDefault();
    setFilterPanel(() => {
      return { ...filterPanel, gender: "unisex" };
    });
    navigate("/tienda");
  };

  const handleResetClick = (e) => {
    setFilterPanel({
      name: "",
      brand: "none",
      category: "none",
      gender: "none",
      price: "none",
      color: "none",
      size: "none",
    });
    setBrandSelect("");
    setCategorySelect("");
    setBrandSelect("");
    setGenderSelect("");
    setPriceSelect("");
    setColorSelect("");
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className=" flex flex-row  max-lg:items-center max-lg:w-screen">
      {location.pathname === "/home" &&
        <div className="flex w-full justify-center">
          <button className="link" onClick={handleClickTienda}>
            TIENDA
          </button>
          <button className="link" onClick={handleClickWomen}>
            MUJER
          </button>
          <button className="link" onClick={handleClickMen}>
            VARON
          </button>
          <button className="link" onClick={handleClickUnisex}>
            UNISEX
          </button>
          <button className="link" onClick={handleClickTodos}>
            TODOS
          </button>
        </div>
      }

      <div className="max-lg:w-full content-center flex "   >
        {location.pathname === "/tienda" && (
          <details className="dropdown z-30 m-2 w-64  flex  max-lg:w-screen ">
            <summary className="btn">Filtros</summary>
            <ul className=" dropdown-content  bg-base-100 rounded-box w-full flex flex-col items-center max-lg:w-screen ">
              <li>
                <div className="relative">
                  <input
                    name="name"
                    value={filterPanel.name}
                    onChange={handleChange}
                    placeholder="Search..."
                    className="p-2 pl-8 mr-1"
                  ></input>
                  <span className=" absolute top-2 left-2 text-gray-300 pointer-events-none">
                    <BiSearchAlt2 className="text-lg mt-0.5 m-2  " />
                  </span>
                </div>
              </li>
              <li>
                <button className="link" onClick={handleClickMen}>
                  VARON
                </button>
              </li>
              <li>
                <button className="link" onClick={handleClickWomen}>
                  MUJER
                </button>
              </li>
              <li>
                <button className="link" onClick={handleClickUnisex}>
                  UNISEX
                </button>
              </li>
              <li>
                <button className="link" onClick={handleClickTodos}>
                  TODOS
                </button>
              </li>

              <li>
                <div className="link">
                  <select
                    id="brand"
                    name="brand"
                    onChange={handleChange}
                    className="p-2 mr-1"
                  >
                    <option value={"none"}>Brand</option>

                    {brandsList?.map((b, i) => (
                      <option key={i} value={b}>
                        {b}
                      </option>
                    ))}
                  </select>
                </div>
              </li>
              <li>
                {" "}
                <div className="link">
                  <select
                    id="category"
                    name="category"
                    onChange={(e) => handleChange(e)}
                    // value={categorySelect}
                    className="p-2 mr-1"
                  >
                    <option value={"none"}>Category</option>
                    {categoriesList?.map((c, i) => (
                      <option key={i} value={c}>
                        {c}
                      </option>
                    ))}
                  </select>
                </div>
              </li>
              <li>
                {" "}
                <div className=" link ">
                  <select
                    id="color"
                    name="color"
                    onChange={(e) => handleChange(e)}
                    // value={colorSelect}
                    className="p-2 mr-1"
                  >
                    {" "}
                    <option value={"none"}>Color</option>
                    {colorsList?.map((c, i) => (
                      <option key={i} value={c}>
                        {c}
                      </option>
                    ))}
                  </select>
                </div>
              </li>
              <li>
                {" "}
                <div className="link ">
                  <select
                    id="price"
                    name="price"
                    onChange={(e) => handleChange(e)}
                    className="p-2 mr-1 "
                  >
                    <option key="none" value="none">
                      Precio
                    </option>
                    <option key="higher" value="higher">
                      Mayor a menor
                    </option>
                    <option key="lower" value="lower">
                      Menor a mayor
                    </option>
                  </select>
                </div>
              </li>
              <li>
                {" "}
                <button
                  onClick={handleResetClick}
                  className="p-2 border-gray-500 hover:border-gray-700 w-40 mb-5   "
                >
                  <span>Reset</span>
                </button>
              </li>
            </ul>
          </details>
        )}
      </div>
    </div>
  );
};

export default Filters;
