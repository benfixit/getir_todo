import styled from 'styled-components'

export const Container = styled.div`
    background-color: #f5f5f8;
    height: 100%;
    display: flex;
    flex-direction: column;
`

export const ContentWrapper = styled.div`
    width: 80%;
    margin: auto;
    max-width: 976px;
    flex: 1;
    height: 100%;
    @media(max-width: 600px){
        width: 100%;
    }
`

export const Wrapper = styled.div`
    display: flex;
    width: 100%;
    height: 100%;
    @media(max-width: 600px){
        flex-direction: column-reverse;
    }
`