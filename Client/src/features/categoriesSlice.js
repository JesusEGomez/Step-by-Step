import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
// const GET_CATEGORIE = "http://localhost:3001/categories";
const GET_CATEGORIE = "https://step-by-step-production.up.railway.app/categories";

const recorrerArray = (array, propiedad) => {
  const newArray = [];
  array.forEach((element) => {
    newArray.push(element[propiedad]);
  });
  return newArray;
};

const initialState = {
  categories: [],
};

export const fetchCategories = createAsyncThunk(
  "categories/fetchCategories", //
  async () => {
    try {
      const response = await axios.get(GET_CATEGORIE);
      const end = response.data;
      //   console.log(response.data);

      // Verificar los datos recibidos
      return end;
    } catch (error) {
      return error.message;
    }
  }
);

export const categoriesSlice = createSlice({
  name: "categories",
  initialState,
  reducers: {
    getAllCategories: (state, action) => {
      //   console.log(action.payload);
      state.categories = action.payload;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchCategories.fulfilled, (state, action) => {
        state.categories = action.payload;
      })
      .addCase(fetchCategories.rejected, (state, action) => {
        console.log(action.error.message);
      });
  },
});

export const getAllCategories = (state) => state.categories.categories;
export const getCurrentPage = (state) => state.categories.currentPage;
export const { setCurrentPage } = categoriesSlice.actions;
export default categoriesSlice.reducer;
