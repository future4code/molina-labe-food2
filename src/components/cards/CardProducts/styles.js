import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 95%;
  border: solid 1px #b8b8b8;
  border-radius: 8px;
  align-items: center;

  .image {
    img {
      width: 100%;
    }
  }

  .text {
    display: flex;
    flex-direction: column;
    width: 90%;

    h4 {
      color: #e86e5a;
      font-size: 16px;
    }

    > div {
      display: flex;
      font-size: 16px;
      color: #b8b8b8;
      justify-content: space-between;
    }
  }
`