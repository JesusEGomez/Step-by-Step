import { configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import productsReducer from "../features/productsSlice";

const store = configureStore({
  reducer: {
    products: productsReducer,
  },
  middleware: [thunk],
});

export default store;
