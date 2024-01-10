import styled from "styled-components";

const TopForm = styled.div`
    height : 10vh;
    width : 400px;
    border-bottom : 1px solid #BFBFBF;
`

const TitleContainer = styled.div`
    width : 400px;
    height : 5vh;
    margin-top : 50px;
    vertical-align: bottom;
`

const Span = styled.span`
    margin-left : 23px;
    font-weight : 600;
`


function TopLayout() {
    return (
        <TopForm>
            <TitleContainer>
                <Span>YEST WEATHER</Span>
            </TitleContainer>
        </TopForm>
    )
}

export default TopLayout