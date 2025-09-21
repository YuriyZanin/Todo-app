import { FC } from "react";
import styles from "./Toolbar.module.css";
import Button from "../Button/Button";
import { TSortOption, TSortOptions } from "../../models/types";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "../../store/store";
import {
  clearCompleted,
  getLeftTasks,
  getSortMethod,
  setSortMethod,
} from "../../slices/slice";

export interface ToolbarProps {
  sortingOptions: TSortOptions;
}

const Toolbar: FC<ToolbarProps> = ({ sortingOptions }) => {
  const dispatch = useDispatch<AppDispatch>();
  const activeSort = useSelector(getSortMethod);
  const sizeLeft = useSelector(getLeftTasks);

  const handleClear = () => {
    dispatch(clearCompleted());
  };

  const handleSort = (param: TSortOption) => {
    dispatch(setSortMethod(param));
  };

  return (
    <div className={styles.Toolbar} data-testid="Toolbar">
      <div className={styles.Label}>{sizeLeft} items left</div>
      <div className={styles.SortButtons}>
        {sortingOptions.map((option) => (
          <Button
            key={option}
            title={option}
            active={activeSort === option}
            onClick={() => handleSort(option)}
          />
        ))}
      </div>
      <Button title="Clear completed" onClick={handleClear} />
    </div>
  );
};

export default Toolbar;
