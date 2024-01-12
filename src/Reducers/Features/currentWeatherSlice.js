import { createSlice } from "@reduxjs/toolkit";


export const currentWeatherSlice = createSlice({
    name: "weather",
    initialState: {
        value: {}
    },
    reducers: {
        getCurrentWeather: (state, action) => {
            state.value += action.payload
        }
    }
})

export const { getCurrentWeather } = currentWeatherSlice.actions

export default currentWeatherSlice.reducer