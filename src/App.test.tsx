import { render, screen } from "@testing-library/react";
import React from "react";
import App from "./App";

test("renders fish facts page", () => {
  render(<App />);
  const linkElement = screen.getByText(/fish facts/i);
  expect(linkElement).toBeInTheDocument();
});
