// productsSlice.js

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

export const setSelectedBrand = createAsyncThunk(
  "products/setSelectedBrand",
  async (brandName) => {
    return brandName;
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
      .addCase(setSelectedBrand.fulfilled, (state, actions) => {
        const selectedBrand = actions.payload;
        if (selectedBrand === "all") {
          state.filteredProducts = [...state.products];
        } else {
          state.filteredProducts = state.products.filter(
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

export const getAllProducts = (state) => state.products.products;
export const getCurrentPage = (state) => state.products.currentPage;
export const getfilteredProducts = (state) => state.products.filteredProducts;

export const { setCurrentPage, setFilteredProducts } = productsSlice.actions;
export default productsSlice.reducer;

// import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// import axios from "axios";

// const URL = import.meta.env.VITE_URL;

// const recorrerArray = (array, propiedad) => {
//   const newArray = [];
//   if (array) {
//     array.forEach((element) => {
//       newArray.push(element[propiedad]);
//     });
//     return newArray;
//   }
// };

// const initialState = {
//   filteredProducts: [],
//   products: [],

//   currentPage: 1,
// };

// export const fetchProducts = createAsyncThunk(
//   "products/fetchProducts",
//   async () => {
//     try {
//       const response = await axios.get(`${URL}/products`);
//       const data = response.data;
//       // const filteredIsPublished = data.filter((p) => p.isPublish === false)
//       // return filteredIsPublished;
//       return [...response.data];
//     } catch (error) {
//       throw new Error(error.message);
//     }
//   }
// );

// export const productsSlice = createSlice({
//   name: "products",
//   initialState,
//   reducers: {
//     setCurrentPage: (state, actions) => {
//       // console.log(actions);
//       state.currentPage = actions.payload;
//     },
//     setFilteredProducts: (state, actions) => {
//       state.filteredProducts = actions.payload;
//       state.currentPage = 1;
//     },
//   },
//   extraReducers(builder) {
//     builder
//       .addCase(fetchProducts.fulfilled, (state, actions) => {
//         // console.log(actions.payload);
//         if (!state.products.length) {
//           actions.payload.forEach((element) => {
//             const sizes = recorrerArray(element.sizes, "size");
//             state.products.push({ ...element, sizes });
//           });
//         }
//         if (!state.filteredProducts.length) {
//           actions.payload.forEach((element) => {
//             const sizes = recorrerArray(element.sizes, "size");
//             state.filteredProducts.push({ ...element, sizes });
//           });
//         }
//       })
//       .addCase(fetchProducts.rejected, (state, actions) => {
//         console.log(actions.error.message);
//       });
//   },
// });

// export const getAllProducts = (state) => state.products.products;
// export const getCurrentPage = (state) => state.products.currentPage;
// export const getfilteredProducts = (state) => state.products.filteredProducts;

// export const { setCurrentPage, setFilteredProducts } = productsSlice.actions;
// export default productsSlice.reducer;
