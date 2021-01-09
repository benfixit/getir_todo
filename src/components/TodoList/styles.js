import styled from 'styled-components'

export const Container = styled.div`
    background-color: #f5f5f8;
    height: 100%;
    display: flex;
    flex-direction: column;
`

export const NavWrapper = styled.div`
    margin-bottom: 56px;
    background-color: #ffffff;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 8px 24px;
    max-height: 40px;
    flex: 1;
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

export const HeaderText = styled.h1`
    color: #5D3EBC;
    font-size: 18px;
`

export const AddTask = styled.span`
    cursor: pointer;
    font-weight: bold;
    color: #5D3EBC;
    > svg {
        width: 24px;
        height: 24px;
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

export const StyledList = styled.div`
    display: flex;
    flex: 1;
    flex-direction: column;
    width: 60%;
    @media(max-width: 600px){
        width: 100%;
    }
`

export const ListHeader = styled.h3`
    display: flex;
    justify-content: space-between;
    padding: 8px 16px;
`

export const DateData = styled.div`
    display: flex;
    align-items: center;
`

export const YearMonth = styled.div`
    display: flex;
    flex-direction: column;
`

export const Year = styled.p`
    font-size: 12px;
    color: #666666;
`

export const Month = styled.p`
    text-transform: uppercase;
    font-size: 12px;
    color: #666666;
`

export const Day = styled.p`
    display: flex;
    align-items: center;
    font-size: 40px;
    margin-right: 4px;
    color: #666666;
`

export const DayName = styled.p`
    text-transform: uppercase;
    display: flex;
    align-items: center;
    font-size: 12px;
    color: #666666;
`

export const ListContent = styled.ul`
    background-color: #ffffff;
    padding: 24px 16px;
    height: 100%;
`

export const StyledDate = styled.div`
    text-align: center;
    width: 40%;
    flex: 1;
    @media(max-width: 600px){
        width: 100%;
    }
`

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

export const NoAvailableTodos = styled.p`
    line-height: 30px;
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
`

export const CancelButton = styled(Button)`
    background-color: #ffffff;
    color: #5D3EBC;
    border: thin solid #5D3EBC;
    margin-right: 24px;
`

export const Form = styled.form`
`

export const Error = styled.span`
    color: #cc0000;
    font-size: 12px;
`