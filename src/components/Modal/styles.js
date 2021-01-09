import styled from 'styled-components'

export const ModalContent = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: #ffffff;
    height: fit-content;
    width: 60%;
    margin: auto;
    padding: 24px;
    border-radius: 5px;
    :focus,
    :active{
        outline: none;
    }

    @media(max-width: 600px){
        width: 70%;
    }
`
