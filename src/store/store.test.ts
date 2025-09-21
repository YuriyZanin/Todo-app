import { configureStore } from "@reduxjs/toolkit";
import todoSliceReducer from '../slices/slice'
import { store } from "./store";

describe("проверка инициализации хранилища", () => {
  const newStore = configureStore({ reducer: { todoSliceReducer } });

  it("проверка инициализации slice reducer", () => {
    expect(newStore.getState().todoSliceReducer).toEqual({
      tasks: [],
      sortBy: "All",
    });
  });

  it('проверка начального состояния хранилища', () => {
  const expected = todoSliceReducer(undefined, { type: 'UNKNOWN_ACTION' });
  expect(expected).toEqual(store.getState());
});
});
