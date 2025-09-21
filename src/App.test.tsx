import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";
import { Provider } from "react-redux";
import { store } from "./store/store";

test("renders all components", () => {
  render(
    <Provider store={store}>
      <App />
    </Provider>
  );
  const list = screen.getByTestId("List");
  const Input = screen.getByTestId("Input");
  const toolbar = screen.getByTestId("Toolbar");
  expect(list).toBeInTheDocument();
  expect(Input).toBeInTheDocument();
  expect(toolbar).toBeInTheDocument();
});
