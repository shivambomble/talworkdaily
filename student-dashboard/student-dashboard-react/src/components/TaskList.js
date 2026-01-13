import { useState } from "react";

function TaskList() {
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState("");
  const [editIndex, setEditIndex] = useState(null);

  function handleSubmit(e) {
    e.preventDefault();
    if (!task.trim()) return;

    if (editIndex === null) {
      // ADD
      setTasks([...tasks, task]);
    } else {
      // EDIT
      const updatedTasks = [...tasks];
      updatedTasks[editIndex] = task;
      setTasks(updatedTasks);
      setEditIndex(null);
    }

    setTask("");
  }

  function handleEdit(index) {
    setTask(tasks[index]);
    setEditIndex(index);
  }

  function handleDelete(indexToDelete) {
    setTasks(tasks.filter((_, index) => index !== indexToDelete));
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          value={task}
          onChange={(e) => setTask(e.target.value)}
          placeholder="Enter task"
        />
        <button>
          {editIndex === null ? "Add Task" : "Update Task"}
        </button>
      </form>

      <ul>
        {tasks.map((t, index) => (
          <li key={index}>
            {t}
            <button onClick={() => handleEdit(index)}>✏️</button>
            <button onClick={() => handleDelete(index)}>❌</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TaskList;
