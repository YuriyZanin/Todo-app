import Input from "./components/Input/Input";
import List from "./components/List/List";
import Layout from "./components/Layout/Layout";
import Card from "./components/Card/Card";
import Toolbar from "./components/Toolbar/Toolbar";
import { sortingOptions } from "./data/constants";
import { useSelector } from "react-redux";
import { selectTasks } from "./slices/slice";
import styles from "./App.module.css"

function App() {
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
}

export default App;
