import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding-bottom: 7vh;
  .header {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 44px;
    h1 {
      font-size: 16px;
      font-weight: normal;
    }
  }
  
  .row {
    opacity: 0.3;
    width: 100%;
    margin-top: -6px;
  }
  .search {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    height: 56px;
    border: 1px solid #b8b8b8;
    border-radius: 2px;
    width: 90%;
    img {
      height: 24px;
      width: 24px;
      padding: 16px 8px 16px 17px;
    }
    input {
      border: none;
      font-size: 16px;
      ::placeholder {
        color: #d0d0d0;
      }
      :focus {
        outline: none;
      }
    }
  }
  .menu {
    display: flex;
    align-items: center;
    width: 100%;
    height: 42px;
    gap: 8px;
    button {
      color: black;
      font-size: 16px;
      border: none;
      background-color: white;
      :hover {
        color: #e86e5a;
      }
      :focus {
        color: #e86e5a;
      }
    }
  }
`