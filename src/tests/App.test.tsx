import { screen } from "@testing-library/react";
import React from "react";
import App from "../App";
import { testRender } from "./testing.utils";

test("renders fish facts page", () => {
  testRender(<App />);
  const linkElement = screen.getByText(/fish facts/i);
  expect(linkElement).toBeInTheDocument();
});
