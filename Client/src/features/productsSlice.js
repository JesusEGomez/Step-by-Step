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
  isPublishProducts: [],
};

export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async () => {
    try {
      const response = await axios.get(`${URL}/products`);
      const data = response.data;
      return [...data];
    } catch (error) {
      throw new Error(error.message);
    }
  }
);

export const fetchIsPublishProducts = createAsyncThunk(
  "isPublishProducts/fetchIsPublishProducts",
  async () => {
    try {
      const response = await axios.get(`${URL}/products/published`);
      const data = response.data;
      return [...data];
    } catch (error) {
      throw new Error(error.message);
    }
  }
);


export const setSelectedBrand = createAsyncThunk(
  "products/setSelectedBrand",
  async (brandName, { getState, dispatch }) => {
    const state = getState();
    const products = getAllProducts(state);

    // If products are not fetched yet, wait for fetchProducts to fulfill
    if (products.length === 0) {
      try {
        await dispatch(fetchProducts());
      } catch (error) {
        throw new Error(error.message);
      }
    }

    // Now that products are available, apply the brand filter
    const selectedBrand = brandName;
    if (selectedBrand === "all") {
      dispatch(setFilteredProducts([...products]));
    } else {
      dispatch(
        setFilteredProducts(
          products.filter((product) => product.brand === selectedBrand)
        )
      );
    }

    return selectedBrand;
  }
);

export const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setCurrentPage: (state, actions) => {
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
        if (!state.products.length) {
          actions.payload.forEach((element) => {
            const sizes = recorrerArray(element.sizes, "size");
            state.products.push({ ...element, sizes });
          });
        }
      })
      .addCase(fetchProducts.rejected, (state, actions) => {
        console.log(actions.error.message);
      })
      .addCase(fetchIsPublishProducts.fulfilled, (state, actions) => {
        if (!state.isPublishProducts.length) {
          actions.payload.forEach((element) => {
            const sizes = recorrerArray(element.sizes, "size");
            state.isPublishProducts.push({ ...element, sizes });
          });
        }
        if (!state.filteredProducts.length) {
          actions.payload.forEach((element) => {
            const sizes = recorrerArray(element.sizes, "size");
            state.filteredProducts.push({ ...element, sizes });
          });
        }
      })
      .addCase(fetchIsPublishProducts.rejected, (state, actions) => {
        console.log(actions.error.message);
      })
      .addCase(setSelectedBrand.fulfilled, (state, actions) => {
        const selectedBrand = actions.payload;
        console.log(actions.payload);
        if (selectedBrand === "all") {
          state.filteredProducts = [...state.isPublishProducts];
        } else {
          state.filteredProducts = state.isPublishProducts.filter(
            (product) => product.brand === selectedBrand
          );
        }
        state.currentPage = 1;
      })
      .addCase(setSelectedBrand.rejected, (state, actions) => {
        console.log(actions.error.message);
      });
  },
});



export const getIsPublishProducts = (state) => state.products.isPublishProducts;
export const getAllProducts = (state) => state.products.products;
export const getCurrentPage = (state) => state.products.currentPage;
export const getfilteredProducts = (state) => state.products.filteredProducts;

export const { setCurrentPage, setFilteredProducts } = productsSlice.actions;
export default productsSlice.reducer;

