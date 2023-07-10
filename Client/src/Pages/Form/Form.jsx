import { PhotoIcon, UserCircleIcon } from "@heroicons/react/24/solid";
import React from "react";
import { fetchBrands, getAllBrands } from "../../features/brandsSlice";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { useState } from "react";
import {
  fetchCategories,
  getAllCategories,
} from "../../features/categoriesSlice";
import { fetchColors, getAllColors } from "../../features/colorSlice";
import { addNewProduct, fetchProducts } from "../../features/productsSlice";
import { fetchSizes, getAllSizes } from "../../features/sizeSlice";

export default function Form() {
  const brands = useSelector(getAllBrands);
  const categories = useSelector(getAllCategories);
  const colors = useSelector(getAllColors);
  const sizes = useSelector(getAllSizes);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchBrands());
    dispatch(fetchCategories());
    dispatch(fetchColors());
    dispatch(fetchSizes());
  }, [dispatch]);

  const [Image, setImage] = useState("");
  const [countImg, setCountImg] = useState(1);

  const renderInputImg = () => {
    const inputs = [];
    for (let i = 1; i <= countImg; i++) {
      inputs.push(
        <input
          key={i}
          type="text"
          placeholder={`imagen numero #${i}`}
          onChange={handleImageChange}
          id="inputImg"
        />
      );
    }
    return inputs;
  };
  const addInputImg = () => {
    setCountImg(countImg + 1);
  };
  const lastInputImg = () => {
    if (countImg > 1) {
      setCountImg(countImg - 1);
    }
  };

  // const submitImage = () => {
  //     const data = new FormData()
  //     data.append("file", image)
  //     data.append("upload_preset", "dmtxokbw")
  //     data.append("cloud_name", "dg3hl3bit")

  //     fetch("https://api.cloudinary.com/v1_1/dg3hl3bit/image/upload",
  //     {
  //         method: "post",
  //         body: data
  //     })
  //     .then(res => res.json())
  //     .then((data) => {
  //         console.log(data);
  //     }).catch(err)
  // }
  const [uploadedImageUrl, setUploadedImageUrl] = useState("");

  const submitImage = () => {
    const data = new FormData();
    data.append("file", image);
    data.append("upload_preset", "dmtxokbw");
    data.append("cloud_name", "dg3hl3bit");

    fetch("https://api.cloudinary.com/v1_1/dg3hl3bit/image/upload", {
      method: "post",
      body: data,
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        const imageUrl = data.secure_url;
        setUploadedImageUrl(imageUrl);
        form.setFieldValue("image", imageUrl); // Setea la URL en el campo "image" del formulario
        form.handleSubmit(); // Envía el formulario
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const [form, setForm] = useState({
    item_number: "",
    model: "",
    description: "",
    price: 0,
    discountPercentage: 0,
    gender: "unisex",
    stock: {},
    isPublish: false,
    brand: "",
    size: [],
    images: [], // libreria de iamgenes
    categories: [],
    color: [],
  }).catch((error) => {
    console.log("Error en la solicitud POST:", error);
  });

  // const handleSubmit = async (e) => {
  //   e.preventDefault();

  //   try {
  //     const res = await dispatch(addNewProduct(form));
  //     console.log("Solicitud POST exitosa:", res);
  //     alert("Zapatilla creada correctamente");
  //   } catch (error) {
  //     console.log("Error en la solicitud POST:", error);
  //   }
  // };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();

  //   try {
  //     console.log(form);
  //     await axios.post("http://localhost:3001/", form);

  //     alert("form created!!");
  //     // return response;
  //   } catch (error) {
  //     alert("recipe fail", error);
  //   }

  // };

  return (
    <form onSubmit={handleSubmit}>
      <div className="space-y-12 mt-40 ml-20">
        <div className="border-b border-gray-900/10 pb-12">
          <h2 className="text-base font-semibold leading-7 text-gray-900">
            Formulario
          </h2>
          <p className="mt-1 text-sm leading-6 text-gray-600">
            Crea una nueva zapatilla.
          </p>

          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="sm:col-span-4">
              <label
                htmlFor="item_number"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Item
              </label>
              <div className="mt-2">
                <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                  <input
                    type="text"
                    name="item_number"
                    id="item_number"
                    autoComplete="item_number"
                    className="block flex-1 w-1/2 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                    placeholder="NIDR7882-700"
                    onChange={handlerInputChange}
                    value={form.item_number}
                  />
                </div>
              </div>
            </div>
            <div className="sm:col-span-4">
              <label
                htmlFor="model"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Nombre
              </label>
              <div className="mt-2">
                <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                  <input
                    type="text"
                    name="model"
                    id="model"
                    autoComplete="model"
                    className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                    placeholder="Zapatillas Urbanas Nike Court Vision Mid Winter "
                    onChange={handlerInputChange}
                    value={form.model}
                  />
                </div>
              </div>
            </div>

            <div className="col-span-fit">
              <label
                htmlFor="description"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Descripción
              </label>
              <div className="mt-2">
                <textarea
                  id="description"
                  name="description"
                  rows={3}
                  className="block w-screen  rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  onChange={handlerInputChange}
                  value={form.description}
                />
              </div>
              <p className="mt-3 text-sm leading-6 text-gray-600">
                Haz una descripción detallada de la zapatilla, recorda que esto
                lo visulizará el cliente.
              </p>
            </div>
          </div>
        </div>

        <div className="border-b border-gray-900/10 pb-12">
          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="sm:col-span-3">
              <label
                htmlFor="price"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Precio
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="price"
                  id="price"
                  autoComplete="given-name"
                  className="block w-fit rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  onChange={handlerInputChange}
                  value={form.price}
                />
              </div>
            </div>

            <div className="sm:col-span-3">
              <label
                htmlFor="discountPercentage"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Porcentaje de descuento
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="discountPercentage"
                  id="discountPercentage"
                  autoComplete="family-name"
                  className="block w-fit rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  onChange={handlerInputChange}
                  value={form.discountPercentage}
                />
              </div>
            </div>

            <div className="sm:col-span-3">
              <label
                htmlFor="gender"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Generos:
              </label>
              <div className="mt-2">
                <select
                  id="gender"
                  name="gender"
                  className="block w-fit rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                  onChange={handlerChange}
                  defaultValue={"unisex"}
                >
                  <option disabled={true} value="">
                    Select Gender
                  </option>
                  <option value={"men"}>Men</option>
                  <option value={"unisex"}>Unisex</option>
                  <option value={"women"}>Women</option>
                </select>
              </div>
              <br />
              <legend className=" text-sm font-semibold leading-6 text-gray-900">
                Publicado?
              </legend>
              <p className="mt-1 text-sm leading-6 text-gray-600">
                Modifica la visibilidad de la zapatilla para los usuarios.
              </p>

              <div className="flex items-center gap-x-3">
                <label>
                  <input
                    type="radio"
                    name="isPublish"
                    value={true}
                    checked={form.isPublish === true}
                    onChange={handlerToF}
                  />
                  Publicado
                </label>

                <label>
                  <input
                    type="radio"
                    name="isPublish"
                    value={false}
                    checked={form.isPublish === false}
                    onChange={handlerToF}
                  />
                  No publicado
                </label>
              </div>

              <div className=" mt-5 sm:col-span-3">
                <label
                  htmlFor="brand"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Marca:
                </label>
                <div className="mt-2">
                  <select
                    id="brand"
                    name="brand"
                    className="block w-fit rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                    value={form.brand}
                    onChange={handlerChange}
                  >
                    {" "}
                    <option disabled={true} value="">
                      Select a brand
                    </option>
                    {brands.map((brand, index) => (
                      <option value={brand} key={index}>
                        {brand}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-b border-gray-900/10 pb-12">
          <div className="mt-10 space-y-10">
            <fieldset>
              <legend className="text-sm font-semibold leading-6 text-gray-900">
                Talle
              </legend>
              <div className="mt-6 space-y-6">
                <div className="relative flex gap-x-3">
                  {sizes.map(({ size }) => (
                    <div key={size}>
                      <label>
                        Size {size}:
                        <input
                          type="checkbox"
                          name="size"
                          value={size}
                          checked={form.size.includes(size)}
                          onChange={handleInputChange}
                        />
                        <input
                          type="number"
                          name={`${size}`}
                          value={form.stock[size] || 1}
                          onChange={handleStockChange}
                          disabled={!form.size.includes(size)}
                        />
                      </label>
                    </div>
                  ))}
                </div>
              </div>
              <div className=" mt-5 sm:col-span-3">
                <label
                  htmlFor="categories"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Categoria:
                </label>

                <div className="mt-2">
                  <select
                    id="categories"
                    name="categories"
                    onChange={handleSelectChange}
                    className="block w-fit rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                  >
                    {" "}
                    <option disabled={true} value="">
                      Select a category
                    </option>
                    {categories.map((categorie, index) => (
                      <option value={categorie} key={index}>
                        {categorie}
                      </option>
                    ))}
                  </select>
                </div>
                {form.categories.map((categories, index) => (
                  <button
                    onClick={() => handleDelete(index)}
                    type="button"
                    key={index}
                  >
                    {categories} X
                  </button>
                ))}
              </div>
            </fieldset>
            <fieldset>
              <legend className="text-sm font-semibold leading-6 text-gray-900">
                Color
              </legend>
              <div className="mt-6 space-y-6">
                <select
                  id="color"
                  name="color"
                  className="block w-fit rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-..."
                  onChange={handlerColorChange}
                  value={form.color}
                >
                  <option disabled={true} value="">
                    Select a color
                  </option>
                  {colors.map((color) => (
                    <option key={color} value={color}>
                      {color}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                {form.color.map((color, index) => (
                  <button
                    onClick={() => handleColorDelete(index)}
                    type="button"
                    key={index}
                  >
                    {color} X
                  </button>
                ))}

                <div className="col-span-fit"></div>
              </div>
            </fieldset>
            <label htmlFor="image">Imagen:</label>

            {renderInputImg()}
            <button onClick={addInputImg} value={form.images} type="button">
              Agregar img
            </button>
            <button onClick={lastInputImg} type="button">
              Restar img
            </button>
          </div>
        </div>
      </div>

      <div className="mt-6 flex items-center justify-end gap-x-6">
        <button
          type="button"
          className="text-sm mb-9 font-semibold leading-6 text-gray-900"
        >
          Cancel
        </button>
        <button
          type="submit"
          className="rounded-md mb-9 bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          onClick={() => dispatch(addNewProduct())}
        >
          Guardar
        </button>
      </div>
    </form>
  );
}
