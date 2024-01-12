import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./Features/counterSlice";
import CurrentWeatherSlice from "./features/CurrentWeatherSlice";

export default configureStore({
    reducer: {
        counter: counterSlice,
    }
})