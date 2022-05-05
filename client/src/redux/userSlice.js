import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios"
import authService from "../services/authService"


const user = JSON.parse(localStorage.getItem("user"))

const initialState =
    user ?
        { isLoggedIn: true, user }
        :
        { isLoggedIn: false, user: null };



export const register = createAsyncThunk("auth/register", async ({ username, email, password }, thunkAPI) => {
    try {
        const res = await authService.register({ username, email, password })
        return res.data
    } catch (err) {
        const message = (err.response && err.response.data && err.response.data.message)

        return thunkAPI.rejectWithValue(message);
    }
})

export const login = createAsyncThunk("auth/login", async ({ email, password }, thunkAPI) => {
    console.log(email, password);
    try {
        const res = await authService.login({ email, password })
        return res.data
    } catch (err) {
        const message = (err.response && err.response.data && err.response.data.message)
        return thunkAPI.rejectWithValue(message)
    }
})




export const logout = createAsyncThunk("auth/logout", async () => {
    await authService.logout()
})

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(register.fulfilled, (state, action) => {
                state.isLoggedIn = false;
            })
            .addCase(register.rejected, (state, action) => {
                state.isLoggedIn = false;
            })
            .addCase(login.pending, (state, action) => {
                state.isLoggedIn = false;
            })
            .addCase(login.fulfilled, (state, action) => {
                state.isLoggedIn = true;
                state.user = action.payload;
            })
            .addCase(login.rejected, (state, action) => {
                state.isLoggedIn = false;
                state.user = null;
            })
            .addCase(logout.fulfilled, (state) => {
                state.isLoggedIn = false;
                state.user = null
            })
    }
})

export default userSlice.reducer
