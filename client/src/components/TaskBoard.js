import { DragDropContext, Droppable, Draggable } from "@hello-pangea/dnd";
import { useState } from "react";
import API from "../services/api";

function TaskBoard({ tasks, setTasks, fetchTasks }) {
  const columns = {
    Pending: tasks.filter((task) => task.status === "Pending"),

    "In Progress": tasks.filter((task) => task.status === "In Progress"),

    Completed: tasks.filter((task) => task.status === "Completed"),
  };
  const [editingTaskId, setEditingTaskId] = useState(null);

  const [editTaskTitle, setEditTaskTitle] = useState("");

  const onDragEnd = async (result) => {
    if (!result.destination) return;

    const taskId = result.draggableId;

    const newStatus = result.destination.droppableId;

    await API.put(`/tasks/${taskId}`, {
      status: newStatus,
    });

    fetchTasks();
  };
  const updateTask = async (taskId) => {
    await API.put(`/tasks/${taskId}`, {
      title: editTaskTitle,
    });

    setEditingTaskId(null);

    fetchTasks();
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div className="board">
        {Object.entries(columns).map(([status, items]) => (
          <Droppable droppableId={status} key={status}>
            {(provided) => (
              <div
                className="column"
                ref={provided.innerRef}
                {...provided.droppableProps}
              >
                <h2>{status}</h2>

                {items.map((task, index) => (
                  <Draggable
                    draggableId={task._id}
                    index={index}
                    key={task._id}
                  >
                    {(provided) => (
                      <div
                        className="task-card"
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                      >
                        <>
                          {editingTaskId === task._id ? (
                            <>
                              <input
                                type="text"
                                value={editTaskTitle}
                                onChange={(e) =>
                                  setEditTaskTitle(e.target.value)
                                }
                              />

                              <button onClick={() => updateTask(task._id)}>
                                Save
                              </button>
                            </>
                          ) : (
                            <>
                              <p>{task.title}</p>

                              <button
                                onClick={() => {
                                  setEditingTaskId(task._id);

                                  setEditTaskTitle(task.title);
                                }}
                              >
                                Edit
                              </button>
                            </>
                          )}
                        </>
                      </div>
                    )}
                  </Draggable>
                ))}

                {provided.placeholder}
              </div>
            )}
          </Droppable>
        ))}
      </div>
    </DragDropContext>
  );
}

export default TaskBoard;
