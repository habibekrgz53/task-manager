import { useState, useEffect } from "react"
import "./App.css"
import Stats from "./components/Stats"
import TaskItem from "./components/TaskItem"
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
  const [editingId, setEditingId]=useState(null)
  const [editedText, setEditedText]=useState("")
  const [filter, setFilter]=useState("all")
  const [priority, setPriority]=useState("düşük")
  const [searchTerm, setSearchTerm]=useState("")
  const [sortBy, setSortBy]=useState("default")

  const addTask = (event) => {
  event.preventDefault();

  if (!task.trim()) {
    alert("Lütfen bir görev girin.");
    return;
  }

  addTaskFromHook(task.trim(), priority);
  setTask("");
  setPriority("orta");
};
  const toggleTask = toggleTaskFromHook;
  const deleteTask = deleteTaskFromHook;

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
    alert("Görev açıklaması boş olamaz.");
    return;
  }

  updateTaskFromHook(id, editedText.trim());
  setEditingId(null);
  setEditedText("");
};
  
  const filteredTasks = tasks.filter((task) => {
    
  const matchesSearch = task.description
    .toLowerCase()
    .includes(searchTerm.toLowerCase());

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

    return priorityOrder[a.priority] - priorityOrder[b.priority];
}
    return 0
  })


  
  return(
    <div className="app">
    <div>
    <h1>Görev Yöneticim</h1>
    <p>Görevlerini düzenle, ilerlemeni takip et.</p>
    <Stats tasks={tasks}/>
    </div>
    <div>
    <h2>Görevlerim</h2>
    <input 
      value={searchTerm}
      onChange={(e)=> setSearchTerm(e.target.value)} 
      placeholder="Görevlerde ara"  />
    <select
      value={filter}
      onChange={(event) => setFilter(event.target.value)}
    >
      <option value="all">Tümü</option>
      <option value="active">Devam Edenler</option>
      <option value="completed">Tamamlananlar</option>
    </select>
    <select
      value={sortBy}
      onChange={(e)=> setSortBy(e.target.value)} >
        <option value="default">Varsayılan</option>
        <option value="priority">Öncelik</option>
        <option value="name">Alfabe sırası</option>
    </select>
    <h6>Görev sayısı: {tasks.length}</h6>
    {tasks.length===0 
      ? ( <p> "Henüz görev yok. Yeni bir görev ekle!"</p>)
      : sortedTasks.length===0 ? "Aramana uygun görev bulunamadı." : (
      (
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
      
      ))}
    <p>Tamamlanan görevler: {tasks.filter((task)=> task.completed).length}/{tasks.length} </p>
    
    </div>
    <h4>Görev Ekle</h4>
    <TaskForm
      task={task}
      setTask={setTask}
      priority={priority}
      setPriority={setPriority}
      addTask={addTask}
    />
    </div>
  )
  
}

export default App
