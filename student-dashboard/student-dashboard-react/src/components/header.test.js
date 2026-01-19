import { render, screen } from "@testing-library/react";
import Header from "./header";

test("renders header title", () => {
  render(<Header title="Student Task Manager" />);
  const heading = screen.getByText("Student Task Manager");
  expect(heading).toBeInTheDocument();
});
