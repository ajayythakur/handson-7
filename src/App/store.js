import { configureStore } from "@reduxjs/toolkit";
import studentReducer from "../Features/studentSlice";

export default configureStore({
    reducer:{
        student:studentReducer,
    },
})