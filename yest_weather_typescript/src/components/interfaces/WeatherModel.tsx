export interface IWeatherModel {
    main : string;
    description : string | "";
    average_temp : number;
    highest_temp : number;
    lowest_temp : number;
    cloud:number | "-";
    rain:number | "-";
    date : string;
}
