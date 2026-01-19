import { useEffect, useState } from "react";
import Spinner from "./sppiner";

function TaskList() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [submitting, setSubmitting] = useState(false);

  // 🔹 GET tasks
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos?_limit=5")
      .then(res => {
        if (!res.ok) {
          throw new Error("Failed to fetch tasks");
        }
        return res.json();
      })
      .then(data => {
        setTasks(data);
        setLoading(false);
      })
      .catch(err => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  // 🔹 POST task
  function handleSubmit(e) {
    e.preventDefault();
    if (!newTask.trim()) return;

    setSubmitting(true);
    setError("");

    fetch("https://jsonplaceholder.typicode.com/todos", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        title: newTask,
        completed: false
      })
    })
      .then(res => {
        if (!res.ok) {
          throw new Error("Failed to add task");
        }
        return res.json();
      })
      .then(data => {
        setTasks([data, ...tasks]);
        setNewTask("");
        setSubmitting(false);
      })
      .catch(err => {
        setError(err.message);
        setSubmitting(false);
      });
  }

  // 🔹 LOADING STATE
  if (loading) {
    return <Spinner />;
  }

  return (
    <div className="space-y-4">
      {/* ERROR MESSAGE */}
      {error && (
        <div className="bg-red-100 text-red-700 p-2 rounded">
          {error}
        </div>
      )}

      {/* FORM */}
      <form onSubmit={handleSubmit} className="flex gap-2">
        <input
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          placeholder="Enter new task"
          className="flex-1 border p-2 rounded"
          disabled={submitting}
        />

        <button
          disabled={submitting}
          className={`px-4 py-2 rounded text-white ${
            submitting
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-blue-500 hover:bg-blue-600"
          }`}
        >
          {submitting ? "Adding..." : "Add Task"}
        </button>
      </form>

      {/* TASK LIST */}
      <ul className="space-y-2">
        {tasks.map(task => (
          <li
            key={task.id}
            className="p-2 bg-gray-100 rounded"
          >
            {task.title}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TaskList;
