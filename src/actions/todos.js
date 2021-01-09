import { v4 } from 'uuid'
import { TODO_ACTIONS } from '../utils/constants'

export const addTodo = payload => {
    return {
        type: TODO_ACTIONS.ADD_TODO,
        id: v4(),
        ...payload
    }
}

export const removeTodo = id => {
    return {
        type: TODO_ACTIONS.REMOVE_TODO,
        id
    }
}

export const completeTodo = id => {
    return {
        type: TODO_ACTIONS.COMPLETE_TODO,
        id
    }
}