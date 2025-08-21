import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import TodoList from "../TodoList";

describe("TodoList Component", () => {
  test("renders initial todos", () => {
    render(<TodoList />);
    expect(screen.getByText(/Buy groceries/i)).toBeInTheDocument();
  });

  test("adds a new todo", () => {
    render(<TodoList />);
    fireEvent.change(screen.getByPlaceholderText(/Add a new todo/i), {
      target: { value: "Learn React" },
    });
    fireEvent.click(screen.getByText(/Add Todo/i));
    expect(screen.getByText(/Learn React/i)).toBeInTheDocument();
  });

  test("removes a todo", () => {
    render(<TodoList />);
    fireEvent.click(screen.getAllByText(/Remove/i)[0]);
    expect(screen.queryByText(/Buy groceries/i)).not.toBeInTheDocument();
  });
});
