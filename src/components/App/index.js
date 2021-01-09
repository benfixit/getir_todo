import React from 'react';
import NavBar from '../NavBar'
import TodoList from '../TodoList';
import Modal from '../Modal'
import { Container, ContentWrapper, Wrapper } from './styles';

class App extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            open: false
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

  render(){
    const { handleModalOpen, handleModalClose } = this
    const { open } = this.state
    return(
      <Container>
          <NavBar onClickAddTask={handleModalOpen}/>
          <ContentWrapper>
              <Wrapper>
                  <TodoList />
                  <Modal open={open} onClose={handleModalClose} />
              </Wrapper>
          </ContentWrapper>
          
      </Container>
    )
  }
}

export default App;
