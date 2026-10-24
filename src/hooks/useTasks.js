import { useState, useEffect } from "react";

function useTasks() {
  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem("tasks");

    if (savedTasks) {
      return JSON.parse(savedTasks);
    }

    return [
      {
        id: 1,
        description: "React öğrenme planını tamamla",
        completed: false,
        priority: "orta",
      },
      {
        id: 2,
        description: "Görev listesi tasarımını düzenle",
        completed: false,
        priority: "düşük",
      },
      {
        id: 3,
        description: "İlk özelliği test et",
        completed: false,
        priority: "yüksek",
      },
    ];
  });

  const toggleTask = (id) => {
  setTasks((prevTasks) =>
    prevTasks.map((task) =>
      task.id === id
        ? { ...task, completed: !task.completed }
        : task
    )
  );
};
    const deleteTask = (id) => {
  setTasks((prevTasks) =>
    prevTasks.filter((task) => task.id !== id)
  );
};
    const addTask = (description, priority) => {
  const newTask = {
    id: Date.now(),
    description,
    completed: false,
    priority,
  };

  setTasks((prevTasks) => [...prevTasks, newTask]);
};
    const updateTask = (id, newDescription) => {
  setTasks((prevTasks) =>
    prevTasks.map((task) =>
      task.id === id
        ? { ...task, description: newDescription }
        : task
    )
  );
};

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  return { tasks, setTasks, toggleTask, deleteTask, addTask, updateTask, };
}

export default useTasks;