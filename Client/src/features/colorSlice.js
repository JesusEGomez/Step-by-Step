import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
const GET_COLORS = "http://localhost:3001/colors";
// const GET_COLORS = "https://step-by-step-production.up.railway.app/colors";

const recorrerArray = (array, propiedad) => {
  const newArray = [];
  array.forEach((element) => {
    newArray.push(element[propiedad]);
  });
  return newArray;
};

const initialState = {
  colors: [],
};

export const fetchColors = createAsyncThunk(
  "colors/fetchColors", //
  async () => {
    try {
      const response = await axios.get(GET_COLORS);
      const end = response.data;
      //   console.log(response.data);

      // Verificar los datos recibidos
      return end;
    } catch (error) {
      return error.message;
    }
  }
);

export const colorsSlice = createSlice({
  name: "colors",
  initialState,
  reducers: {
    getAllColors: (state, action) => {
      console.log(action.payload);
      state.colors = action.payload;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchColors.fulfilled, (state, action) => {
        state.colors = action.payload;
      })
      .addCase(fetchColors.rejected, (state, action) => {
        cts.push(element);
        if (!state.colors.length) {
          action.payload.forEach((element) => {
            state.colors.push(element);
          });
        }
        console.log("action.payload", action.payload);
      });
  },
});

export const getAllColors = (state) => state.colors.colors;
export const getCurrentPage = (state) => state.colors.currentPage;
export const { setCurrentPage } = colorsSlice.actions;
export default colorsSlice.reducer;
