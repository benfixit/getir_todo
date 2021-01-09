import styled from 'styled-components'

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

export const NoAvailableTodos = styled.p`
    line-height: 30px;
`
