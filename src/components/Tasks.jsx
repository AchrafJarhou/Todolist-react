import React from 'react'
import Task from './Task'

const Tasks = ({ tasks, setTasks }) => {
  return (
    <div>
      {tasks.map((task, index) => (
        <Task key={index} task={task} index={index} setTasks={setTasks} />
      ))}
    </div>
  )
}

export default Tasks