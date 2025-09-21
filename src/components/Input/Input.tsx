import React, { FC, useState } from "react";
import styles from "./Input.module.css";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../store/store";
import { addTask } from "../../slices/slice";

const Input: FC = () => {
  const [value, setValue] = useState<string>("");
  const dispatch = useDispatch<AppDispatch>();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (value.trim()) {
      const newTask = {
        id: Math.random(),
        text: value,
        complete: false,
      };

      dispatch(addTask(newTask));
      setValue("");
    }
  };

  return (
    <div className={styles.Input} data-testid="Input">
      <form action="submit" onSubmit={handleSubmit}>
        <input
          type="text"
          className={styles.Input}
          name="todo"
          value={value}
          onChange={(e) => {
            setValue(e.target.value);
          }}
          placeholder="what needs to be done?"
        />
      </form>
    </div>
  );
};

export default Input;
