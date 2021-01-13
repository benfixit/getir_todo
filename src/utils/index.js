import { TODO_STATUS } from './constants'

/**
 * These functions (add, remove and complete) help extract the logic that is shared between the localstorage apis and the todo reducer
 */

export const add = (todos, todo) => {
    return [...todos, todo]
}

export const remove = (todos, id) => {
    return todos.filter(todo => todo.id !== id)
}

export const complete = (todos, id) => {
    const todo = todos.find(todo => todo.id === id)

    const newTodos = [...todos.filter(todo => todo.id !== id), {...todo, status: TODO_STATUS.COMPLETE }]

    return newTodos;
}

/**
 * This function generates a random number between 500 and 1000 exclusive
 */
export const generateRandomDelay = () => {
    const rand = 1 + Math.random();
    
    return 500 * (parseFloat(rand.toFixed(2)))
}