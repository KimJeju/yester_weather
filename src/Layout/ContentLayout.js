import styled from "styled-components";
import WeatherBox from "../Components/WeatherBox";


const ContentForm = styled.div`
    display: flex;
    flex-direction: column;
    align-items : center;

    background-color : rgba( 0, 0, 0, 0.04) ;


    width : 400px;
    height : 100vh;
`



const WeatherBoxContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items : center;

    width : 19vw;
    height : 22vh;
    background-color : blue;

    margin-top : 1vw;
`

function ContentLayout() {

    return (
        <ContentForm>
            <WeatherBoxContainer>
                <WeatherBox />

                <br />

                <WeatherBox />
            </WeatherBoxContainer>
        </ContentForm>
    )
}

export default ContentLayout