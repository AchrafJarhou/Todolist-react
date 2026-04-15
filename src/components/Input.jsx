import React from 'react'

const Input = ({ input, setInput, addTask }) => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: '20px' }}>
         <input style={{ borderRadius:'10px',border :'none'}} type="text" placeholder='Ajouter une tache' value={input} onChange={(e) => setInput(e.target.value)} />
         <button style ={{ backgroundColor: 'green', color: 'white', border: 'none', padding: '5px 10px', cursor: 'pointer' }} onClick={addTask}>Ajouter</button>
    </div>
  )
}

export default Input