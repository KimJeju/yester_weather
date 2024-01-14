import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./Features/counterSlice";
import weatherSlice  from "./Features/weatherSlice";
import pastWeatherSlice from "./Features/pastWeatherSlice";


export default configureStore({
    reducer: {
        counter: counterSlice,
        weather : weatherSlice,
        pastWeather : pastWeatherSlice,
    }
})