import { render, screen } from "@testing-library/react";
import App from "./App";
import { Provider } from "react-redux";
import { store } from "./store/store";
import { MemoryRouter } from "react-router";

test("renders all components", () => {
  render(
    <Provider store={store}>
      <MemoryRouter>
        <App />
      </MemoryRouter>
    </Provider>
  );
  const list = screen.getByTestId("List");
  const Input = screen.getByTestId("Input");
  const toolbar = screen.getByTestId("Toolbar");
  expect(list).toBeInTheDocument();
  expect(Input).toBeInTheDocument();
  expect(toolbar).toBeInTheDocument();
});
