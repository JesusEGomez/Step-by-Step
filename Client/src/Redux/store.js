import { configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import productsReducer from "../features/productsSlice";
import cartReducer from "../features/cartSlice";

const store = configureStore({
  reducer: {
    products: productsReducer,
    cart: cartReducer,
  },
  middleware: [thunk],
});

export default store;
