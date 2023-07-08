import { configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import productsReducer from "../features/productsSlice";
import brandsReducer from "../features/brandsSlice";
import categoriesReducer from "../features/categoriesSlice";
import colorsReducer from "../features/colorSlice";
import cartReducer from "../features/cartSlice";
import sizesReducer from '../features/sizeSlice'

const store = configureStore({
  reducer: {
    products: productsReducer,
    brands: brandsReducer,
    categories: categoriesReducer,
    colors: colorsReducer,
    cart: cartReducer,
    sizes:sizesReducer,
  },
  middleware: [thunk],
});

export default store;
