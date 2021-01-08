import styled from 'styled-components'

export const Container = styled.div`
    border: thin solid red;
    background-color: #f5f5f8;
    height: 100%;
`

export const NavWrapper = styled.div`
    margin-bottom: 56px;
    background-color: #ffffff;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 24px;
`

export const ContentWrapper = styled.div`
    width: 80%;
    margin: auto;
    border: thin solid red;
    max-width: 976px;
    @media(max-width: 600px){
        width: 90%;
    }
`

export const HeaderText = styled.h1`
    color: #5D3EBC;
    font-size: 18px;
`

export const AddTask = styled.span`
    display: block;
    width: 24px;
    height: 24px;
    cursor: pointer;
    text-align: center;
    font-weight: bold;
    color: #ffffff;
    background-color: #5D3EBC;
    border-radius: 50%;
`

export const Wrapper = styled.div`
    display: flex;
    border: thin solid green;
    width: 100%;
    @media(max-width: 600px){
        flex-direction: column-reverse;
    }
`

export const StyledList = styled.div`
    display: flex;
    flex-direction: column;
    border: thin solid green;
    width: 60%;
    @media(max-width: 600px){
        width: 100%;
    }
`

export const ListHeader = styled.h3`
    border: thin solid purple;
`

export const ListContent = styled.ul`
    background-color: #ffffff;
`

export const StyledDate = styled.div`
    width: 40%;
    @media(max-width: 600px){
        width: 100%;
    }
`