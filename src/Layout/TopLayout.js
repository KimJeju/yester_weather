import styled from "styled-components";

const TopForm = styled.div`
    height : 10vh;
    width : 400px;
    border-bottom : 2px solid #BFBFBF;
`

const TitleContainer = styled.div`
    width : 400px;
    height : 5vh;
    background-color : orange;
    margin-top : 50px;

`


function TopLayout() {
    return (
        <TopForm>
            <TitleContainer>
                Title
            </TitleContainer>
        </TopForm>
    )
}

export default TopLayout