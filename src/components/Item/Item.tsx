import { FC } from "react";
import styles from "./Item.module.css";
import { Task } from "../../models/Task";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../store/store";
import { toggleCompleted } from "../../slices/slice";

export interface ItemProps {
  task: Task;
}

const Item: FC<ItemProps> = ({ task }) => {
  const dispatch = useDispatch<AppDispatch>();

  const handleChange = () => {
    dispatch(toggleCompleted(task));
  };

  return (
    <div className={styles.Item}>
      <input
        className={styles.checkbox}
        type="checkbox"
        id={task.text}
        checked={task.complete}
        onChange={handleChange}
      />
      <label htmlFor={task.text} className={styles.checkboxContainer}></label>
      <div
        className={[
          styles.Task,
          task.complete ? styles.TaskComplete : styles.TaskActive,
        ].join(" ")}
      >
        {task.text}
      </div>
    </div>
  );
};

export default Item;
