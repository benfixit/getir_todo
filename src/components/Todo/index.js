import React from 'react';
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { FaTrashAlt, FaRegCircle, FaCheck } from "react-icons/fa";
import { StyledLi, StyledP, TrashSpan, CheckSpan } from './styles'
import { removeTodo, completeTodo } from '../../actions/todos';
import { TODO_STATUS } from '../../utils/constants'

const Todo = props => {
    const { todo: { id, status, description }, onRemove, onComplete } = props;
        const isIncomplete = status === TODO_STATUS.INCOMPLETE
        return (
            <StyledLi status={status}>
                {description}
                <StyledP>
                    {isIncomplete && <TrashSpan data-testid={'removeTodo'} onClick={() => onRemove(id)}><FaTrashAlt /></TrashSpan>}
                    <CheckSpan 
                        data-testid={'completeAction'}
                        onClick={isIncomplete ? () => onComplete(id) : () => {}}
                        status={status}
                    >
                        {isIncomplete ? <FaCheck /> : <FaRegCircle />}
                    </CheckSpan>
                </StyledP>
            </StyledLi>
        )
}

const mapDispatchToProps = dispatch => ({
    onRemove: (id) => dispatch(removeTodo(id)),
    onComplete: (id) => dispatch(completeTodo(id))
})

Todo.propTypes = {
    onRemove: PropTypes.func.isRequired,
    onComplete: PropTypes.func.isRequired,
    todo: PropTypes.shape({
        id: PropTypes.string,
        description: PropTypes.string,
        startDate: PropTypes.instanceOf(Date),
        endDate: PropTypes.instanceOf(Date),
        status: PropTypes.string
    }).isRequired
}

export default connect(null, mapDispatchToProps)(Todo);