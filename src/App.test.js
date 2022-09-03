import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders fish facks page", () => {
  render(<App />);
  const linkElement = screen.getByText(/fish facts!/i);
  expect(linkElement).toBeInTheDocument();
});
