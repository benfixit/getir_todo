import { createStore } from 'redux'
import todos from './reducers/todos'
import { TODO_STATUS } from './utils/constants'

const initialState = {
    todos: [
        {id: 1, description: 'Eat foods', startDate: new Date(), endDate: new Date(), status: TODO_STATUS.COMPLETE },
        {id: 2, description: 'Write code', startDate: new Date(), endDate: new Date(), status: TODO_STATUS.COMPLETE }
    ]
}

const store = createStore(todos, initialState)

export default store;