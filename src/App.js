import { useEffect, useState } from "react";
import { useDrop } from "react-dnd";
import AddTask from "./components/AddTask";
import ToDo from "./components/ToDo";

function App() {
  const [taskList, setTaskList] = useState([]);
  const [completed, setCompleted] = useState([]);

  useEffect(() => {
    let array = localStorage.getItem("taskList");

    if (array) {
      setTaskList(JSON.parse(array));
    }
  }, []);

  const [{ isOver }, drop] = useDrop(() => ({
    accept: "todo",
    drop: (item) =>
      addToCompleted(
        item.id,
        item.projectName,
        item.taskDescription,
        item.timestamp,
        item.duration
      ),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  }));

  const addToCompleted = (
    id,
    projectName,
    taskDescription,
    timeStamp,
    duration
  ) => {
    const moveTask = taskList.filter((task) => id === task.id);
    setCompleted((completed) => [
      ...completed,
      { moveTask, projectName, taskDescription, timeStamp, duration },
    ]);
  };

  return (
    <>
      <h1 className="text-2xl font-bold py-6 pl-5">03-Task Tracker</h1>
      <p className="text-2xl font-bold py-4 pl-5">Hi there!</p>
      <div className="flex flex-row items-center">
        <p className="text-xl pl-6">Click</p>
        <AddTask taskList={taskList} setTaskList={setTaskList} />
        <p className="text-xl my-2">to add a new task</p>
      </div>
      <div>
        <h2 className="ml-6 text-xl font-semibold w-3/4 max-w-lg my-4 py-2 px-4 bg-gray-300">
          To Do
        </h2>
        {taskList.map((task, i) => (
          <>
            <ToDo
              key={i}
              task={task}
              index={i}
              taskList={taskList}
              setTaskList={setTaskList}
            />
          </>
        ))}
      </div>
      <div className="w-full flex flex-col" ref={drop}>
        <h2 className="text-xl font-semibold w-3/4 max-w-lg my-4 py-2 px-4 bg-gray-300">
          Completed:
        </h2>
        {completed.map((task, i) => (
          <ToDo
            key={i}
            task={task}
            index={i}
            taskList={taskList}
            setTaskList={setTaskList}
          />
        ))}
      </div>
    </>
  );
}

export default App;
