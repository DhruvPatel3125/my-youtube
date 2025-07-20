import { configureStore } from "@reduxjs/toolkit";
import appSlicec from "./appSlice"
import searchSlice from "./searchSlice"
import chatSlice from "./chatSlice"
const store = configureStore({
    reducer:{
        app:appSlicec,
        search:searchSlice,
        chat:chatSlice,
    },
});

export default store;