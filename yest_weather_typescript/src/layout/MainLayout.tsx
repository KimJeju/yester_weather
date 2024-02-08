import styled from "styled-components";
import TopLayout from "./TopLayout";
import ContentLayout from "./ContentLayout";
import { useEffect } from "react";

// Forms
const MainForm = styled.div`
    // 정렬
    display: flex;
    flex-direction: column;
    align-items : center;

    overflow : hidden;

    //스타일
    width : 400px;
    height : 800px;
    background-color : red;
    border : 3px solid black;
    box-shadow: 5px 5px lightgrey;
    border-radius : 30px;
    transition : 0.5s;
`



function MainLayout() {

    return (
        <MainForm>
        </MainForm>
    )
}

export default MainLayout