import styled from "styled-components";


const Warpper = styled.div`

`

const MainForm = styled.div`
    width : 400px;
    height : 800px;
    background-color : white;
    border : 3px solid black;
    box-shadow: 5px 5px lightgrey;
    border-radius : 30px;
    transition : 0.5s;

`

function MainLayout() {

    return (
        <Warpper>
            <MainForm>

            </MainForm>
        </Warpper>
    )
}

export default MainLayout