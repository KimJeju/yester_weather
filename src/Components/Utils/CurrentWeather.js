import axios from "axios";
import { useState, useEffect } from "react";
import moment from "moment";
import { useSelector, useDispatch } from 'react-redux'
import { getCurrentWeather } from "../../Reducers/Features/weatherSlice";

function CurrentWeatherBox() {

    const API_KEY = process.env.REACT_APP_WEATHER_API_KEY;

    const [weather, setWeather] = useState(null);
    const [loading, setLoading] = useState(true);

    const dispatch = useDispatch();

    const nowTime = moment().format(`YYYY년 MM월 DD일`);

    useEffect(() => {
        navigator.geolocation.getCurrentPosition((position) => {

            let lat = position.coords.latitude.toString();
            let lon = position.coords.longitude.toString();


            getWeather(lat, lon);
        })
    }, []);

    const getWeather = async (lat, lon) => {
            try {
                const res = await axios.get(
                    `https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&exclude=${"minutely ,hourly ,alerts ,hourly"}&appid=${API_KEY}&units=metric`

                );

                // // // id 찾아서 매칭 후 description 한글 번역된 거 가져오기
                // const weatherId = res.data.weather.id;
                // const weatherKo = weatherDescKo[weatherId];
                // // 날씨 아이콘 가져오기
                const weatherIcon = res.data.current.weather[0].icon;
                const weatherIconAdrs = `http://openweathermap.org/img/wn/${weatherIcon}@2x.png`;
                // // 소수점 버리기
                // const temp = Math.round(res.data.main.temp);

                setWeather({
                    main: res.data.current.weather[0].main,
                    description: res.data.current.weather[0].description,
                    feelLike: res.data.current.feels_like,
                    temp: res.data.current.temp,
                    icon: weatherIconAdrs,
                    dewPoint: res.data.current.dew_point,
                    sunrise: res.data.current.sunrise,
                    sunset: res.data.current.sunset,
                    date: nowTime,
                });

                if (weather != null) {
                    setLoading(false);
                }
            } catch (err) {
                console.error(err);
            }
    }

    if(weather != null){
        dispatch(getCurrentWeather(weather));
    }
};




export default CurrentWeatherBox