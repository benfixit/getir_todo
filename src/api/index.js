import { add, remove, complete, generateRandomDelay } from "../utils";

 /**
  * This function returns a list of todos stored in the localstorage
  */
export const fetchTodos = () => {
    return new Promise((resolve, reject) => {
        const data = JSON.parse(localStorage.getItem('todo_store'));
        const randomDelay = generateRandomDelay();

        if(data){
            return setTimeout(() => resolve(data.todos), randomDelay)
        }

        return setTimeout(() => reject("Oops! Store not available.", randomDelay));
    })
}

/**
 * Saves a todo to the localstorage and returns it if successful
 * @param {*} todo 
 */
export const saveTodo = todo => {
    return new Promise((resolve, reject) => {
        /**
         * Ordinarily, the logic of checking the todos count should not live here but for testing purposes, 
         * I am limiting the number of Incomplete Todos to be added to 3.
         * This should enable reject to be fired after adding 3 incomplete todos
         */
        const data = JSON.parse(localStorage.getItem('todo_store'))
        const randomDelay = generateRandomDelay();

        if(data.todos){

            const newData = {...data, todos: add(data.todos, todo)}

            localStorage.setItem('todo_store', JSON.stringify(newData))

            return setTimeout(() => resolve(todo), randomDelay)
        }

        return setTimeout(() => reject("Memory full. Delete some incomplete todos to add more."), randomDelay)
    })
}

/**
 * Removes a todo from the localstorage and returns the id if successful
 * @param {*} id 
 */
export const removeTodo = id => {
    return new Promise((resolve, reject) => {
        const randomDelay = generateRandomDelay();
        // TODO We could make this more robust by checking if it's a valid id
        // and returning a corresponding error message
        if(id){
            const data = JSON.parse(localStorage.getItem('todo_store'))

            const newData = {...data, todos: remove(data.todos, id)}
    
            localStorage.setItem('todo_store', JSON.stringify(newData))
    
            return setTimeout(() => resolve(id), randomDelay)
        }

        return setTimeout(() => reject("Please select a todo to remove"), randomDelay)
    })
}

/**
 * Marks a todo as complete and returns the id if successful
 * @param {*} id 
 */
export const completeTodo = id => {
    return new Promise((resolve, reject) => {
        const randomDelay = generateRandomDelay();
        if(id){
            const data = JSON.parse(localStorage.getItem('todo_store'))

            const newData = {...data, todos: complete(data.todos, id)}

            localStorage.setItem('todo_store', JSON.stringify(newData))

            return setTimeout(() => resolve(id), randomDelay)
        }

        return setTimeout(() => reject("Please select a todo to mark as complete"), randomDelay)
    })
}