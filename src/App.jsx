import { useState } from "react"
import "./App.css"
import Stats from "./components/Stats"
import TaskList from "./components/TaskList"
import TaskForm from "./components/TaskForm"
import useTasks from "./hooks/useTasks"


function App() {
  const { 
    tasks, 
    toggleTask: toggleTaskFromHook,
    deleteTask: deleteTaskFromHook,
    addTask : addTaskFromHook,
    updateTask : updateTaskFromHook, 
  } = useTasks();

  const [task,setTask]=useState("")
  const [dueDate, setDueDate] = useState("")
  const [editingId, setEditingId]=useState(null)
  const [editedText, setEditedText]=useState("")
  const [filter, setFilter]=useState("all")
  const [priority, setPriority]=useState("düşük")
  const [searchTerm, setSearchTerm]=useState("")
  const [sortBy, setSortBy]=useState("default")
  const [currentView, setCurrentView] = useState("tasks")

  const addTask = (event) => {
  event.preventDefault();

  if (!task.trim()) {
    alert("Lütfen bir görev girin.")
    return;
  }

  addTaskFromHook(task.trim(), priority, dueDate)
  setTask("")
  setPriority("orta")
  setCurrentView("tasks")
  setDueDate("")
};
  const toggleTask = toggleTaskFromHook
  const deleteTask = deleteTaskFromHook

  function startEditing(task){
    setEditedText(task.description)
    setEditingId(task.id)

  }
  function cancelEditing(){
    setEditingId(null)
    setEditedText("")
  }

  const saveTask = (id) => {
  if (!editedText.trim()) {
    alert("Görev açıklaması boş olamaz.")
    return;
  }

  updateTaskFromHook(id, editedText.trim())
  setEditingId(null);
  setEditedText("");
};
  
  const filteredTasks = tasks.filter((task) => {
    
  const matchesSearch = task.description
    .toLowerCase()
    .includes(searchTerm.toLowerCase())

  const matchesFilter =
    filter === "all"
      ? true
      : filter === "active"
      ? !task.completed
      : task.completed;

  return matchesSearch && matchesFilter;
});
  const sortedTasks=[...filteredTasks].sort((a,b)=>{
    if(sortBy==="name"){
      return a.description.localeCompare(b.description, "tr")
    }
    if (sortBy === "priority") {
    const priorityOrder = {
    yüksek: 1,
    orta: 2,
    düşük: 3,
  };

    return priorityOrder[a.priority] - priorityOrder[b.priority]
}
    return 0
  })


  
 
  return (
    <div className="app">
      {currentView === "tasks" ? (
        <>
          <header className="dashboard-header">
            <div className="dashboard-title-row">
              <div>
                <h1>Görev Yönetimi</h1>
                <p>Hedeflerine ulaşmak için görevlerini kolayca yönet.</p>
              </div>

              <button
                className="add-task-button"
                onClick={() => setCurrentView("form")}
              >
                + Görev Ekle
              </button>
            </div>

            <Stats tasks={tasks} />
          </header>

          <section className="tasks-section">
            <h2>Görevlerim</h2>

            <input
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Görevlerde ara"
            />

            <select
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
            >
              <option value="all">Tümü</option>
              <option value="active">Devam Edenler</option>
              <option value="completed">Tamamlananlar</option>
            </select>

            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
            >
              <option value="default">Varsayılan</option>
              <option value="priority">Öncelik</option>
              <option value="name">Alfabe sırası</option>
            </select>

            <h6>Görev sayısı: {tasks.length}</h6>

            {tasks.length === 0 ? (
              <p>Henüz görev yok. Yeni bir görev ekle!</p>
            ) : sortedTasks.length === 0 ? (
              <p>Aramana uygun görev bulunamadı.</p>
            ) : (
              <TaskList
                tasks={sortedTasks}
                editingId={editingId}
                editedText={editedText}
                setEditedText={setEditedText}
                saveTask={saveTask}
                cancelEditing={cancelEditing}
                toggleTask={toggleTask}
                deleteTask={deleteTask}
                startEditing={startEditing}
              />
            )}

            <p>
              Tamamlanan görevler:{" "}
              {tasks.filter((task) => task.completed).length}/{tasks.length}
            </p>
          </section>
        </>
      ) : (
        <section className="task-create-section">
          <button
            type="button"
            onClick={() => setCurrentView("tasks")}
          >
            ← Görevlerime Dön
          </button>

          <h2>Yeni Görev Oluştur</h2>

          <TaskForm
            task={task}
            setTask={setTask}
            priority={priority}
            setPriority={setPriority}
            addTask={addTask}
            dueDate={dueDate}
            setDueDate={setDueDate}
          />
        </section>
      )}
    </div>
  );
}

export default App;

