import { useStore } from "../store";
import Task from "./Task";
import "./Column.css";
import { useMemo } from "react";

const Column = ({ state }) => {
  const tasks = useStore((store) => store.task);

  // avoid re-rendering when tasks change
  const filteredTasks = useMemo(
    () => tasks.filter((task) => task.state === state),
    [tasks, state]
  );

  console.log(filteredTasks);

  return (
    <div className="column">
      <p>{state}</p>
      {filteredTasks.map((task) => (
        <Task key={task.title} title={task.title} />
      ))}
    </div>
  );
};

export default Column;
