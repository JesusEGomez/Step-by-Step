import { PhotoIcon, UserCircleIcon } from '@heroicons/react/24/solid'
import React from 'react';
import { fetchBrands, getAllBrands } from '../../features/brandsSlice';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useState } from 'react';
import { fetchCategories, getAllCategories } from '../../features/categoriesSlice';
import { fetchColors, getAllColors } from '../../features/colorSlice';


export default function Form() {

    // const [brands, setBrands] = useState([]);
    const brands = useSelector(getAllBrands)
    const categories = useSelector(getAllCategories)
    const colors = useSelector(getAllColors)
    const sizes = [34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45]

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchBrands());
        dispatch(fetchCategories());
        dispatch(fetchColors());
    }, [dispatch]);

    console.log(colors)
    console.log(categories)
    const [countImg, setCountImg] = useState(1);

    const [form, setForm] = useState({
        item_number: "",
        model: "",
        description: "",
        price: "",
        discountPercentage: "",
        gender: "unisex",
        stock: {},
        isPublish: false,
        brand: "",
        size: [],
        images: [],// libreria de iamgenes
        categories: [],//// revisar para guardar multiple
        color: []//revisar el checked 
    })



    const renderInputImg = () => {
        const inputs = [];
        for (let i = 1; i <= countImg; i++) {
            inputs.push(
                <input
                    key={i}
                    type="text"
                    placeholder={`imagen número #${i}`}
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



    console.log(form)
    function handlerChange(e) {
        const { name, value } = e.target;

        setForm((prevState) => ({
            ...prevState,

            [name]: value
        }));

    }
    function handlerToF(e) {
        setForm({ ...form, isPublish: event.target.value === "true" });
    }


    function handlerInputChange(e) {
        const { name, value, type } = e.target;

        if (type === 'checkbox') {
            const isChecked = e.target.checked;
            const checkedValue = parseInt(value, 10);
            const updatedColors = isChecked
                ? [...form.colors, checkedValue]
                : form.colors.filter((color) => color !== checkedValue);

            setForm((prevState) => ({
                ...prevState,
                colors: updatedColors,
            }));
        } else {
            setForm((prevState) => ({
                ...prevState,
                [name]: value,
            }));
        }
    }

    function handleImageChange(event) {
        const { value } = event.target;
        setForm((prevState) => ({
            ...prevState,
            images: [value], // Siempre asigna un array con una sola imagen
        }));
    }

    const handleInputChange = (e) => {
        const { name, value } = e.target;

        if (name === "size") {
            const selectedSizes = form.size;
            const sizeValue = parseInt(value);
            const updatedSizes = selectedSizes.includes(sizeValue)
                ? selectedSizes.filter((size) => size !== sizeValue)
                : [...selectedSizes, sizeValue];

            setForm({
                ...form,
                size: updatedSizes
            });
        } else {
            setForm({
                ...form,
                [name]: value
            });
        }
    };

    const handleStockChange = (e) => {
        const { name, value } = e.target;
        setForm({
            ...form,
            stock: {
                ...form.stock,
                [name]: parseInt(value)
            }
        });
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        {
            dispatch(postPruduct(form))
                .then((res) => {
                    console.log("Solicitud POST exitosa:", res);
                    alert("Zapatilla creada correctamente");
                })
                .catch((error) => {
                    console.log("Error en la solicitud POST:", error);
                });
        }
    };

    function handleSelectChange(event) {
        const selectedOptions = Array.from(event.target.selectedOptions, (option) => option.value);
        setForm((prevState) => ({
            ...prevState,
            categories: selectedOptions,
        }));
    }

    function handleColorChange(event) {
        const selectedOptions = Array.from(event.target.selectedOptions, (option) => option.value);
        setForm((prevState) => ({
            ...prevState,
            color: selectedOptions,
        }));
    }


    const deleteButtonColor = (index) => {
        setForm((prevState) => {
            const updatedColor = [...prevState.color];
            updatedColor.splice(index, 1);
            return {
                ...prevState,
                color: updatedColor,
            };
        });
    };

    return (

        <form onSubmit={handleSubmit}>
            <div className="space-y-12 mt-40 ml-20">
                <div className="border-b border-gray-900/10 pb-12">
                    <h2 className="text-base font-semibold leading-7 text-gray-900">Formulario</h2>
                    <p className="mt-1 text-sm leading-6 text-gray-600">
                        Crea una nueva zapatilla.
                    </p>

                    <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                        <div className="sm:col-span-4">
                            <label htmlFor="item_number" className="block text-sm font-medium leading-6 text-gray-900">
                                Item
                            </label>
                            <div className="mt-2">
                                <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                                    {/* <span className="flex select-none items-center pl-3 text-gray-500 sm:text-sm">workcation.com/</span> */}
                                    <input
                                        type="text"
                                        name="item_number"
                                        id="item_number"
                                        autoComplete="item_number"
                                        className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                                        placeholder="NIDR7882-700"
                                        onChange={handlerInputChange}
                                        value={form.item_number}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="sm:col-span-4">
                            <label htmlFor="model" className="block text-sm font-medium leading-6 text-gray-900">
                                Nombre
                            </label>
                            <div className="mt-2">
                                <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                                    {/* <span className="flex select-none items-center pl-3 text-gray-500 sm:text-sm">workcation.com/</span> */}
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

                        <div className="col-span-full">
                            <label htmlFor="description" className="block text-sm font-medium leading-6 text-gray-900">
                                Descripción
                            </label>
                            <div className="mt-2">
                                <textarea
                                    id="description"
                                    name="description"
                                    rows={3}
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"

                                    onChange={handlerInputChange}
                                    value={form.description}
                                />
                            </div>
                            <p className="mt-3 text-sm leading-6 text-gray-600">Haz una descripción detallada de la zapatilla, recorda que esto lo visulizará el cliente.</p>
                        </div>


                    </div>
                </div>

                <div className="border-b border-gray-900/10 pb-12">

                    <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                        <div className="sm:col-span-3">
                            <label htmlFor="price" className="block text-sm font-medium leading-6 text-gray-900">
                                Precio
                            </label>
                            <div className="mt-2">
                                <input
                                    type="text"
                                    name="price"
                                    id="price"
                                    autoComplete="given-name"
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    onChange={handlerInputChange}
                                    value={form.price}
                                />
                            </div>
                        </div>

                        <div className="sm:col-span-3">
                            <label htmlFor="discountPercentage" className="block text-sm font-medium leading-6 text-gray-900">
                                Porcentaje de descuento
                            </label>
                            <div className="mt-2">
                                <input
                                    type="text"
                                    name="discountPercentage"
                                    id="discountPercentage"
                                    autoComplete="family-name"
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    onChange={handlerInputChange}
                                    value={form.discountPercentage}
                                />
                            </div>
                        </div>



                        <div className="sm:col-span-3">
                            <label htmlFor="gender" className="block text-sm font-medium leading-6 text-gray-900">
                                Generos:
                            </label>
                            <div className="mt-2">
                                <select
                                    id="gender"
                                    name="gender"
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                                    onChange={handlerChange}
                                    defaultValue={"unisex"}
                                >
                                    <option value={"men"}>Men</option>
                                    <option value={"unisex"}>Unisex</option>
                                    <option value={"women"}>Women</option>
                                </select>
                            </div>
                            <br />
                            <legend className=" text-sm font-semibold leading-6 text-gray-900">Publicado?</legend>
                            <p className="mt-1 text-sm leading-6 text-gray-600">Modifica la visibilidad de la zapatilla para los usuarios.</p>

                            <div className="flex items-center gap-x-3">
                                {/* <input
        id="true"
        name="isPublish"
        type="radio"
        value={true}
        checked={selectedOption === true}
        onChange={handlerToF}
        className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
        />
        <label htmlFor="true" className="block text-sm font-medium leading-6 text-gray-900">
        Si.
        </label>
        </div>
        
        <div className="flex items-center gap-x-3">
        <input
        id="false"
        name="isPublish"
        type="radio"
        value={false}
        checked={selectedOption === false}
        onChange={handlerToF}
        className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
        />
        <label htmlFor="false" className="block text-sm font-medium leading-6 text-gray-900">
        No.
    </label> */}
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
                                <label htmlFor="brand" className="block text-sm font-medium leading-6 text-gray-900">
                                    Marca:

                                </label>
                                <div className="mt-2">
                                    <select
                                        id="brand"
                                        name="brand"
                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                                        value={form.brand}
                                        onChange={handlerChange}
                                    >
                                        {brands?.map((brand, index) => (
                                            <option value={brand} key={index}>{brand}</option>
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
                            <legend className="text-sm font-semibold leading-6 text-gray-900">Talle</legend>
                            <div className="mt-6 space-y-6">
                                <div className="relative flex gap-x-3">
                                    {sizes.map((size) => (
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
                                                    value={(!form.size.includes(size)) || (form.stock[size] || 1)}
                                                    onChange={handleStockChange}
                                                    disabled={!form.size.includes(size)}
                                                />
                                            </label>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className=" mt-5 sm:col-span-3">
                                <label htmlFor="categories" className="block text-sm font-medium leading-6 text-gray-900">
                                    Categoria:
                                </label>
                                <div className="mt-2">
                                    <select
                                        id="categories"
                                        name="categories"
                                        onChange={""}
                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                                    >
                                        {categories.map((categorie) => (
                                            <option value={categorie} key={categorie}>
                                                {categorie}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                            </div>

                        </fieldset>
                        <fieldset>
                            <legend className="text-sm font-semibold leading-6 text-gray-900">Color</legend>
                            <div className="mt-6 space-y-6">
                                <select
                                    id="color"
                                    name="color"
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-..."
                                    onChange={handleColorChange}
                                    value={form.color}
                                >
                                    <option value="">Select a color</option>
                                    {colors?.map((color) => (
                                        <option key={color} value={color}>
                                            {color}
                                        </option>
                                    ))}
                                </select>
                                {/* {form.color.map(el => { <button >{el}</button> })} */}

                                {form.color.map((color, index) => (
                                    <button key={index} onClick={() => deleteButtonColor(index)}>{color} X</button>
                                ))}



                            {/* <div className="col-span-full">
                <label htmlFor="photo" className="block text-sm font-medium leading-6 text-gray-900">
                Photo
                </label>
                <div className="mt-2 flex items-center gap-x-3">
                <UserCircleIcon className="h-12 w-12 text-gray-300" aria-hidden="true" />
                <button
                type="button"
                className="rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                >
                Cambiar                                        </button>
                </div>
                </div>
            */}
                            <div className="col-span-full">
                                <label htmlFor="images" className="block text-sm font-medium leading-6 text-gray-900">
                                    Subir imagenes del producto
                                </label>
                                {/* <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
            <div className="text-center">
            <PhotoIcon className="mx-auto h-12 w-12 text-gray-300" aria-hidden="true" />
            <div className="mt-4 flex text-sm leading-6 text-gray-600">
            <label
            htmlFor="file-upload"
            className="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
            >
            <span>Upload a file</span>
            <input id="file-upload" name="file-upload" type="file" className="sr-only" />
            </label>
            <p className="pl-1">or drag and drop</p>
            </div>
            <p className="text-xs leading-5 text-gray-600">PNG, JPG, GIF up to 10MB</p>
            </div>
        </div> */}
                                <label htmlFor="image">Imagen:</label>
                                <input
                                    type="text"
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-..."
                                    value={form.images}
                                    onChange={handleImageChange}
                                    name="images"
                                />

                                {renderInputImg()}
                                <button type='button' onClick={addInputImg}>agregar img</button>
                                <button type='button' onClick={lastInputImg}>restar img</button>

                            </div>
                    </div>
                </fieldset>
            </div>
        </div>
            </div >



        <div className="mt-6 flex items-center justify-end gap-x-6">
            <button type="button" className="text-sm mb-9 font-semibold leading-6 text-gray-900">
                Cancel
            </button>
            <button
                type="submit"
                className="rounded-md mb-9 bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
                Guardar
            </button>
        </div>
        </form >
    )
}
