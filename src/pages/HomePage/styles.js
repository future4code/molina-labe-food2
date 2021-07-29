import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding-bottom: 7vh;

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
    flex-wrap: wrap;
    align-items: center;
    height: 42px;
    gap: 8px;

    a {
      color: black;
      font-size: 16px;
      width: 87px;

      :hover {
        color: #e86e5a;
      }

      :focus {
        color: #e86e5a;
      }
    }
  }
`