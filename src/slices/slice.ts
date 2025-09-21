import { createSelector, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Task } from "../models/Task";
import { TSortOption } from "../models/types";
import { sortingDefault } from "../data/constants";

export interface TodoState {
  tasks: Task[];
  sortBy: TSortOption;
}

const initialState: TodoState = {
  tasks: [],
  sortBy: "All",
};

const todoSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    toggleCompleted: (state, action: PayloadAction<Task>) => {
      const found = state.tasks.find((task) => task.id === action.payload.id);
      if (found) {
        found.complete = !found.complete;
      }
    },
    clearCompleted: (state) => {
      state.tasks = state.tasks.filter((task) => !task.complete);
      state.sortBy = sortingDefault;
    },
    addTask: (state, action: PayloadAction<Task>) => {
      state.tasks.push(action.payload);
      state.sortBy = sortingDefault;
    },
    setSortMethod: (state, action: PayloadAction<TSortOption>) => {
      state.sortBy = action.payload;
    },
  },
  selectors: {
    getSortMethod: (state) => {
      return state.sortBy;
    },
    getLeftTasks: (state) => {
      return state.tasks.filter((task) => !task.complete).length;
    },
  },
});

export const selectTasksBase = (state: TodoState) => state.tasks;
export const selectSortBy = (state: TodoState) => state.sortBy;

export const selectTasks = createSelector(
  [selectTasksBase, selectSortBy],
  (tasks, sortBy) => {
    switch (sortBy) {
      case "All":
        return tasks;
      case "Active":
        return tasks.filter((task) => !task.complete);
      case "Completed":
        return tasks.filter((task) => task.complete);
      default:
        return tasks;
    }
  }
);

export const getSortMethod = createSelector(selectSortBy, (sortBy) => sortBy);

export const getLeftTasks = createSelector(
  selectTasksBase,
  (tasks) => tasks.filter((task) => !task.complete).length
);

export const { addTask, toggleCompleted, clearCompleted, setSortMethod } =
  todoSlice.actions;

export default todoSlice.reducer;
