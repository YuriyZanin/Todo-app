import { configureStore } from "@reduxjs/toolkit";
import todoSliceReducer, {
  addTask,
  clearCompleted,
  getLeftTasks,
  getSortMethod,
  selectTasks,
  setSortMethod,
  TodoState,
  toggleCompleted,
} from "./slice";

describe("тесты селекторов", () => {
  const initialState: TodoState = {
    tasks: [
      {
        id: 1,
        text: "test 1",
        complete: false,
      },
      {
        id: 2,
        text: "test 2",
        complete: false,
      },
      {
        id: 3,
        text: "test 3",
        complete: true,
      },
    ],
    sortBy: "All",
  };

  const store = configureStore({
    reducer: todoSliceReducer,
    preloadedState: initialState,
  });

  it("получение списка задач", () => {
    const tasks = selectTasks(store.getState());
    expect(tasks).toEqual(initialState.tasks);
  });

  it("получение текущей сортировки", () => {
    const sortBy = getSortMethod(store.getState());
    expect(sortBy).toEqual("All");
  });

  it("получение количества невыполненых задач", () => {
    const leftTasks = getLeftTasks(store.getState());
    expect(leftTasks).toEqual(
      initialState.tasks.filter((task) => !task.complete).length
    );
  });
});

describe("тесты экшенов", () => {
  const initialState = [
    {
      id: 1,
      text: "test 1",
      complete: false,
    },
    {
      id: 2,
      text: "test 2",
      complete: true,
    },
  ];

  test("отметить задачу как выполненую", () => {
    const newState = todoSliceReducer(
      { tasks: initialState, sortBy: "All" },
      toggleCompleted({
        id: 1,
        text: "test 1",
        complete: false,
      })
    );

    const { tasks: todos } = newState;
    expect(todos).toEqual([
      {
        id: 1,
        text: "test 1",
        complete: true,
      },
      {
        id: 2,
        text: "test 2",
        complete: true,
      },
    ]);
  });

  test("добавить новую задачу", () => {
    const newState = todoSliceReducer(
      { tasks: initialState, sortBy: "All" },
      addTask({
        id: 3,
        text: "test 3",
        complete: false,
      })
    );

    const { tasks: todos } = newState;
    expect(todos).toEqual([
      {
        id: 1,
        text: "test 1",
        complete: false,
      },
      {
        id: 2,
        text: "test 2",
        complete: true,
      },
      {
        id: 3,
        text: "test 3",
        complete: false,
      },
    ]);
  });

  test("очистить выполненые задачи", () => {
    const newState = todoSliceReducer(
      { tasks: initialState, sortBy: "All" },
      clearCompleted()
    );

    const { tasks: todos } = newState;
    expect(todos).toEqual([
      {
        id: 1,
        text: "test 1",
        complete: false,
      },
    ]);
  });

  test("поменять сортировку", () => {
    const newState = todoSliceReducer(
      { tasks: initialState, sortBy: "All" },
      setSortMethod("Completed")
    );

    const { sortBy } = newState;
    expect(sortBy).toEqual("Completed");
  });
});
