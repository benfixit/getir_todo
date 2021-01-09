import { render, screen } from './utils';
import { format } from 'date-fns';
import { v4 } from 'uuid';
import TodoList from '../components/TodoList';
import { TODO_STATUS } from '../utils/constants';

test('renders today\'s name and empty TodoList text', () => {
    const dayName = format(new Date(), 'EEEE');
    const todos = [];
    render(<TodoList />, { initialState: { todos } })
    expect(screen.getByText(dayName)).toBeInTheDocument()
    expect(screen.getByText(/You do not have any todos for the selected date./i)).toBeInTheDocument()
})

test('renders todo list', () => {
    const todos = [
        {
            id: v4(),
            description: 'Test Todo 1',
            startDate: new Date(),
            endDate: new Date(),
            status: TODO_STATUS.COMPLETE
        },
        {
            id: v4(),
            description: 'Test Todo 2',
            startDate: new Date(),
            endDate: new Date(),
            status: TODO_STATUS.INCOMPLETE
        }
    ]
    render(<TodoList />, { initialState: { todos } })
    expect(screen.getByText(/Test Todo 1/i)).toBeInTheDocument()
    expect(screen.getByText(/Test Todo 2/i)).toBeInTheDocument()
})