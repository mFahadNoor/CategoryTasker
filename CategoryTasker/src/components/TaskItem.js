import React from "react";

const TaskItem = ({ task, toggleComplete, deleteTask }) => {
  return (
    <div className={`task-item ${task.completed ? "completed" : ""}`}>
      <h3>{task.title}</h3>
      <p>Category: {task.category}</p>
      <p>Priority: {task.priority}</p>
      <p>Deadline: {task.deadline}</p>
      <button onClick={() => toggleComplete(task.id)}>
        {task.completed ? "Undo" : "Complete"}
      </button>
      <button onClick={() => deleteTask(task.id)}>Delete</button>
    </div>
  );
};

export default TaskItem;
