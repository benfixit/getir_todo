import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { format } from 'date-fns';
import { render, screen } from './utils';
import TodoList from '../components/TodoList';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

test('renders today\'s name and loading spinner', () => {
    const dayName = format(new Date(), 'EEEE');
    const todos = [];
    const initialState = { todos };
    const store = mockStore(initialState);
    
    const fetchTodos = jest.fn();
    render(<TodoList fetchTodos={fetchTodos} />, { initialState, store })

    expect(screen.getByText(dayName)).toBeInTheDocument()
    expect(screen.getByTestId('loadingTodos')).toBeInTheDocument()
})
