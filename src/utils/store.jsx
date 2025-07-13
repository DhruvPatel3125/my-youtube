import { configureStore } from "@reduxjs/toolkit";
import appSlicec from "./appSlice"
const store = configureStore({
    reducer:{
        app:appSlicec,
    },
});

export default store;