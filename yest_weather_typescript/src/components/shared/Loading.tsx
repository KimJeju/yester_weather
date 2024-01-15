import styled from "styled-components";


const Background = styled.div`
    position : absolute;
    width : 100vw;
    height : 100vh;
    top : 0;
    left : 0;
    background : white;
    opacity : 1;
    z-index: 1;
    display : flex;
    flex-direction : column;
    align-items : center;
    justify-centent : center;
`

const LoadingText = styled.div`
    font-size : 24px;
    font-weight : bold;
    margin-top : 30vh;
`

const Image = styled.img`
    margin-top : 30vh;
`


function Loading(){
    return(
        <Background>
            <LoadingText>잠시만 기다려주세요</LoadingText>
            {/* <img src={Spinner} alt="로딩"/> */}
        </Background>
    )
}

export default Loading