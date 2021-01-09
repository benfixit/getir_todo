import React from 'react';
import PropTypes from 'prop-types'
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

NavBar.propTypes = {
    onClickAddTask: PropTypes.func.isRequired
}

export default NavBar;