import axios from "axios"
import { useEffect, useState } from "react"

async function GetWeather(lat, lon){

    const API_KEY = process.env.REACT_APP_WEATHER_API_KEY;

    console.log(API_KEY);

    const [ weather, setWeather ] = useState(null);
    const weatherDescKo = null;

    try {
        const res = await axios.get(
            `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
        );

        // id 찾아서 매칭 후 description 한글 번역된 거 가져오기
        const weatherId = res.data.weather[0].id;
        const weatherKo = weatherDescKo[weatherId];
        // 날씨 아이콘 가져오기
        const weatherIcon = res.data.weather[0].icon;
        const weatherIconAdrs = `http://openweathermap.org/img/wn/${weatherIcon}@2x.png`;
        // 소수점 버리기
        const temp = Math.round(res.data.main.temp);

        setWeather({
            description: weatherKo,
            temp: temp,
            icon: weatherIconAdrs,
        });

        console.log(weather);
    } catch (err) {
        console.error(err);
    }
};

export default GetWeather