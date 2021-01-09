import React from 'react';
import { Modal, Fade, Backdrop } from '@material-ui/core'
import { FaPlusCircle } from "react-icons/fa";
import { connect } from 'react-redux'
import { isSameDay, format } from 'date-fns'
import { Formik } from 'formik'
import Todo from '../Todo'
import CompDatePicker from '../DatePicker'
import { TODO_STATUS } from '../../utils/constants'
import { 
    Container, 
    ContentWrapper, 
    Wrapper, 
    StyledList, 
    ListContent, 
    ListHeader, 
    StyledDate, 
    NavWrapper, 
    HeaderText, 
    AddTask,
    ModalContent,
    DivGroup,
    Label,
    StyledInput,
    Day,
    DateData,
    Month,
    Year,
    DayName,
    YearMonth,
    NoAvailableTodos,
    Button,
    CancelButton,
    ButtonWrapper,
    Form,
    Error
 } from './styles';
import { addTodo } from '../../actions/todos';

class TodoList extends React.Component{
    constructor(props){
        super(props);
    
        this.state = {
          open: false,
          viewDate: new Date()
        }
      }

    handleModalOpen = () => {
        this.setState({
            open: true
        })
    }

    handleModalClose = () => {
        this.setState({
            open: false
        })
    }

    handleSubmit = (values, actions) => {
        const { onAdd } = this.props
        const { description, startDate, endDate } = values
        
        const newTodo = {
            description,
            startDate,
            endDate,
            status: TODO_STATUS.INCOMPLETE
        }

        onAdd(newTodo)

        actions.setSubmitting(false);

        this.handleModalClose()

    }

    handleViewDate = date => {
        this.setState({
            viewDate: date
        })
    }

    render(){
        const { handleModalOpen, handleModalClose, handleSubmit: formikHandleSubmit, handleViewDate } = this;
        const { open, viewDate } = this.state;
        const { todos } = this.props

        const displayedTodos = todos.filter(todo => isSameDay(todo.startDate, viewDate) || (todo.startDate <= viewDate && todo.endDate >= viewDate))

        const validate = (values) => {
            const errors = {};
          
            if (!values.description) {
              errors.description = 'This field is required';
            }
          
            return errors;
        };

        return(
            <Container>
                <NavWrapper>
                    <HeaderText>Getir Todo</HeaderText>
                    <AddTask onClick={handleModalOpen}>
                        <FaPlusCircle scale={'2x'} />
                    </AddTask>
                </NavWrapper>
                <ContentWrapper>
                    <Wrapper>
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
                                    const { id } = todo;
                                    return (
                                        <Todo key={id} todo={todo} />
                                    )
                                }) : <NoAvailableTodos>You do not have any Todos for the selected date.</NoAvailableTodos>}
                            </ListContent>
                        </StyledList>
                        <StyledDate>
                            <CompDatePicker
                                selected={viewDate}
                                onChange={date => handleViewDate(date)}
                                inline
                            />
                        </StyledDate>
                        <Modal 
                            open={open} 
                            onClose={handleModalClose} 
                            closeAfterTransition
                            BackdropComponent={Backdrop}
                            BackdropProps={{
                            timeout: 500,
                            }}
                        >
                        <Fade in={open}>
                            <ModalContent>
                                <Formik
                                    initialValues={{
                                        description: '',
                                        startDate: new Date(),
                                        endDate: new Date(),
                                    }}
                                    onSubmit={formikHandleSubmit}
                                    validate={validate}
                                    validateOnBlur
                                >
                                    {props => {
                                        const { handleBlur, handleSubmit, handleChange, setFieldValue, values: { description, startDate, endDate }, errors: { description: desc } } = props

                                        return (
                                            <Form onSubmit={handleSubmit}>
                                            <DivGroup>
                                                <Label htmlFor="description" error={!!desc}>Description</Label>
                                                <StyledInput 
                                                    name="description" 
                                                    id="description" 
                                                    onChange={handleChange} 
                                                    onBlur={handleBlur}
                                                    value={description}
                                                />
                                                {desc && <Error>{desc}</Error>}
                                            </DivGroup>
                                            
                                            <DivGroup>
                                                <Label htmlFor="startDate">Start Date</Label>
                                                <CompDatePicker
                                                    id="startDate"
                                                    name="startDate" 
                                                    customInput={<StyledInput />}
                                                    selected={startDate}
                                                    onChange={(date) => setFieldValue('startDate', date)} 
                                                    dateFormat="MMMM d, yyyy"
                                                />
                                            </DivGroup>
                                            <DivGroup>
                                                <Label htmlFor="endDate">End Date</Label>
                                                <CompDatePicker
                                                    id="endDate"
                                                    name="endDate" 
                                                    customInput={<StyledInput />}
                                                    minDate={startDate}
                                                    selected={endDate}
                                                    onChange={(date) => setFieldValue('endDate', date)} 
                                                    dateFormat="MMMM d, yyyy"
                                                />
                                            </DivGroup>
                                            <ButtonWrapper>
                                                <CancelButton type="button" onClick={handleModalClose}>Cancel</CancelButton>
                                                <Button type="submit">Add Todo</Button>
                                            </ButtonWrapper>
                                        </Form>
                                    )
                                    }}
                                </Formik>
                            </ModalContent>
                            </Fade>
                        </Modal>
                    </Wrapper>
                </ContentWrapper>
                
            </Container>
        )
    }
}

const mapStateToProps = state => ({
    todos: state.todos
})

const mapDispatchToProps = dispatch => ({
    onAdd: (payload) => dispatch(addTodo(payload))
})

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);