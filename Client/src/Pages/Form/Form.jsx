import { PhotoIcon, UserCircleIcon } from '@heroicons/react/24/solid'
import React from 'react';
import { fetchBrands, getAllBrands } from '../../features/brandsSlice';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useState } from 'react';
import { fetchCategories, getAllCategories } from '../../features/categoriesSlice';
import { getAllColors } from '../../features/colorSlice';


export default function Form() {
    
    // const [brands, setBrands] = useState([]);
    const brands = useSelector(getAllBrands)
    const categories= useSelector(getAllCategories)
    const colors= useSelector(getAllColors)
    
    const dispatch = useDispatch();
    
    useEffect(() => {
        dispatch(fetchBrands());
        dispatch(fetchCategories());
    }, [dispatch]);
    
    console.log(categories)
    
    const [form, setForm] = useState({
        item_number: "",
        model: "",
        description: "",
        price: "",
        discountPercentage: "",
        gender: "",
        stock: {},
        isPublish: false,
        brand: "",
        size: [],
        images: [],// libreria de iamgenes
        categories: [],//// revisar para guardar multiple
        color: []
    })
    console.log(form)
    function handlerChange(e) {
        const { name, value } = e.target;
        
        setForm((prevState) => ({
            ...prevState,
            
            [name]: value
        }));
        
    }
    function handlerToF(e){
        setForm({ ...form, isPublish: event.target.value === "true" });
    }
    const [selectedOption, setSelectedOption] = useState(null);
    
    function handlerInputChange(e) {
        const { name, value } = e.target;
        
        setForm((prevState) => ({
            ...prevState,
            
            [name]: value
        }));
    }
    
    return (
        
        <form>
        
        
        
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
        defaultValue={''}
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
        
        <div className="sm:col-span-4">
        <label htmlFor="stock" className="block text-sm font-medium leading-6 text-gray-900">
        Cantidad
        </label>
        <div className="mt-2">
        <input
        id="stock"
        name="stock"
        autoComplete="stock"
        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
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
    {brands.map((brand, index) => (
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
        <div className="flex h-6 items-center">
        <input
        id="size"
        name="size"
        type="checkbox"
        className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
        />
        </div>
        <div className="text-sm leading-6">
        <label htmlFor="comments" className="font-medium text-gray-900">
        35
        </label>
        </div>
        </div>
        
        <div className="relative flex gap-x-3">
        <div className="flex h-6 items-center">
        <input
        id="size"
        name="size"
        type="checkbox"
        className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
        />
        </div>
        <div className="text-sm leading-6">
        <label htmlFor="comments" className="font-medium text-gray-900">
        35
        </label>
        </div>
        </div>
        <div className="relative flex gap-x-3">
        <div className="flex h-6 items-center">
        <input
        id="size"
        name="size"
        type="checkbox"
        className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
        />
        </div>
        <div className="text-sm leading-6">
        <label htmlFor="comments" className="font-medium text-gray-900">
        35
        </label>
        </div>
        </div>
        <div className="relative flex gap-x-3">
        <div className="flex h-6 items-center">
        <input
        id="size"
        name="size"
        type="checkbox"
        className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
        />
        </div>
        <div className="text-sm leading-6">
        <label htmlFor="comments" className="font-medium text-gray-900">
        35
        </label>
        </div>
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
        onChange={handlerChange}
        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
        >{categories.map((categorie, index) => (
            <option value={categorie} key={index}>{categorie}</option>
            ))}
            </select>
            </div>
            </div>
            
            </fieldset>
            <fieldset>
            <legend className="text-sm font-semibold leading-6 text-gray-900">Color</legend>
            <div className="mt-6 space-y-6">
            <div className="relative flex gap-x-3">
            <div className="flex h-6 items-center">
            <input
            id="color"
            name="color"
            type="checkbox"
            className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
            />
            </div>
            <div className="text-sm leading-6">
            <label htmlFor="comments" className="font-medium text-gray-900">
            negro
            </label>
            </div>
            </div>
            
            <div className="relative flex gap-x-3">
            <div className="flex h-6 items-center">
            <input
            id="color"
            name="color"
            type="checkbox"
            className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
            />
            </div>
            <div className="text-sm leading-6">
            <label htmlFor="comments" className="font-medium text-gray-900">
            blanco
            </label>
            </div>
            </div>
            <div className="relative flex gap-x-3">
            <div className="flex h-6 items-center">
            <input
            id="color"
            name="color"
            type="checkbox"
            className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
            />
            </div>
            <div className="text-sm leading-6">
            <label htmlFor="comments" className="font-medium text-gray-900">
            rosa
            </label>
            </div>
            </div>
            <div className="relative flex gap-x-3">
            <div className="flex h-6 items-center">
            <input
            id="color"
            name="color"
            type="checkbox"
            className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
            />
            </div>
            <div className="text-sm leading-6">
            <label htmlFor="comments" className="font-medium text-gray-900">
            gris
            </label>
            </div>
            </div>
            
            
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
    <input
    
    type="text"
    name="model"
    id="model"
    autoComplete="model"
    className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
    placeholder=".png o .jpg "
    onChange={handlerInputChange}
    value={form.images}
    />
    </div>
    </div>
    </fieldset>
    </div>
    </div>
    </div>
    
    
    
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
    </form>
    )
}
