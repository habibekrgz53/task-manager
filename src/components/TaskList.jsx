
import TaskItem from "./TaskItem";

function TaskList({
  tasks,
  editingId,
  editedText,
  setEditedText,
  saveTask,
  cancelEditing,
  toggleTask,
  deleteTask,
  startEditing,
}) {
  if (tasks.length === 0) {
    return <p>Aramana uygun görev bulunamadı.</p>;
  }

  return (
    <ul>
      {tasks.map((task) =>
        editingId === task.id ? (
          <li key={task.id}>
            <input
              value={editedText}
              onChange={(event) => setEditedText(event.target.value)}
              onKeyDown={(event) => {
                if (event.key === "Enter") {
                  saveTask(task.id);
                }
              }}
            />

            <button onClick={() => saveTask(task.id)}>
              Kaydet
            </button>

            <button onClick={cancelEditing}>
              İptal
            </button>
          </li>
        ) : (
          <TaskItem
            key={task.id}
            task={task}
            toggleTask={toggleTask}
            deleteTask={deleteTask}
            startEditing={startEditing}
          />
        )
      )}
    </ul>
  );
}

export default TaskList;
