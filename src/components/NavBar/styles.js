import styled from 'styled-components'

export const NavWrapper = styled.div`
    margin-bottom: 56px;
    background-color: #ffffff;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 24px;
    min-height: 50px;
`

export const HeaderText = styled.h1`
    color: #5D3EBC;
    font-size: 18px;
    cursor: pointer;
`

export const AddTask = styled.span`
    cursor: pointer;
    font-weight: bold;
    color: #5D3EBC;
    border-radius: 50%;

    :hover {
        color: #3b1c0a;
    }

    > svg {
        width: 24px;
        height: 24px;
    }
`