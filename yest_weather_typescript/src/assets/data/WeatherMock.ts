import { IWeatherModel } from "../../components/interfaces/WeatherModel";

export class Weather implements IWeatherModel {
    constructor(
       public main: string,
       public description: string | "",
       public average_temp: number,
       public highest_temp: number,
       public lowest_temp: number,
       public cloud: number | "-",
       public rain: number | "-",
       public date: string,
    ) { }
}

export class Weathers{
    public weathers:object[]
    constructor(){
        this.weathers = []
    }
}

export const MOCK_CURRENT_WEATHER = [
    new Weather("햇무리","",-2.4,1.4,-5.1,5.5,"-","2023-02-02")
]

export const MOCK_PAST_WEATHER = [
    new Weather("연무","",-1.2,2.4,-3.1,2.5,"-","2023-02-02")
]

