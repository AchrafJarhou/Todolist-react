import { useRef, useState } from 'react'
import './App.css'
import Tasks  from './components/Tasks'
import Input from './components/Input'

function App() {

  const [tasks, setTasks] = useState([])
  // useRef pour générer des IDs uniques pour les tâches, même après des suppressions
  const nextTaskId = useRef(1)

  // ajoute une nouvelle tâche à la liste des tâches
  const addTask = (title, author, tagsText) => {
    const normalizedTitle = title.trim()
    const normalizedAuthor = author.trim()

    if (!normalizedTitle || !normalizedAuthor) {
      return
    }

    const tags = tagsText
      .split(',')
      .map((tag) => tag.trim())
      .filter((tag) => tag.length > 0)

    const newTask = {
      id: nextTaskId.current,
      title: normalizedTitle,
      author: normalizedAuthor,
      completed: false,
      tags,
    }

    nextTaskId.current += 1
    setTasks((prevTasks) => [...prevTasks, newTask])
  }
// permet de basculer l'état de complétion d'une tâche
  const toggleTaskCompletion = (taskId) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === taskId ? { ...task, completed: !task.completed } : task,
      ),
    )
  }
// permet de supprimer une tâche de la liste des tâches
  const deleteTask = (taskId) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== taskId))
  }

  const updateTask = (taskId, updatedFields) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === taskId ? { ...task, ...updatedFields } : task,
      ),
    )
  }

  

  return (
    <>
      <Input addTask={addTask} />
      <Tasks tasks={tasks} deleteTask={deleteTask} toggleTaskCompletion={toggleTaskCompletion} updateTask={updateTask} />
    </>
  )
}

export default App
