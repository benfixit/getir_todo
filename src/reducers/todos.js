import { TODO_ACTIONS, TODO_STATUS } from '../utils/constants';

const todos = (state, action) => {
    switch(action.type){
        case TODO_ACTIONS.ADD_TODO:
            return {
                ...state,
                todos: [
                    ...state.todos,
                    {
                        id: action.id,
                        description: action.description,
                        startDate: action.startDate,
                        endDate: action.endDate,
                        status: action.status
                    }
                ]
            }
        case TODO_ACTIONS.REMOVE_TODO:
            return {
                ...state,
                todos: state.todos.filter(todo => todo.id !== action.id)
            }
        case TODO_ACTIONS.COMPLETE_TODO:
            const todo = state.todos.find(todo => todo.id === action.id)
            return {
                ...state,
                todos: [
                    ...state.todos.filter(todo => todo.id !== action.id),
                    {...todo, status: TODO_STATUS.COMPLETE }
                ]
            }
        default:
            return state
    }
}

export default todos