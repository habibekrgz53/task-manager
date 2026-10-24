
function TaskForm({ task, setTask, priority, setPriority, addTask, dueDate, setDueDate, }) {
  return (
    <form className="task-form" onSubmit={addTask}>
      <div className="form-group">
        <label htmlFor="task-description">Görev başlığı</label>
        
        <input
          id="task-description"
          className="task-input"
          type="text"
          value={task}
          placeholder="Örn. React projemi tamamla"
          onChange={(event) => setTask(event.target.value)}
          required
        />
        <div className="form-group">
            <label htmlFor="task-due-date">Son tarih</label>
            <input
                id="task-due-date"
                className="task-input"
                type="date"
                value={dueDate}
                onChange={(event) => setDueDate(event.target.value)}
            />
        </div>
      </div>

      
    <div className="form-group">
    <label>Öncelik düzeyi</label>

    <div className="priority-options">
        <button
        type="button"
        className={priority === "düşük" ? "priority-option selected low" : "priority-option low"}
        onClick={() => setPriority("düşük")}
        >
        🟢 Düşük
        </button>

        <button
        type="button"
        className={priority === "orta" ? "priority-option selected medium" : "priority-option medium"}
        onClick={() => setPriority("orta")}
        >
        🟡 Orta
        </button>

        <button
        type="button"
        className={priority === "yüksek" ? "priority-option selected high" : "priority-option high"}
        onClick={() => setPriority("yüksek")}
        >
        🔴 Yüksek
        </button>
    </div>
    </div>


      <div className="form-actions">
        <button
          className="cancel-button"
          type="button"
          onClick={() => {
            setTask("");
            setPriority("orta");
          }}
        >
          Temizle
        </button>

        <button className="save-button" type="submit">
          Görevi Kaydet
        </button>
      </div>
    </form>
  );
}

export default TaskForm;
