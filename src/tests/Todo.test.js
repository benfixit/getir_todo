import { render, screen, fireEvent } from './utils';
import { v4 } from 'uuid';
import { TODO_STATUS } from '../utils/constants';
import Todo from '../components/Todo';

test('render completed todo', async () => {
    const todo = {
        id: v4(),
        description: 'Test Todo 1',
        startDate: new Date(),
        endDate: new Date(),
        status: TODO_STATUS.COMPLETE
    }

    const { queryByTestId } = render(<Todo todo={todo} />);
    expect(screen.getByText(/Test Todo 1/i)).toBeInTheDocument();
    expect(queryByTestId('removeTask')).toBeNull()
})

test('render incomplete todo', async () => {
    const todo = {
        id: v4(),
        description: 'Test Todo 1',
        startDate: new Date(),
        endDate: new Date(),
        status: TODO_STATUS.INCOMPLETE
    }

    render(<Todo todo={todo} />);
    expect(screen.getByText(/Test Todo 1/i)).toBeInTheDocument();

    const removeTodoElement = screen.getByTestId('removeTodo');
    expect(removeTodoElement).toBeInTheDocument();
})