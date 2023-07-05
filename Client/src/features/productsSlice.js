import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const GET_URL = "http://localhost:3001/products";

const initialState = {
  products: [],
};

export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async () => {
    try {
      const response = await axios.get(GET_URL);
      return [...response.data];
    } catch (error) {
      return error.message;
    }
  }
);

export const productsSlice = createSlice({
  name: "products",
  initialState,
  reducer: {},
  extraReducers(builder) {
    builder
      .addCase(fetchProducts.fulfilled, (state, actions) => {
        actions.payload.forEach((element) => {
          state.products.push(element);
        });
      })
      .addCase(fetchProducts.rejected, (state, actions) => {
        console.log(actions.error.message);
      });
  },
});
export const getAllProducts = (state) => state.products.products;
export const {} = productsSlice.actions;
export default productsSlice.reducer;
