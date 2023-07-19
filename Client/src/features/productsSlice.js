import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const URL = import.meta.env.VITE_URL;

const recorrerArray = (array, propiedad) => {
  const newArray = [];
  if (array) {
    array.forEach((element) => {
      newArray.push(element[propiedad]);
    });
    return newArray;
  }
};

const initialState = {
  filteredProducts: [],
  products: [],
  currentPage: 1,
};

export const addNewProduct = createAsyncThunk(
  "products/addNewProduct",
  async (data) => {
    // const response= await axios.post(URL,obj)
    // return response.data
    // .then((response) => response.json())
    // .then((json) => console.log(json));
    try {
      const response = await axios.post(`${URL}/products`, data);

      return response.data;
    } catch (error) {
      console.error(error.message);
    }
  }
);
export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async () => {
    try {
      const response = await axios.get(`${URL}/products`);
      return [...response.data];
    } catch (error) {
      return error.message;
    }
  }
);

export const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setCurrentPage: (state, actions) => {
      // console.log(actions);
      state.currentPage = actions.payload;
    },
    setFilteredProducts: (state, actions) => {
      state.filteredProducts = actions.payload;
      state.currentPage = 1;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchProducts.fulfilled, (state, actions) => {
        // console.log(actions.payload);
        if (!state.products.length) {
          actions.payload.forEach((element) => {
            const sizes = recorrerArray(element.sizes, "size");
            state.products.push({ ...element, sizes });
          });
        }
        if (!state.filteredProducts.length) {
          actions.payload.forEach((element) => {
            const sizes = recorrerArray(element.sizes, "size");
            state.filteredProducts.push({ ...element, sizes });
          });
        }
      })
      .addCase(fetchProducts.rejected, (state, actions) => {
        console.log(actions.error.message);
      })
      .addCase(addNewProduct.fulfilled, (state, actions) => {
        console.log(actions.payload);
      })
      .addCase(addNewProduct.rejected, (state, actions) => {
        console.error(actions.error.message);
      });
  },
});

export const getAllProducts = (state) => state.products.products;
export const getCurrentPage = (state) => state.products.currentPage;
export const getfilteredProducts = (state) => state.products.filteredProducts;

export const { setCurrentPage, setFilteredProducts } = productsSlice.actions;
export default productsSlice.reducer;
