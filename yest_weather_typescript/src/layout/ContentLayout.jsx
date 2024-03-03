import styled from "styled-components";
import { useEffect, useState } from "react";
// import { useSelector } from "react-redux";
import WeatherBoxLayout from "../components/shared/WeatherShape";
import { useSelector } from "react-redux";

//icons
import { CiLocationArrow1 } from "react-icons/ci";
import { FaLocationArrow } from "react-icons/fa6";



const ContentForm = styled.div`
    display: flex;
    flex-direction: column;
    align-items : center;

    // -color : rgba( 255, 239, 223, 0.5) ;
    // background-color : #F8ECE0 ;

    width : 400px;
    height : 100vh;

    transiton : 0.5s;
`

const WeatherBoxContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items : center;

    width : 400px;

`

const MyLocation = styled.div`
    display : flex;
    flex-direction : row;
    width : 350px;
    margin-top : 15px;
`

const LocationTitle = styled.span`
    font-size : 20px;
    font-weight : bold;
`

function ContentLayout() {

    // const [location, setLocation] = useState(null);

    const pastWeather = useSelector(state => state.currentWeather);

    // useEffect(() => {
    //     navigator.geolocation.getCurrentPosition((position) => {
    //         // let lat = Math.floor(position.coords.latitude).toString();
    //         // let lon = Math.floor(position.coords.longitude).toString();

    //         let lat = position.coords.latitude.toString();
    //         let lon = position.coords.longitude.toString();

    //         setLocation({
    //             lat: lat,
    //             lon: lon
    //         })
    //     })

    // }, []);

    // if (location != null && currentWeather !== undefined && pastWeather !== undefined) {
        return (
            <ContentForm>
                <MyLocation>
                    {/* <CiLocationArrow1 size="25"/> */}
                    <FaLocationArrow size="25" />
                    <LocationTitle>테스트시 테스트구</LocationTitle>
                </MyLocation>
                <WeatherBoxContainer>
                    <WeatherBoxLayout/>
                    <br />

                    <WeatherBoxLayout/>
                    <br />

                    <WeatherBoxLayout/>
                    <br />

                    <WeatherBoxLayout/>
                    <br />

                    <WeatherBoxLayout/>
                    <br />

                    
    

                    {/* <WeatherBoxLayout weather={pastWeather} /> */}
                </WeatherBoxContainer>
            </ContentForm>
        )

    // }
}

export default ContentLayout