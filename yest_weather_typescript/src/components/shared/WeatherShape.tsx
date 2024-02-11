import styled from "styled-components"
import { MOCK_CURRENT_WEATHER, MOCK_PAST_WEATHER, Weather, Weathers } from "../../assets/data/WeatherMock";

const Container = styled.div`
    width : 350px;
    height : 100px;
    background-color : white;
    border-radius : 15px;
    overflow : hidden;
    box-shadow: rgba(0, 0, 0, 0.15) 2.4px 2.4px 3.2px;
    display : flex;
    justify-content : space-between;
    position: relative;

    transition : 0.5s;

    margin-top : 1rem;
`


//왼쪽 컨텐츠
const LeftArea = styled.div`
    width : 65%;
    height : 80px;
    border : 1px solid grey;
    padding : 10px;
    color : white;

    background-image: linear-gradient(-45deg, transparent 80px, #4c71b5 0);
    border : none;

    position: absolute;

    display : flex;
    flex-direction : column;

    > span {
        font-size : 16px;
    }

    #main_temp {
        font-size : 32px;
    }

    #side_temp_area {

      > span {
        font-size : 15px;
      } 
        
       #line {
         margin-left : 5px;
         margin-right : 5px;
       }
    }
`

const RightArea = styled.div`
    width : 63%;
    height : 80px;
    border : 1px solid grey;
    padding : 10px;
    border : none;
    text-align : right;
    margin-left: 110px;

    position: absolute;


    display : flex;
    flex-direction : column;

    > span {
        font-size : 16px;
    }

    #main_temp {
        font-size : 32px;
    }

    #side_temp_area {

        > span {
            font-size : 15px;
        }

       #line {
         margin-left : 5px;
         margin-right : 5px;
       }
    }
`


function WeatherShape() {

    const weathers = new Weathers()

    return (
        <Container>
            <LeftArea>
                <span id="main_temp">{MOCK_CURRENT_WEATHER[0].average_temp}°</span>
                <span>{MOCK_CURRENT_WEATHER[0].main}</span>

                <div id="side_temp_area">
                    <span>최고:{MOCK_CURRENT_WEATHER[0].highest_temp}</span>
                    <span id="line">|</span>
                    <span>최저:{MOCK_CURRENT_WEATHER[0].lowest_temp}</span>
                </div>

            </LeftArea>      

            <RightArea>

            <div id="side_temp_area">
                    <span>최고:{MOCK_PAST_WEATHER[0].highest_temp}</span>
                    <span id="line">|</span>
                    <span>최저:{MOCK_PAST_WEATHER[0].lowest_temp}</span>
                </div>

                <span>{MOCK_PAST_WEATHER[0].main}</span>
                <span id="main_temp">{MOCK_PAST_WEATHER[0].average_temp}°</span>

            </RightArea>

        </Container>
    )
}

export default WeatherShape