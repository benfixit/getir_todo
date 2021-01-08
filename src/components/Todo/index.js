import React from 'react';

class Todo extends React.Component{
    render(){
        const { description } = this.props.todo
        return (
            <li>{description}</li>
        )
    }
}

export default Todo;