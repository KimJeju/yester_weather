import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IWeatherModel } from "../../components/interfaces/WeatherModel";


export const pastWeatherSlice = createSlice({
    name: "pastWeather",
    initialState: {
        value: Array<IWeatherModel>,
    },
    reducers: {
        getPastWeather: (state, action : PayloadAction<IWeatherModel>) => {
            if(state.value.length == 0){    
                state.value.apply(action.payload);
            }
        }
    }
})

export const { getPastWeather } = pastWeatherSlice.actions

export default pastWeatherSlice.reducer
