import { TODO_ACTIONS } from '../utils/constants';
import { add, remove, complete } from "../utils";

const todos = (state, action) => {
    switch(action.type){
        case TODO_ACTIONS.ADD_TODO:
            return {...state, todos: add(state.todos, action)}
        case TODO_ACTIONS.REMOVE_TODO:
            return {...state, todos: remove(state.todos, action.id)}
        case TODO_ACTIONS.COMPLETE_TODO:
            return {...state, todos: complete(state.todos, action.id)}
        case TODO_ACTIONS.FETCH_TODOS:
            return {...state, todos: action.todos}
        default:
            return state
    }
}

export default todos