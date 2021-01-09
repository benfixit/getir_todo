import React from 'react';
import { render as rtlRender } from '@testing-library/react';
import { createStore } from 'redux';
import { Provider } from 'react-redux'
import todos from '../reducers/todos'

function render(ui, { initialState, store = createStore(todos, initialState), ...renderOptions} = {}){
    function Wrapper({ children }){
        return <Provider store={store}>{children}</Provider>
    }
    return rtlRender(ui, { wrapper: Wrapper, ...renderOptions })
}

// Re-exporting everything
export * from '@testing-library/react'

// Overriding the render method
export { render }