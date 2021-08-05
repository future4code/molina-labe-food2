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
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 90vw;
  align-items: center;

  .image {
    height: 120px;
    overflow: hidden;
    border-top-right-radius: 8px;
    border-top-left-radius: 8px;

    img {
      width: 100%;
      margin-top: -35px;
    }
  }

  .text {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    padding: 10px;
    width: 100%;
    gap: 4px;

    h4 {
      color: #e86e5a;
      font-size: 16px;
      font-weight: normal;
    }

    > div, p {
      display: flex;
      font-size: 16px;
      color: #b8b8b8;
      justify-content: space-between;
    }
  }
`