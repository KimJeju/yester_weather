import { createSlice } from "@reduxjs/toolkit";


export const weatherSlice = createSlice({
    name: "weather",
    initialState: {
        value: []
    },
    reducers: {
        getCurrentWeather: (state, action) => {
            if(state.value.length === 0){    
                state.value.push(action.payload);
            }
        }
    }
})

export const { getCurrentWeather } = weatherSlice.actions

export default weatherSlice.reducer
