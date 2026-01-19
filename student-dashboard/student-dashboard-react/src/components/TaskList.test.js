import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import TaskList from "./TaskList";

beforeEach(() => {
  global.fetch = jest.fn(() =>
    Promise.resolve({
      ok: true,
      json: () =>
        Promise.resolve([
          { id: 1, title: "Test task 1", completed: false },
        ]),
    })
  );
});

afterEach(() => {
  jest.resetAllMocks();
});

test("allows typing a new task", async () => {
  render(<TaskList />);

  // Wait until loading is done and a task appears
  await waitFor(() =>
    expect(screen.getByText("Test task 1")).toBeInTheDocument()
  );

  const input = screen.getByPlaceholderText("Enter new task");

  fireEvent.change(input, { target: { value: "New Task" } });

  expect(input).toHaveValue("New Task");
});
