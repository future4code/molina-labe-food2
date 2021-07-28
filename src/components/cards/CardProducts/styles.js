import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 90vw;
  align-items: center;

  .image {
    img {
      width: 100%;
    }
  }

  .text {
    display: flex;
    flex-direction: column;
    padding: 10px;
    margin-top: -4px;
    width: 94%;
    gap: 4px;
    border: solid 1px #b8b8b8;
    border-bottom-right-radius: 8px;
    border-bottom-left-radius: 8px;

    h4 {
      color: #e86e5a;
      font-size: 16px;
      font-weight: normal;
    }

    > div {
      display: flex;
      font-size: 16px;
      color: #b8b8b8;
      justify-content: space-between;
    }
  }
`