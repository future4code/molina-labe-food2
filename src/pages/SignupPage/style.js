import styled from "styled-components";

const MainContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    p {
        font-size: 1.125em;
        letter-spacing: -0.39px;
        margin-bottom: 20px;
    }
  
    a{
        text-decoration: none;
    }
`;

const ImgContainer = styled.div`
  margin: 54px 0 28px 0;
  max-width: 100%;
  width: 104px;
  height: 58px;

  img {
    width: 100%;
  }
`;

export {MainContainer, ImgContainer}