import { configureStore } from "@reduxjs/toolkit"
import userReducer from "./userSlice"
import thunk from "redux-thunk";


const store = configureStore({
    reducer: userReducer,
    middleware: [thunk],
})

export default store;


