
function TaskItem({ task, toggleTask, deleteTask, startEditing }) {
  return (
    <li
      style={{
        textDecoration: task.completed ? "line-through" : "none",
        backgroundColor: task.completed
          ? "#c2bfc1"
          : task.priority === "yüksek"
          ? "#fee2e2"
          : task.priority === "orta"
          ? "#ffedd5"
          : "#dbeafe",
        padding: "12px",
        marginBottom: "10px",
        borderRadius: "10px",
        listStyle: "none",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        gap: "12px",
      }}
    >
      <div>
        <input
          type="checkbox"
          checked={task.completed}
          onChange={() => toggleTask(task.id)}
        />

        {task.description} -{" "}
        {task.completed ? "Tamamlandı" : "Devam Ediyor"} -{" "}
        <span className={`priority-${task.priority}`}>
          {task.priority}
        </span>
      </div>

      <div style={{ display: "flex", gap: "8px" }}>
        <button onClick={() => startEditing(task)}>Düzenle</button>
        <button onClick={() => deleteTask(task.id)}>Sil</button>
      </div>
    </li>
  );
}

export default TaskItem;
