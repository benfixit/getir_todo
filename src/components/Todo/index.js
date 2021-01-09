import React from 'react';
import { connect } from 'react-redux'
import { FaTrashAlt, FaRegCircle } from "react-icons/fa";
import { StyledLi } from './styles'
import { removeTodo, completeTodo } from '../../actions/todos';
import { TODO_STATUS } from '../../utils/constants'

class Todo extends React.Component{
    render(){
        const { todo: { id, status, description }, onRemove, onComplete } = this.props;
        return (
            <StyledLi status={status}>
                {description}
                <p>
                    {status === TODO_STATUS.INCOMPLETE && <span onClick={() => onRemove(id)}><FaTrashAlt /></span>}
                    <span onClick={() => onComplete(id)}><FaRegCircle /></span>
                </p>
            </StyledLi>
        )
    }
}

const mapDispatchToProps = dispatch => ({
    onRemove: (id) => dispatch(removeTodo(id)),
    onComplete: (id) => dispatch(completeTodo(id))
})

export default connect(null, mapDispatchToProps)(Todo);