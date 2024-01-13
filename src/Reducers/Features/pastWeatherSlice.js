import { createSlice } from "@reduxjs/toolkit";


export const pastWeatherSlice = createSlice({
    name: "pastWeather",
    initialState: {
        value: []
    },
    reducers: {
        getPastWeather: (state, action) => {
            if(state.value.length === 0){    
                state.value.push(action.payload);
            }
        }
    }
})

export const { getPastWeather } = pastWeatherSlice.actions

export default pastWeatherSlice.reducer
