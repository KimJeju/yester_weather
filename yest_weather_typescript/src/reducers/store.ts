import { configureStore } from '@reduxjs/toolkit'
import currentWeatherSlice  from "./features/currentWeatherSlice";
import pastWeatherSlice from "./features/pastWeatherSlice";


const store = configureStore({
    reducer: {
        currentWeather : currentWeatherSlice,
        pastWeather : pastWeatherSlice,
    }
})

export default store