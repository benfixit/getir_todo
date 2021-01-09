import { createStore } from 'redux'
import todos from './reducers/todos'

const initialState = {
    todos: []
}

const store = createStore(todos, initialState)

export default store;