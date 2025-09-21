import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Input from "./Input";
import { Provider } from "react-redux";
import { store } from "../../store/store";

describe("<Input />", () => {
  test("it should mount", () => {
    render(
      <Provider store={store}>
        <Input />
      </Provider>
    );

    const input = screen.getByTestId("Input");

    expect(input).toBeInTheDocument();
  });
});
