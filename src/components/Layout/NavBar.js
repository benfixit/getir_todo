import React from 'react';
import { NavWrapper, HeaderText, AddTask } from './styles'

const NavBar = props => {
    return (
        <NavWrapper>
            <HeaderText>Todo App</HeaderText>
            <AddTask>+</AddTask>
        </NavWrapper>
    )
}

export default NavBar;