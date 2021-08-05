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
  margin: 24px 0 40px 0;
  max-width: 100%;
  width: 104px;
  height: 58px;

  img {
    width: 100%;
  }
`;

const ContainerHeader = styled.div`
  width: 100%;
  height: 64px;
  display: flex;
  align-items: center;
  border-bottom: 1px solid rgba(0, 0, 0, 0.25);
`

export {MainContainer, ImgContainer, ContainerHeader}