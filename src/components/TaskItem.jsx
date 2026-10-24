
function TaskItem({ task, toggleTask, deleteTask, startEditing }) {
  const priorityLabels = {
    düşük: "Düşük",
    orta: "Orta",
    yüksek: "Yüksek",
  };
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const isOverdue =
    task.dueDate &&
    new Date(task.dueDate + "T00:00:00") < today &&
    !task.completed;

  return (
    <li
    className={`task-item ${task.completed ? "completed" : ""} ${
        isOverdue ? "overdue" : ""
    }`}
    >
      <div className="task-content">
        <input
          type="checkbox"
          checked={task.completed}
          onChange={() => toggleTask(task.id)}
          aria-label={`${task.description} görevini tamamlandı olarak işaretle`}
        />

        <div className="task-main">
          <span className="task-description">{task.description}</span>
          {task.dueDate && (
            <span className="task-due-date">
                📅 Son tarih:{" "}
                {new Date(task.dueDate + "T00:00:00").toLocaleDateString("tr-TR")}
            </span>
            
            )}
            {isOverdue && (
            <span className="overdue-label">
                ⚠️ Son tarih geçti
            </span>
            )}

          <span className={`task-status ${task.completed ? "status-completed" : "status-active"}`}>
            {task.completed ? "✓ Tamamlandı" : "Devam ediyor"}
          </span>
        </div>

        <span className={`priority priority-${task.priority}`}>
          {priorityLabels[task.priority] || task.priority}
        </span>
      </div>

      <div className="task-actions">
        <button
          type="button"
          className="edit-button"
          onClick={() => startEditing(task)}
          aria-label={`${task.description} görevini düzenle`}
        >
          Düzenle
        </button>

        <button
          type="button"
          className="delete-button"
          onClick={() => {
            const confirmed = window.confirm(
                `"${task.description}" görevini silmek istediğine emin misin?`
            );

            if (confirmed) {
                deleteTask(task.id);
            }
            }}
          aria-label={`${task.description} görevini sil`}
        >
          Sil
        </button>
      </div>
    </li>
  );
}

export default TaskItem;
