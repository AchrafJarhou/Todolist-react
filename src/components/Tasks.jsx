import React from 'react'
import Task from './Task'

const Tasks = ({ tasks, deleteTask, toggleTaskCompletion, updateTask }) => {
  return (
    <div>
      {tasks.map((task) => (
        <Task key={task.id} task={task} deleteTask={deleteTask} toggleTaskCompletion={toggleTaskCompletion} updateTask={updateTask} />
      ))}
    </div>
  )
}

export default Tasks