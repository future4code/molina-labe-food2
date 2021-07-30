import styled from "styled-components";

export const MainContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 8px;
`

export const HeaderContainer = styled.div`
    display: flex;
    justify-content: center;
    border-bottom: 1px solid black;
    align-items: center;
    height: 6.5vh;
    width: 100%;
`

export const IconContainer = styled.div`
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: flex-start;
        span {
            display: flex;
            padding-right: 26vw;
            padding-left: 4vw;
        }
`