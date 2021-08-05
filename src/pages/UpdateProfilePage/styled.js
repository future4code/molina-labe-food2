import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 95%;
  align-items: center;
  margin-bottom: 2px;
  `

export const Header = styled.div`
  width: 100%;
  height: 64px;
  border-bottom: 1px solid grey;
  margin: auto;
  display: flex;
  justify-content: flex-start;
  
 
  `

export const Form = styled.form`
margin: 5px;
padding: 10px;
`
export const InputsContainer = styled.div `
margin-bottom: 15px;
`

export const IconDiv = styled.div`
display: flex;
width: 57%;
justify-content: space-between;

h2{
      size: 16px;
      letter-spacing: -0.39px;
      color: black;
      display: flex;
      align-items: center;
  }
`