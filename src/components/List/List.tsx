import { FC } from "react";
import styles from "./List.module.css";
import { Task } from "../../models/Task";
import Item from "../Item/Item";

interface ListProps {
  tasks: Task[];
}

const List: FC<ListProps> = ({ tasks }) => (
  <div className={styles.List} data-testid="List">
    {tasks.map((item) => (
      <Item key={item.id} task={item} />
    ))}
  </div>
);

export default List;
