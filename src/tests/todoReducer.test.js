import todos from '../reducers/todos';
import { todos as mockTodos, todo } from './__mocks__/todos';
import { addTodoCreator, removeTodoCreator, completeTodoCreator } from '../actions/todos'
import { add, remove, complete } from '../utils/index'

describe('todos reducer', () => {
    let state
    beforeEach(() => {
        state = { todos: mockTodos };
    })

    test('It should return the initial state', () => {
        expect(todos(state, {})).toEqual(state)
    })

    test('It should handle add todo', () => {
        const action = addTodoCreator(todo);

        expect(todos(state, action)).toEqual({
            ...state,
            todos: add(state.todos, action)
        })
    })

    test('It should handle remove todo', () => {
        const action = removeTodoCreator(todo.id);

        expect(todos(state, action)).toEqual({
            ...state,
            todos: remove(state.todos, action.id)
        })
    })

    test('It should handle complete todo', () => {
        const action = completeTodoCreator(todo);

        expect(todos(state, action)).toEqual({
            ...state,
            todos: complete(state.todos, action.id)
        })
    })
})