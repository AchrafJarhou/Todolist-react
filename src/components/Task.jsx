import React from 'react'

const Task = ({ task, index, setTasks }) => {
  return (
    <div style={{backgroundColor: 'lightgray', display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
      <h1 style ={{ textDecoration: 'none' }}>{task}</h1>
      <button style={{ backgroundColor: 'red', color: 'white', border: 'none', padding: '5px 10px', cursor: 'pointer' }}
        onClick={() => setTasks((prevTasks) => prevTasks.filter((_, taskIndex) => taskIndex !== index))}
      >
        Supprimer
      </button>
    </div>
  )
}

export default Task