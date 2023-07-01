import { useState } from "react";
import Header from "../components/Header";
import Tasks from "../components/Tasks";
import AddTask from "../components/AddTask";

const App = () => {
  const [showAddTask, setShowAddTask] = useState(false)

  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "Go to class",
      day: "7th June , 2023",
      reminder: true,
    },
    {
      id: 2,
      text: "Get supper",
      day: "8th June , 2023",
      reminder: true,
    },
    {
      id: 3,
      text: "Visit a relative",
      day: "10th June , 2023",
      reminder: false,
    },
  ]);

  // adding task
  const addTask = (task) => {
    const id = Math.floor(Math.random() * 1000) + 1;
    const newTask = { id, ...task };
    setTasks([...tasks, newTask]);
  };

  // delete tasks
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  //toggle reminder
  const toggleReminder = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, reminder: !task.reminder } : task
      )
    );
  };

  return (
    <div className="container">
      <Header showAddTask={showAddTask} onAdd={() => setShowAddTask(!showAddTask)} />
      {showAddTask && <AddTask onAdd={addTask} />}
      {tasks.length > 0 ? (
        <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />
      ) : (
        "No Tasks to show"
      )}
    </div>
  );
};

export default App;
