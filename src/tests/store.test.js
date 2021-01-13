import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { mockLocalStorage } from './__mocks__/localStorage';
import { todos, todo as mockTodo } from './__mocks__/todos';
import { addTodo, fetchTodos, completeTodo, removeTodo } from '../actions/todos';
import { TODO_ACTIONS } from '../utils/constants';

const { getItemMock } = mockLocalStorage();

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('Test fetch todos action creator', () => {
    let store, todo
    beforeAll(() => {
        todo = mockTodo
    })

    beforeEach(() => {
        const initialState = { todos };
        store = mockStore(initialState);
        getItemMock.mockReturnValue(JSON.stringify(initialState));
    })
    
    test('expect fetch todos action to be dispatched', () => {
        const expectedActions = [TODO_ACTIONS.FETCH_TODOS]

        return store.dispatch(fetchTodos()).then(() => {
            const actualActions = store.getActions().map(action => action.type)

            expect(actualActions).toEqual(expectedActions)
        })
    })

    test('expect add todo action to be dispatched', () => {
        const expectedActions = [TODO_ACTIONS.ADD_TODO]

        return store.dispatch(addTodo(todo)).then(() => {
            const actualActions = store.getActions().map(action => action.type)

            expect(actualActions).toEqual(expectedActions)
        })
    })

    test('expect remove todo action to be dispatched', () => {
        const expectedActions = [TODO_ACTIONS.REMOVE_TODO]

        return store.dispatch(removeTodo(todo.id)).then(() => {
            const actualActions = store.getActions().map(action => action.type)

            expect(actualActions).toEqual(expectedActions)
        })
    })

    test('expect complete todo action to be dispatched', () => {
        const expectedActions = [TODO_ACTIONS.COMPLETE_TODO]

        return store.dispatch(completeTodo(todo.id)).then(() => {
            const actualActions = store.getActions().map(action => action.type)

            expect(actualActions).toEqual(expectedActions)
        })
    })
})
