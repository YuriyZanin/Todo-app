import styles from "./Todos.module.css";
import Layout from "../components/Layout/Layout";
import Card from "../components/Card/Card";
import Input from "../components/Input/Input";
import List from "../components/List/List";
import Toolbar from "../components/Toolbar/Toolbar";
import { selectTasks } from "../slices/slice";
import { sortingOptions } from "../data/constants";
import { useSelector } from "react-redux";

const Todos = () => {
  const tasks = useSelector(selectTasks);

  return (
    <Layout>
      <h1 className={styles.Header}>todos</h1>
      <Card>
        <Input />
        <List tasks={tasks} />
        <Toolbar sortingOptions={sortingOptions} />
      </Card>
    </Layout>
  );
};

export default Todos;
