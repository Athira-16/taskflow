import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../services/api";
import Navbar from "../components/Navbar";
import TaskBoard from "../components/TaskBoard";

function Dashboard() {
  const navigate = useNavigate();
  const [projects, setProjects] = useState([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [editingId, setEditingId] = useState(null);

  const [editTitle, setEditTitle] = useState("");

  const [editDescription, setEditDescription] = useState("");

  const fetchProjects = async () => {
    const res = await API.get("/projects");
    setProjects(res.data);
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  const createProject = async () => {
    await API.post("/projects", {
      title,
      description,
    });

    setTitle("");
    setDescription("");

    fetchProjects();
  };

  const updateProject = async (id) => {
    await API.put(`/projects/${id}`, {
      title: editTitle,
      description: editDescription,
    });

    setEditingId(null);

    fetchProjects();
  };

  const deleteProject = async (id) => {
    await API.delete(`/projects/${id}`);
    fetchProjects();
  };

  return (
    <>
      <Navbar />

      <div className="dashboard">
        <div className="project-form">
          <h2>Create Project</h2>

          <input
            type="text"
            placeholder="Project Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />

          <textarea
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />

          <button onClick={createProject}>Add Project</button>
        </div>

        {/* <TaskBoard tasks={tasks} setTasks={setTasks} fetchTasks={fetchProjects} /> */}

        <div className="project-grid">
          {projects.map((project) => (
            <div className="project-card" key={project._id}>
              {editingId === project._id ? (
                <>
                  <input
                    type="text"
                    value={editTitle}
                    onChange={(e) => setEditTitle(e.target.value)}
                  />

                  <textarea
                    value={editDescription}
                    onChange={(e) => setEditDescription(e.target.value)}
                  />

                  <button onClick={() => updateProject(project._id)}>
                    Save
                  </button>
                </>
              ) : (
                <>
                  <h3>{project.title}</h3>

                  <p>{project.description}</p>
                  <div className="button-group">
                    <button
                      onClick={() => {
                        setEditingId(project._id);

                        setEditTitle(project.title);

                        setEditDescription(project.description);
                      }}
                    >
                      Edit
                    </button>

                    <button onClick={() => navigate(`/project/${project._id}`)}>
                      Open Project
                    </button>

                    <button onClick={() => deleteProject(project._id)}>
                      Delete
                    </button>
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Dashboard;
