import styled from 'styled-components'

export const DivGroup = styled.div`
    display: flex;
    flex-direction: column;
    height: fit-content;
    margin-bottom: 40px;
`

export const Label = styled.label`
    margin-bottom: 8px;
    text-transform: uppercase;
    font-size: 10px;
    font-weight: bold;
    color: ${props => props.error ? '#cc0000' : '#888888' };

`

export const StyledInput = styled.input`
    height: 30px;
    width: 100%;
    border: none;
    border-bottom: thin solid #888888;
    :active,
    :focus{
        outline: none;
    }
`

export const ButtonWrapper = styled.div`
    width: 100%;
    display: flex;
`

export const Button = styled.button`
    color: #ffffff;
    background-color: #5D3EBC;
    padding: 8px;
    border-radius: 3px;
    border: none;
    cursor: pointer;
`

export const AddButton = styled(Button)`
    :hover {
        background-color: #3b1c0a;
    }
`

export const CancelButton = styled(Button)`
    background-color: #ffffff;
    color: #5D3EBC;
    border: thin solid #5D3EBC;
    margin-right: 24px;
    :hover{
        color: #3b1c0a;
        border-color: #3b1c0a;
    }
`

export const StyledForm = styled.form`
`

export const Error = styled.span`
    color: #cc0000;
    font-size: 12px;
`