import { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import API from "../services/api";
import TaskBoard from "../components/TaskBoard";

function ProjectDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [tasks, setTasks] = useState([]);

  const [taskTitle, setTaskTitle] = useState("");

  const fetchTasks = async () => {
    const res = await API.get(`/tasks/${id}`);

    setTasks(res.data);
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  const addTask = async () => {
    await API.post("/tasks", {
      title: taskTitle,
      project: id,
    });

    setTaskTitle("");

    fetchTasks();
  };

  return (
    <div className="detail-dashboard">
      <Link to="/dashboard">Back to Dashboard </Link>
      <h2>Project Tasks</h2>

      <div className="task-input">
        <input
          type="text"
          placeholder="Task title"
          value={taskTitle}
          onChange={(e) => setTaskTitle(e.target.value)}
        />

        <button onClick={addTask}>Add Task</button>
      </div>

      <TaskBoard tasks={tasks} setTasks={setTasks} fetchTasks={fetchTasks} />
    </div>
  );
}

export default ProjectDetails;
