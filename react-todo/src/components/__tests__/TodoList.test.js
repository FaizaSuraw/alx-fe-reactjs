import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import TodoList from "../TodoList";

describe("TodoList Component", () => {
  test("renders initial todos", () => {
    render(<TodoList />);
    expect(screen.getByText("Learn React")).toBeInTheDocument();
    expect(screen.getByText("Build a Todo App")).toBeInTheDocument();
  });

  test("adds a new todo", () => {
    render(<TodoList />);
    fireEvent.change(screen.getByPlaceholderText("Add a todo"), {
      target: { value: "New Task" },
    });
    fireEvent.click(screen.getByText("Add")); // ✅ updated to match button label
    expect(screen.getByText("New Task")).toBeInTheDocument();
  });

  test("removes a todo", () => {
    render(<TodoList />);
    fireEvent.click(screen.getAllByTestId("delete-btn")[0]); // ✅ safer selector
    expect(screen.queryByText("Learn React")).not.toBeInTheDocument();
  });
});
