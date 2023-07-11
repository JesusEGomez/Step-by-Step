import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getAllProducts } from "../../features/productsSlice";
import { setFilteredProducts } from "../../features/productsSlice";
import { getAllColors } from "../../features/colorSlice";
import { getAllCategories } from "../../features/categoriesSlice";
import { getAllBrands } from "../../features/brandsSlice";
// import {getAllSizes} from "../../features/sizesSlice";//& Get all sizes
import { fetchBrands } from "../../features/brandsSlice";
import { fetchCategories } from "../../features/categoriesSlice";
import { fetchColors } from "../../features/colorSlice";
import { useNavigate, useLocation } from "react-router-dom";
import { BiSearchAlt2 } from "react-icons/bi"

const sizes = [34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45];

const Filters = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const allProducts = useSelector(getAllProducts);

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

  console.log("brandsList", brandsList);

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
    console.log("productsCopy", productsCopy);

    if (productsCopy.length > 0) {
      if (filterPanel.name !== "") {
        productsCopy = productsCopy.filter((p) =>
          p.model?.toLowerCase().includes(filterPanel.name.toLowerCase())
        );
        console.log("productsCopy", productsCopy);
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

  console.log("filterPanel", filterPanel);

  const handleChange = (e) => {
    e.preventDefault();
    setFilterPanel(() => {
      return { ...filterPanel, [e.target.name]: e.target.value };
    });
  };

  const handleClickAll = (e) => {
    e.preventDefault();
    setFilterPanel(() => {
      return { ...filterPanel };
    });
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
    e.preventDefault();
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
  };

  return (
    <div >
      <div className="flex space-x-2">
        <button className="link" onClick={handleClickAll}>
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
      </div>


      {location.pathname === "/tienda" && (
        <div className="link flex justify-center -ml-80 mb-6s">
          <div className="relative">
            <input
              name="name"
              value={filterPanel.name}
              onChange={handleChange}
              placeholder="Search..."
              className="p-2 pl-8 mx-2"
            ></input>
            <span className="absolute top-2 left-2 text-gray-300 pointer-events-none">
              <BiSearchAlt2 className="text-lg mt-0.5 m-2" />
            </span>
          </div>

          <div className="flex items-center">
            <select
              id="brand"
              name="brand"
              onChange={handleChange}
              value={brandSelect}
              defaultValue={brandSelect}
              className="p-2 mx-2"
            >
              <option value={"none"}>Brand</option>

              {brandsList?.map((b, i) => (
                <option key={i} value={b}>
                  {b}
                </option>
              ))}
            </select>
          </div>

          <div className="flex items-center">
            <select
              id="category"
              name="category"
              onChange={(e) => handleChange(e)}
              value={categorySelect}
              className="p-2 mx-2"
            >
              <option value={"none"} defaultValue={"Filter by Category"}>
                Category
              </option>
              {categoriesList?.map((c, i) => (
                <option key={i} value={c}>
                  {c}
                </option>
              ))}
            </select>
          </div>

          <div className="flex items-center">
            <select
              id="color"
              name="color"
              onChange={(e) => handleChange(e)}
              value={colorSelect}
              className="p-2 mx-2"
            >
              {" "}
              <option value={"none"} defaultValue={"Filter by color"}>
                Color
              </option>
              {colorsList?.map((c, i) => (
                <option key={i} value={c}>{c}</option>
              ))}
            </select>
          </div>

          <div className="flex items-center">
            <select id="price" name="price" onChange={(e) => handleChange(e)} className="p-2 mx-2 ">
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

          <button onClick={handleResetClick} className="p-2 mx-2 hover:border-2 hover:border-gray-500 ">
            <span>Reset</span>
          </button>
        </div>


      )}
    </div>
  );
};

export default Filters;
