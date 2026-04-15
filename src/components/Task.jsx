import React from 'react'

const Task = ({ task, deleteTask, toggleTaskCompletion, updateTask }) => {
  return (
    <div
      style={{
        backgroundColor: task.completed ? '#d8f5d0' : 'lightgray',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: '10px',
        padding: '12px',
        borderRadius: '10px',
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: '12px', textAlign: 'left' }}>
        <input type="checkbox" checked={task.completed} onChange={() => toggleTaskCompletion(task.id)} />
        <div>
          <h2 style={{ margin: 0, textDecoration: task.completed ? 'line-through' : 'none' }}>{task.title}</h2>
          <p style={{ margin: '4px 0', textDecoration: task.completed ? 'line-through' : 'none' }}>
            Auteur: {task.author}
          </p>
          <p style={{ margin: 0 }}>
            Tags: {task.tags.length > 0 ? task.tags.join(', ') : 'Aucun'}
          </p>
        </div>
      </div>
      <div>
        <button
        style={{ backgroundColor: 'red', color: 'white', border: 'none', padding: '8px 12px', cursor: 'pointer', borderRadius: '8px' }}
        onClick={() => deleteTask(task.id)}
      >
        Supprimer
      </button>
      <button
        style={{ backgroundColor: 'blue', color: 'white', border: 'none', padding: '8px 12px', cursor: 'pointer', borderRadius: '8px', marginLeft: '10px' }}
        onClick={() => updateTask(task.id, { title: prompt('Modifier le titre:', task.title), author: prompt('Modifier l\'auteur:', task.author), tags: prompt('Modifier les tags (séparés par des virgules):', task.tags.join(', ')).split(',').map(tag => tag.trim()) })}
      >
        Modifier
      </button>
      </div>

    </div>
  )
}

export default Task