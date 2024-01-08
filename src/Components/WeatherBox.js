import axios from "axios";
import { useState, useEffect } from "react";
import styled from "styled-components";

const Container = styled.div`
    width : 18vw;
    height : 10vh;
    background-color : red;
`

function WeatherBox() {

    const API_KEY = process.env.REACT_APP_WEATHER_API_KEY;

    const [ weather, setWeather ] = useState(null);
    const weatherDescKo = null;

    useEffect(() => {
        navigator.geolocation.getCurrentPosition((position) => {
            let lat = Math.floor(position.coords.latitude).toString();
            let lon = Math.floor(position.coords.longitude).toString();
            
            console.log(lat);
            console.log(lon);

            getWeather(lat, lon);
        });
    }, []);

    const getWeather = async (lat, lon) => {
        try {
            const res = await axios.get(
                `https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&exclude=${"current"}&appid=${API_KEY}`

            );

            console.log(res.data);

            // // id 찾아서 매칭 후 description 한글 번역된 거 가져오기
            // const weatherId = res.data.weather[0].id;
            // const weatherKo = weatherDescKo[weatherId];
            // // 날씨 아이콘 가져오기
            // const weatherIcon = res.data.weather[0].icon;
            // const weatherIconAdrs = `http://openweathermap.org/img/wn/${weatherIcon}@2x.png`;
            // // 소수점 버리기
            // const temp = Math.round(res.data.main.temp);

            // setWeather({
            //     description: weatherKo,
            //     temp: temp,
            //     icon: weatherIconAdrs,
            // });
        } catch (err) {
            console.error(err);
        }
    }

    console.log(weather);

    return (
        <Container>
            anaa
        </Container>
    )

};




export default WeatherBox