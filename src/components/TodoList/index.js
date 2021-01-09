import React, { Fragment } from 'react';
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { isSameDay, format } from 'date-fns'
import Todo from '../Todo'
import CompDatePicker from '../DatePicker'
import { 
    StyledList, 
    ListContent, 
    ListHeader, 
    StyledDate, 
    Day,
    DateData,
    Month,
    Year,
    DayName,
    YearMonth,
    NoAvailableTodos,
 } from './styles';

class TodoList extends React.Component{
    constructor(props){
        super(props);
    
        this.state = {
          viewDate: new Date()
        }
      }

    handleViewDate = date => {
        this.setState({
            viewDate: date
        })
    }

    render(){
        const { handleViewDate } = this;
        const { viewDate } = this.state;
        const { todos } = this.props

        const displayedTodos = todos.filter(todo => isSameDay(todo.startDate, viewDate) || (todo.startDate <= viewDate && todo.endDate >= viewDate))

        return(
            <Fragment>
                 <StyledList>
                    <ListHeader>
                        <DateData>
                            <Day>
                                {format(viewDate, 'd')}
                            </Day>
                            <YearMonth>
                                <Month>
                                    {format(viewDate, 'MMM')}
                                </Month>
                                <Year>
                                    {format(viewDate, 'yyyy')}
                                </Year>
                            </YearMonth>
                        </DateData>
                        <DayName>
                            {format(viewDate, 'EEEE')}
                        </DayName>
                    </ListHeader>
                    <ListContent>
                        {displayedTodos.length > 0 ? displayedTodos.map(todo => {
                            return (
                                <Todo key={todo.id} todo={todo} />
                            )
                        }) : <NoAvailableTodos>You do not have any todos for the selected date.</NoAvailableTodos>}
                    </ListContent>
                </StyledList>
                <StyledDate>
                    <CompDatePicker
                        selected={viewDate}
                        onChange={date => handleViewDate(date)}
                        inline
                    />
                </StyledDate>
            </Fragment>
        )
    }
}

const mapStateToProps = state => ({
    todos: state.todos
})

TodoList.propTypes = {
    todos: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string,
            description: PropTypes.string,
            startDate: PropTypes.instanceOf(Date),
            endDate: PropTypes.instanceOf(Date),
            status: PropTypes.string
        })
    ).isRequired
}

export default connect(mapStateToProps, null)(TodoList);