import { render, screen, fireEvent } from './utils';
import NavBar from '../components/NavBar';

test('renders App title', async () => {
  const onAddTask = jest.fn()
  render(<NavBar onClickAddTask={onAddTask} />);
  const headerText = screen.getByText(/getir todo/i);
  expect(headerText).toBeInTheDocument();

  const addTaskElement = screen.getByTestId('addTask')
  await fireEvent.click(addTaskElement)
  expect(onAddTask).toBeCalled();  
});

test('Fires add task action', async () => {
  const onAddTask = jest.fn()
  render(<NavBar onClickAddTask={onAddTask} />);

  const addTaskElement = screen.getByTestId('addTask')
  await fireEvent.click(addTaskElement)
  expect(onAddTask).toBeCalled();  
});