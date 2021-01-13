import React from 'react';
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { CircularProgress } from '@material-ui/core'
import { FaTrashAlt, FaRegCircle, FaCheck } from "react-icons/fa";
import { StyledLi, Description, StyledWrapper, TrashSpan, CheckSpan } from './styles'
import ProgressWrapper from '../ProgressWrapper';
import Error from '../Error';
import { removeTodo, completeTodo } from '../../actions/todos';
import { TODO_STATUS } from '../../utils/constants'

class Todo extends React.Component {
    constructor(props){
        super(props)

        this.state = {
            loading: false,
            error: null
        }
    }

    handleRemove = (id) => {
        const { removeTodo } = this.props;
        this.setState({ loading: true }, () => {
            removeTodo(id).then(() => this.setState({ loading: false })).catch(error => this.setState({ error }))
        });
        
    }

    handleComplete = (id) => {
        const { completeTodo } = this.props;
        this.setState({ loading: true }, () => {
            completeTodo(id).then(() => this.setState({ loading: false })).catch(error => this.setState({ error }))
        });
    }

    componentWillUnmount() {
        // fix Warning: Can't perform a React state update on an unmounted component
        this.setState = () => {
            return;
        };
    }

    render(){
        const { todo: { id, status, description } } = this.props;
        const { loading, error } = this.state;
        const { handleRemove, handleComplete } = this;

        const isIncomplete = status === TODO_STATUS.INCOMPLETE
        
        return error ? <Error>{error}</Error> : (
            <StyledLi status={status}>
                <Description>{description}</Description>
                <StyledWrapper>
                    {loading && (
                        <ProgressWrapper>
                            <CircularProgress color="inherit" />
                        </ProgressWrapper>
                    )}
                    {isIncomplete && <TrashSpan data-testid={'removeTodo'} onClick={() => handleRemove(id)}><FaTrashAlt /></TrashSpan>}
                    <CheckSpan 
                        data-testid={'completeAction'}
                        onClick={isIncomplete ? () => handleComplete(id) : () => {}}
                        status={status}
                    >
                        {isIncomplete ? <FaCheck /> : <FaRegCircle />}
                    </CheckSpan>
                </StyledWrapper>
            </StyledLi>
        )
    }
}

const mapDispatchToProps = {
    removeTodo,
    completeTodo
}

Todo.propTypes = {
    removeTodo: PropTypes.func.isRequired,
    completeTodo: PropTypes.func.isRequired,
    todo: PropTypes.shape({
        id: PropTypes.string,
        description: PropTypes.string,
        startDate: PropTypes.oneOfType([PropTypes.instanceOf(Date), PropTypes.string]),
        endDate: PropTypes.oneOfType([PropTypes.instanceOf(Date), PropTypes.string]),
        status: PropTypes.string
    }).isRequired
}

export default connect(null, mapDispatchToProps)(Todo);