import { useState } from 'react'
import './App.css'
import Tasks  from './components/Tasks'
import Input from './components/input'

function App() {

  const [tasks, setTasks] = useState([])
  const [input, setInput] = useState('')

  const addTask = () => {
    if (input) {
      setTasks([...tasks, input])
      setInput('')
    }
  }

  

  return (
    <>
      <Input input={input} setInput={setInput} addTask={addTask} />
      <Tasks tasks={tasks} setTasks={setTasks} />
      {console.log(tasks.length)}
    </>
  )
}

export default App
