import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  width: 90vw;
  align-items: center;
  margin-top: 50px;

  .image {
    width: 97px;
    height: 112px;
    overflow: hidden;
    border-top-right-radius: 8px;
    border-top-left-radius: 8px;

    img {
      height: 100%;
    }
  }

  .main {
    border-top-right-radius: 8px;
    border-bottom-right-radius: 8px;
    border-bottom: solid 1px #b8b8b8;
    border-top: solid 1px #b8b8b8;
    border-right: solid 1px #b8b8b8;

    .text {
      display: flex;
      flex-direction: column;
      padding: 10px;
      width: 93.5%;
      gap: 4px;
  
      h4 {
        color: #e86e5a;
        font-size: 16px;
        font-weight: normal;
      }

      p:nth-child(1) {
        font-size: 14px;
        color: var(--grey-color)
      }
    }
  }
`