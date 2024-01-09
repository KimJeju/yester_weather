import styled from "styled-components"
import UnixTimeConvert from "../Utils/UnixTimeConvert"

const Container = styled.div`
    width : 350px;
    height : 100px;
    transition : 0.5s;
    background-color : white;
    border-radius : 15px;
    overflow : hidden;
    box-shadow: rgba(0, 0, 0, 0.15) 2.4px 2.4px 3.2px;
    display : flex;
    justify-content : space-between;
`


//왼쪽 컨텐츠
const LeftContent = styled.div`
    width : 110px;
    height : 100px;
    background-color : white;
`

const IconInfo = styled.div`
 display : flex;
 flex-direction : row;
 align-items : center;
 justify-content : center;
 width : 90px;
 height : 35px;
 text-align : center;
 margin-top : 3px;
`

const Temp = styled.div`
display : flex;
flex-direction : row;
align-items : center;
justify-content : center;
margin-top : 5%;
font-size : 30px;
font-weight: 500;
`

const Img = styled.img`
    width : 35px;
    height : 35px;
`

const Date = styled.div`
    font-size : 14px;
    font-weight : 600;
    margin-bottom : 5px;
`

const Span = styled.span`
    margin-top : 3px;
    font-size : 12px;
`

//오른쪽 컨텐츠
const RightContent = styled.div`
    width : 120px;
    height : 100px;
    display : flex;
    flex-direction :column;
    margin-right : 3px;
    margin-top : 8px;
`

function WeatherBoxLayout({ weather }) {

    return (
        <Container>
            <LeftContent>
                <IconInfo>
                    <Img src={weather.icon} color="white" />
                    <span>{weather.main.toUpperCase()}</span>
                </IconInfo>
                <Temp>
                    {weather.temp}°
                </Temp>
            </LeftContent>

            <RightContent>
                <Date>{weather.date}</Date>

                <Span>체감온도 : {weather.feelLike}°</Span>
                <Span>일출 : {UnixTimeConvert(weather.sunrise)}</Span>
                <Span>일몰 : {UnixTimeConvert(weather.sunset)}</Span>
            </RightContent>
        </Container>
    )
}

export default WeatherBoxLayout