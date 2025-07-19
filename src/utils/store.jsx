import { configureStore } from "@reduxjs/toolkit";
import appSlicec from "./appSlice"
import searchSlice from "./searchSlice"
const store = configureStore({
    reducer:{
        app:appSlicec,
        search:searchSlice
    },
});

export default store;