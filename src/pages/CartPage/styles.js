import styled from "styled-components";

export const MainContainer = styled.div`
    display: flex;
    flex-direction: column;
`
export const ButtonContainer = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
    bottom: 14vw;
    position: fixed;
            button {
                width: 88vw;
                height: 6.4vh;
                background-color: rgba(232, 110, 90, 0.5);
                border: none;
                color: black;
            }
`

export const HeaderContainer = styled.div`
    display: flex;
    justify-content: center;
    border-bottom: 1px solid black;
    align-items: center;
    height: 6.5vh;
`

export const ItensContainer = styled.div`
    display: flex;
    justify-content: center;
`

export const ShippingContainer = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 4px;
`
export const BillContainer = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 4px;
`

export const TextContainer = styled.div`
    display: flex;
    border-bottom: 2px solid black;
    padding: 4px;
`
export const FormContainer = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    padding: 4px;
`
