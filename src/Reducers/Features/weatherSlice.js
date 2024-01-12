import { createSlice } from "@reduxjs/toolkit";


export const weatherSlice = createSlice({
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

export const { getCurrentWeather } = weatherSlice.actions

export default weatherSlice.reducer
