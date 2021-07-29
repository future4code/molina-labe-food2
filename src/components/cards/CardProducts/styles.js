import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  width: 90vw;
  align-items: center;
  height: 112px;

  .image {
    width: 97px;
    height: 100%;
    overflow: hidden;
    border-bottom-left-radius: 8px;
    border-top-left-radius: 8px;
    
    img {
      height: 100%;
      margin-left: -60px;
    }
  }

  .main {
    border-top-right-radius: 8px;
    border-bottom-right-radius: 8px;
    border-bottom: solid 1px #b8b8b8;
    border-top: solid 1px #b8b8b8;
    border-right: solid 1px #b8b8b8;
    width: 100%;
    height: 100%;
    display: flex;

    .text {
      display: flex;
      flex-direction: column;
      padding: 10px;
      gap: 4px;
  
      h4 {
        color: #e86e5a;
        font-size: 16px;
        font-weight: normal;
      }

      .description {
        font-size: 14px;
        color: var(--grey-color)
      }
    }

    .button {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: flex-end;

      span {
        border-top-right-radius: 8px;
        border-bottom-left-radius: 8px;
        border: solid 1px var(--orange-color);
        color: var(--orange-color);
        width: 33px;
        height: 33px;
        display: flex;
        justify-content: center;
        align-items: center;
      }

      button {
        background-color: white;
        padding: 8px 20.5px 9px 21.5px;
        border-top-left-radius: 8px;
        border-bottom-right-radius: 8px;
        border: solid 1px ${props => props.border || 'var(--red-color)'};
        color: ${props => props.color || 'var(--red-color)'};
      }
    }
  }
`