import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const URL = import.meta.env.VITE_URL;

const initialState = {
  orders: [],
};

export const fetchOrders = createAsyncThunk("orders/fetchOrders", async () => {
  try {
    const response = await axios.get(`${URL}/orders`);
    const data = response.data;
    console.log(data);

    return data;
  } catch (error) {
    
    return error.message;
  }
});

export const ordersSlices = createSlice({
  name: "orders",
  initialState,
  reducers: {
    getOrders: (state, action) => {
      console.log(action.payload);
      state.orders = action.payload;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchOrders.fulfilled, (state, action) => {
        state.orders = action.payload;
      })
      .addCase(fetchOrders.rejected, (state, action) => {
        console.log(action.error.message);
      });
  },
});

export const getOrders = (state) => state.orders.orders;
export default ordersSlices.reducer;
