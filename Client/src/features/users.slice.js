import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const URL = import.meta.env.VITE_URL;

const initialState = {
  users: [],
  orderBy: 'asc'
};

export const fetchUsers = createAsyncThunk("users/fetchUsers", async () => {
  try {
    const response = await axios.get(`${URL}/users`);
    const data = response.data;
    return data;
  } catch (error) {
    throw new Error(error.message);
  }
});


export const addNewUsers = createAsyncThunk(
  "users/addNewUsers",
  async (data) => {
    try {
      const response = await axios.post(`${URL}/users`, data);
      const end = response.data;
      return end;
    } catch (error) {
      throw new Error(error.message);
    }
  }
);

export const usersSlices = createSlice({
  name: "users",
  initialState,
  reducers: {
    getAllUsers: (state, action) => {
      state.users = action.payload;
    },
    toggleOrderBy: (state) => {
      state.orderBy = state.orderBy === "asc" ? "desc" : "asc";
    }
  },
  extraReducers(builder) {
    builder
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.users = action.payload;
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        console.log(action.error.message);
      });
  },
});
// 


export const getAllUsers = (state) => state.users.users;

export default usersSlices.reducer;