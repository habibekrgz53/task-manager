
function TaskForm({ task, setTask, priority, setPriority, addTask }) {
  return (
    <form onSubmit={addTask}>
      <input
        value={task}
        placeholder="Görev ekleyin"
        onChange={(event) => setTask(event.target.value)}
      />

      <select
        value={priority}
        onChange={(event) => setPriority(event.target.value)}
      >
        <option value="düşük">Düşük</option>
        <option value="orta">Orta</option>
        <option value="yüksek">Yüksek</option>
      </select>

      <button type="submit">Ekle</button>
    </form>
  );
}

export default TaskForm;
