import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const URL = import.meta.env.VITE_URL;

const initialState = {
  comments: [],
};

export const fetchComments = createAsyncThunk(
  "comments/fetchComments",
  async () => {
    try {
      const response = await axios.get(`${URL}/comments`);
      const data = response.data;
      console.log(data);

      return data;
    } catch (error) {
      return error.message;
    }
  }
);

export const commentsSlices = createSlice({
  name: "comments",
  initialState,
  reducers: {
    getComments: (state, action) => {
      console.log(action.payload);
      state.comments = action.payload;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchComments.fulfilled, (state, action) => {
        state.comments = action.payload;
      })
      .addCase(fetchComments.rejected, (state, action) => {
        console.log(action.error.message);
      });
  },
});

export const getComments = (state) => state.comments.comments;
export default commentsSlices.reducer;
