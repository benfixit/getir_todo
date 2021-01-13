import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import todos from '../reducers/todos'

const storeFactory = initialState => createStore(todos, initialState, applyMiddleware(thunk))

export default storeFactory;