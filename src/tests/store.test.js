import storeFactory from '../store/factory'
import { addTodo, removeTodo } from '../actions/todos'
import { TODO_STATUS } from '../utils/constants'

describe('Add Todo', () => {
    let store
    beforeAll(() => {
        store = storeFactory({ todos: [] })
        store.dispatch(addTodo({
            description: 'Test Todo 1',
            startDate: new Date(),
            endDate: new Date(),
            status: TODO_STATUS.INCOMPLETE
        }))
    })
    
    test('should add a new todo', () => {
        expect(store.getState().todos.length).toBe(1)
    })
    
    test('should add a unique guid id', () => {
        expect(store.getState().todos[0].id.length).toBe(36)
    })
    
    test('should set the status to incomplete', () => {
        expect(store.getState().todos[0].status).toBe("INCOMPLETE")
    })
})

describe('Remove Todo', () => {
    let store
    beforeAll(() => {
        store = storeFactory({ todos: [] })
        store.dispatch(addTodo({
            description: 'Test Todo 1',
            startDate: new Date(),
            endDate: new Date(),
            status: TODO_STATUS.INCOMPLETE
        }))
    })

    test('should remove todo', () => {
        expect(store.getState().todos.length).toBe(1)

        const todoId = store.getState().todos[0].id;
        store.dispatch(removeTodo(todoId));

        expect(store.getState().todos.length).toBe(0)
    })
})