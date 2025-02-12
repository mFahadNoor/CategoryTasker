import React, { useState } from "react";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import FilterBar from "./components/FilterBar";

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [filters, setFilters] = useState({
    search: "",
    category: "",
    priority: "",
  });

  const addTask = (task) => setTasks((prevTasks) => [...prevTasks, task]);
  const deleteTask = (id) =>
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
  const toggleComplete = (id) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  // Apply filters
  const filteredTasks = tasks
    .filter((task) =>
      task.title.toLowerCase().includes(filters.search.toLowerCase())
    )
    .filter((task) =>
      filters.category ? task.category === filters.category : true
    )
    .filter((task) =>
      filters.priority ? task.priority === filters.priority : true
    );

  return (
    <div className="task-manager">
      <h1>Task Manager</h1>
      <TaskForm addTask={addTask} />
      <FilterBar filters={filters} setFilters={setFilters} />
      <TaskList
        tasks={filteredTasks}
        toggleComplete={toggleComplete}
        deleteTask={deleteTask}
      />
    </div>
  );
};

export default App;
