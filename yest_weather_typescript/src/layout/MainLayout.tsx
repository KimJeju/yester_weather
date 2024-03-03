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
    // background-color : red;
    box-shadow: 5px 5px lightgrey;
    transition : 0.5s;
`



function MainLayout() {

    return (
        <MainForm>
            <TopLayout />
            <ContentLayout/>
        </MainForm>
    )
}

export default MainLayout