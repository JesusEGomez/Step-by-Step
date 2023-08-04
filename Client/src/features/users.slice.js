import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const URL = import.meta.env.VITE_URL;

const initialState = {
  users: [],
  orderBy: "asc",
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
      const newUserData = response.data;
      return newUserData;
    } catch (error) {
      throw new Error("error.message");
    }
  }
);

// export const updateUser = createAsyncThunk("users/updateUsers",
//   async ({ id, data }) => {
//     try {
//       const response = await axios.put(`http://localhost:3001/users/${id}`, data);
//       const updatedUser = response.data;
//       return updatedUser;

//     } catch (error) {
//       throw new Error(error.message);
//     }
//   }
// )

export const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    getAllUsers: (state, action) => {
      state.users = action.payload;
    },
    toggleOrderBy: (state) => {
      state.orderBy = state.orderBy === "asc" ? "desc" : "asc";
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.users = action.payload;
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        throw new Error(action.error.message);
      });
  },
});

export const { toggleOrderBy } = usersSlice.actions;

export const getAllUsers = (state) => {
  const sortedUsers = [...state.users.users].sort((a, b) => a.id - b.id);
  return state.users.orderBy === "desc" ? sortedUsers.reverse() : sortedUsers;
};
export default usersSlice.reducer;
