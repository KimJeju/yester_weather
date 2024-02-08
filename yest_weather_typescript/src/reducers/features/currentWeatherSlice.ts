import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IWeatherModel } from "../../components/interfaces/WeatherModel";



export const currentWeatherSlice = createSlice({
    name: "currentWeather",
    initialState: {
        value: [],
    },
    reducers: {
        getCurrentWeather: (state, action : PayloadAction<IWeatherModel>) => {
            if(state.value.length == 0){    
                state.value.push();

                console.log(action.payload);
            }
        }
    }
})

export const { getCurrentWeather } = currentWeatherSlice.actions
export default currentWeatherSlice.reducer
