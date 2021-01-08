import React from 'react';
// import Layout from '../Layout'
import { Modal } from '@material-ui/core'
import Todo from '../Todo'
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
    AddTask
 } from './styles';

class TodoList extends React.Component{
    constructor(props){
        super(props);
    
        this.state = {
          todos: [
            {id: 1, description: 'Eat food'},
            {id: 2, description: 'Write code'}
          ]
        }
      }

    render(){
        return(
            <Container>
                <NavWrapper>
                    <HeaderText>Todo App</HeaderText>
                    <AddTask>+</AddTask>
                </NavWrapper>
                <ContentWrapper>
                    <Wrapper>
                        <StyledList>
                            <ListHeader>
                                Today
                            </ListHeader>
                            <ListContent>
                                {this.state.todos.map(todo => {
                                    const { id } = todo;
                                    return (
                                        <Todo key={id} todo={todo} />
                                    )
                                })}
                            </ListContent>
                        </StyledList>
                        <StyledDate>
                            Calendar Here!!!
                        </StyledDate>
                    </Wrapper>
                </ContentWrapper>
                
            </Container>
        )
    }
}

export default TodoList;