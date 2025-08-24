import { render, screen } from '@testing-library/react';
import TodoList from '../components/TodoList';

test('renders TodoList component with items', () => {
  const todos = ['Learn React', 'Build a Todo App'];

  render(<TodoList todos={todos} />);


  todos.forEach(todo => {
    expect(screen.getByText(todo)).toBeInTheDocument();
  });
});
