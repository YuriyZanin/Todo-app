import { render, screen } from "@testing-library/react";
import Toolbar from "./Toolbar";
import { store } from "../../store/store";
import { Provider } from "react-redux";

describe("<Toolbar />", () => {
  test("it should mount", () => {
    render(
      <Provider store={store}>
        <Toolbar sortingOptions={["All", "Active", "Completed"]} />
      </Provider>
    );

    const toolbar = screen.getByTestId("Toolbar");

    expect(toolbar).toBeInTheDocument();
  });
});
