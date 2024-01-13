import axios from "axios";
import { useState, useEffect } from "react";
import styled from "styled-components";
import WeatherBoxLayout from "../Shared/WeatherBoxLayout";
import moment from "moment";
import LoadingBox from "../Shared/LoadingBox";
import { useDispatch } from "react-redux";
import { getPastWeather } from "../../Reducers/Features/pastWeatherSlice";



const MyLocation = styled.div`

`

function PastWeather() {


    const API_KEY = process.env.REACT_APP_WEATHER_API_KEY;

    const [weather, setWeather] = useState(null);
    const dispatch = useDispatch();

    const now = new Date();
    const oneYearAgo = new Date(now.setFullYear(now.getFullYear() - 1));	// 일년 전
    //1년전 유닉스 타임으로 변환
    const time = Math.floor(oneYearAgo / 1000);

    const oneYearAgoTime = moment(oneYearAgo).format(`YYYY년 MM월 DD일`)

    useEffect(() => {
        navigator.geolocation.getCurrentPosition((position) => {

            let lat = position.coords.latitude.toString();
            let lon = position.coords.longitude.toString();

            getWeather(lat, lon);
        })

    }, []);

    const getWeather = async  (lat, lon) => {
        try {
            const res = await axios.get(
                `https://api.openweathermap.org/data/3.0/onecall/timemachine?lat=${lat}&lon=${lon}&dt=${time}&appid=${API_KEY}&units=metric`
            );

            // // // 날씨 아이콘 가져오기
            const weatherIcon = res.data.data[0].weather[0].icon;
            const weatherIconAdrs = `http://openweathermap.org/img/wn/${weatherIcon}@2x.png`;
            // // // 소수점 버리기

            setWeather({
                main: res.data.data[0].weather[0].main,
                description: res.data.data[0].weather[0].description,
                feelLike: res.data.data[0].feels_like,
                temp: res.data.data[0].temp,
                icon: weatherIconAdrs,
                dewPoint: res.data.data[0].dew_point,
                sunrise: res.data.data[0].sunrise,
                sunset: res.data.data[0].sunset,
                date : oneYearAgoTime
            });
        } catch (err) {
            console.error(err);
        }
    }

    if(weather != null){
        dispatch(getPastWeather(weather));

        return weather;
    }
};




export default PastWeather