import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
// const GET_SIZES = "http://localhost:3001/sizes";
const GET_SIZES = "https://step-by-step-production.up.railway.app/sizes";

const recorrerArray = (array, propiedad) => {
  const newArray = [];
  array.forEach((element) => {
    newArray.push(element[propiedad]);
  });
  return newArray;
};

const initialState = {
  sizes: [],
};

export const fetchSizes = createAsyncThunk(
  "size/fetchSizes", //
  async () => {
    try {
      const response = await axios.get(GET_SIZES);
      const end = response.data;
      console.log(response.data);

      // Verificar los datos recibidos
      return end;
    } catch (error) {
      return error.message;
    }
  }
);

export const sizesSlice = createSlice({
  name: "sizes",
  initialState,
  reducers: {
    getAllSizes: (state, action) => {
      console.log(action.payload);
      state.sizes = action.payload;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchSizes.fulfilled, (state, action) => {
        state.sizes = action.payload;
        console.log(action.payload);
      })
      .addCase(fetchSizes.rejected, (state, action) => {
        console.log(action.error.message);
      });
  },
});

export const getAllSizes = (state) => state.sizes.sizes;
export const getCurrentPage = (state) => state.sizes.currentPage;
export const { setCurrentPage } = sizesSlice.actions;
export default sizesSlice.reducer;
