import styled from "styled-components";

const MainContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    p {
        font-size: 1.125em;
        letter-spacing: -0.39px;
        margin: 28px 0 20px 0;
    }
  
    a{
        text-decoration: none;
    }
`;

const ContainerHeader = styled.div`
  width: 100%;
  height: 64px;
  display: flex;
  align-items: center;
  border-bottom: 1px solid rgba(0, 0, 0, 0.25);
`

export {MainContainer, ContainerHeader}