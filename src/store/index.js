import storeFactory from './factory'

export const initialState = { todos: [], error: null }

// Set up local storage
if(!localStorage.getItem('todo_store')){
    localStorage.setItem('todo_store', JSON.stringify(initialState))
}
  
const store = storeFactory(initialState)

export default store