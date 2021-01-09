import { createStore } from 'redux'
import todos from './reducers/todos'

const storeFactory = initialState => createStore(todos, initialState)

export default storeFactory;