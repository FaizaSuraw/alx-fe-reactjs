import { render, screen, fireEvent } from '@testing-library/react';
import TodoList from '../components/TodoList';

test('renders TodoList component with items and allows adding a new todo', () => {
  const todos = ['Learn React', 'Build a Todo App'];

  render(<TodoList todos={todos} />);


  todos.forEach(todo => {
    expect(screen.getByText(todo)).toBeInTheDocument();
  });

  
  const input = screen.getByPlaceholderText(/add a new todo/i);
  const button = screen.getByText(/add/i);


  fireEvent.change(input, { target: { value: 'Write Tests' } });
  fireEvent.click(button);

 
  expect(screen.getByText('Write Tests')).toBeInTheDocument();
});
