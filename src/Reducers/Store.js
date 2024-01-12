import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./Features/counterSlice";
import weatherSlice  from "./Features/weatherSlice";


export default configureStore({
    reducer: {
        counter: counterSlice,
        weather : weatherSlice,
    }
})