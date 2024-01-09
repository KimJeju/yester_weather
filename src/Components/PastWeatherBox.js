import axios from "axios";
import { useState, useEffect } from "react";
import styled from "styled-components";

const Container = styled.div`
    width : 350px;
    height : 100px;
    background-color : red;
    transition : 0.5s;
`

const MyLocation = styled.div`

`

function PastWeatherBox() {

    const API_KEY = process.env.REACT_APP_WEATHER_API_KEY;

    const [weather, setWeather] = useState(null);

    var now = new Date();
    var oneYearAgo = new Date(now.setFullYear(now.getFullYear() - 1));	// 일년 전
    //1년전 유닉스 타임으로 변환
    let time = Math.floor(oneYearAgo / 1000);

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
                sunset: res.data.data[0].sunset
            });
        } catch (err) {
            console.error(err);
        }
    }

    console.log(weather);


    if (weather != null) {
        return (
            <div>
                <Container>
                    <div>
                        a
                    </div>
                </Container>
            </div>

        )
    }
};




export default PastWeatherBox