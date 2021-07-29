import styled from 'styled-components'

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
    padding: 10px;
    width: 93.5%;
    gap: 4px;
    border-bottom: solid 1px #b8b8b8;
    border-left: solid 1px #b8b8b8;
    border-right: solid 1px #b8b8b8;
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