import styled from 'styled-components'
import { TODO_STATUS } from '../../utils/constants'

export const StyledLi = styled.li`
    display: flex;
    justify-content: space-between;
    color: ${props => props.status === TODO_STATUS.COMPLETE ? '#b0b0b0' : '#000000'};
    list-type: none;
    :not(:last-child){
        margin-bottom: 24px;
    }
    > p {
        > span {
            cursor: pointer;
            > svg {
                width: 20px;
                height: 20px;
            }
        }
    }
`

export const Description = styled.span`
    flex: 1;
`

export const StyledWrapper = styled.div`
    position: relative;
    flex: 1;
    display: flex;
    justify-content: flex-end;
`

export const TrashSpan = styled.span`
    margin-right: 8px;
    color: #cc0000;
    :hover{
        color: #990000;
    }
`

export const CheckSpan = styled.span`
    font-weight: bolder;
    color: ${props => props.status === TODO_STATUS.COMPLETE ? '#7CDFA9' : '#b0b0b0'};
    :hover{
        color: #7CDFA9;
    }
`