import { useMemo } from "react";
import { useStore } from "../store";
import classNames from "classnames";
import "./Task.css";

const STATUS = "PLANNED";

const Task = ({ title }) => {
  const tasks = useStore((store) => store.task);

  // avoid re-rendering when tasks change
  const findTask = useMemo(
    () => tasks.find((task) => task.title === title),
    [tasks, title]
  );

  console.log(findTask);

  return (
    <div className="task">
      <div className="">{findTask.title}</div>
      <div className="bottomWrapper">
        <div></div>
        <div className={classNames("status", findTask.state)}>
          {findTask.state}
        </div>
      </div>
    </div>
  );
};

export default Task;
