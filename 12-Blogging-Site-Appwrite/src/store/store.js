import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./authSlice";

const store = configureStore({
    reducer:{
        auth: authSlice, // Register the auth slice
    }
})

export default store;