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
            > svg {
                width: 20px;
                height: 20px;
            }
        }
        > span:first-child{
            margin-right: 8px;
            color: #cc0000;
        }
        > span:last-child{
            font-weight: bolder;
            color: ${props => props.status === TODO_STATUS.COMPLETE ? '#7CDFA9' : '#b0b0b0'};
        }
    }
`