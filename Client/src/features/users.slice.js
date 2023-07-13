import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const URL_USERS = 'http://localhost:3001/users';


const initialState = {
    users: {},
}

export const fetchUsers = createAsyncThunk('users/fetchUsers',
    async () => {
        try {
            const response = await axios.get(URL_USERS);
            const data = response.data;
            // console.log(data);

            return data;
        } catch (error) {
            return error.message;
        }
    }
)

export const usersSlices = createSlice({
    name: "users",
    initialState,
    reducers: {
        getAllUsers: (state, action) => {
            console.log(action.payload)
            state.users = action.payload;
        },
    },
    extraReducers(builder) {
        builder
            .addCase(fetchUsers.fulfilled, (state, action) => {
                state.users = action.payload
            })
            .addCase(fetchUsers.rejected, (state, action) => {
                console.log(action.error.message);
            });
    }
})

export const addNewUsers = createAsyncThunk('users/addNewUsers',
    async (data) => {
        try {
            const response = await axios.post(URL_USERS, data)
            const end = response.data;
            return end;

        } catch (error) {
            throw new Error(error.message);
        }
    })

export const getAllUsers = (state) => state.users.users;
export default usersSlices.reducer;

