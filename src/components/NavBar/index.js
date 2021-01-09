import React from 'react';
import { FaPlusCircle } from "react-icons/fa";
import { NavWrapper, HeaderText, AddTask } from './styles'

const NavBar = props => {
    const { onClickAddTask } = props
    return (
        <NavWrapper>
            <HeaderText>Getir Todo</HeaderText>
            <AddTask onClick={onClickAddTask}>
                <FaPlusCircle scale={'2x'} />
            </AddTask>
        </NavWrapper>
    )
}

export default NavBar;