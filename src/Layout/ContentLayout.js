import styled from "styled-components";
import { useEffect, useState } from "react";
import CurrentWeatherBox from "../Components/CurrentWeatherBox";
import PastWeatherBox from "../Components/PastWeatherBox";


const ContentForm = styled.div`
    display: flex;
    flex-direction: column;
    align-items : center;

    background-color : rgba( 255, 239, 223, 0.5) ;
    // background-color : #F8ECE0 ;

    width : 400px;
    height : 100vh;

    transiton : 1s;
`

const WeatherBoxContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items : center;

    width : 400px;

    margin-top : 2vw;
`

const MyLocation = styled.div`
    display : flex;
    flex-direction : column;
    width : 350px;
    margin-top : 12px;
`

const MyLocations = styled.div`
    // display : flex;
    // justify-content : space-around;
    margin-top : 1vh;
`

const LocationTitle = styled.span`
    font-size : 20px;
    font-weight : bold;
`

function ContentLayout() {

    const [location, setLocation] = useState(null);

    useEffect(() => {
        navigator.geolocation.getCurrentPosition((position) => {
            // let lat = Math.floor(position.coords.latitude).toString();
            // let lon = Math.floor(position.coords.longitude).toString();

            let lat = position.coords.latitude.toString();
            let lon = position.coords.longitude.toString();

            setLocation({
                lat: lat,
                lon: lon
            })
        })
    }, []);

    if (location != null) {
        return (
            <ContentForm>
                <MyLocation>
                    <LocationTitle>현재 내 위치</LocationTitle>
                    <MyLocations>
                        <span>위도 : {location.lat}</span> &nbsp;&nbsp;&nbsp;&nbsp;
                        <span>경도 : {location.lon}</span>
                    </MyLocations>
                </MyLocation>
                <WeatherBoxContainer>
                    <CurrentWeatherBox />

                    <br />

                    <PastWeatherBox />
                </WeatherBoxContainer>
            </ContentForm>
        )

    }
}

export default ContentLayout