import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
const GET_BRAND_URL = "http://localhost:3001/brands";

const recorrerArray = (array, propiedad) => {
  const newArray = [];
  array.forEach((element) => {
    newArray.push(element[propiedad]);
  });
  return newArray;
};

const initialState = {
  brands: [],
};

export const fetchBrands = createAsyncThunk(
  "brands/fetchBrands", //
  async () => {
    try {
      const response = await axios.get(GET_BRAND_URL);
      const end = response.data;
      //   console.log(response.data); // Verificar los datos recibidos
      return end;
    } catch (error) {
      return error.message;
    }
  }
);

export const brandsSlice = createSlice({
  name: "brands",
  initialState,
  reducers: {
    getAllBrands: (state, action) => {
      //   console.log(action.payload);
      state.brands = action.payload;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchBrands.fulfilled, (state, action) => {
        state.brands = action.payload;
      })
      .addCase(fetchBrands.rejected, (state, action) => {
        // console.log(action.error.message);
      });
  },
});

export const getAllBrands = (state) => state.brands.brands;
export default brandsSlice.reducer;
