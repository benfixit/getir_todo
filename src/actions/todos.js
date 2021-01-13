import { v4 } from 'uuid'
import { fetchTodos as lsFetchTodos, saveTodo, removeTodo as lsRemoveTodo, completeTodo as lsCompleteTodo } from '../api'
import { TODO_ACTIONS } from '../utils/constants'

// Action Creators
export const addTodoCreator = payload => {
    return {
        type: TODO_ACTIONS.ADD_TODO,
        id: v4(),
        ...payload
    }
}

export const removeTodoCreator = id => {
    return {
        type: TODO_ACTIONS.REMOVE_TODO,
        id
    }
}

export const completeTodoCreator = id => {
    return {
        type: TODO_ACTIONS.COMPLETE_TODO,
        id
    }
}

export const fetchTodoCreator = todos => {
    return {
        type: TODO_ACTIONS.FETCH_TODOS,
        todos
    }
}

// Async actions
export const fetchTodos = () => {
    return async dispatch => {
        return lsFetchTodos().then(response => {
            dispatch(fetchTodoCreator(response));
        }).catch(error => {
            /**
             * If it were an app level error, an action could be dispatched here, so that the error lives in the store
             * But I am re-throwing it here because I want to handle it at the component level. 
             * The errors in this project are mostly component-level errors
             */
            throw error
        })
    }
}

export const addTodo = payload => {
    return async dispatch => {
        const { type, ...rest } = addTodoCreator(payload)

        return saveTodo(rest).then(response => {
            dispatch({ type, ...response })
        }).catch(error => {
            throw error
        })
    }
}

export const removeTodo = id => {
    return async dispatch => {
        const { type, id: todoId } = removeTodoCreator(id)

        return lsRemoveTodo(todoId).then(response => {
            dispatch({ type, id: response })
        }).catch(error => {
            throw error
        })
    }
}

export const completeTodo = id => {
    return async dispatch => {
        const { type, id: todoId } = completeTodoCreator(id)

        return lsCompleteTodo(todoId).then(response => {
            dispatch({ type, id: response })
        }).catch(error => {
            throw error
        })
    }
}
