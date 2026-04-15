import React ,{useState} from 'react'

const Input = ({ addTask }) => {
  const [title, setTitle] = useState('')
  const [author, setAuthor] = useState('')
  const [tagsText, setTagsText] = useState('')

  const handleAddTask = () => {
    addTask(title, author, tagsText)
    if (title.trim() && author.trim()) {
      setTitle('')
      setAuthor('')
      setTagsText('')
    }
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    handleAddTask()
  }

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '10px',
        marginBottom: '20px',
      }}
    >
      <input
        style={{ borderRadius: '10px', border: '1px solid #ccc', width: '220px', height: '40px', padding: '0 10px' }}
        type="text"
        placeholder="Titre"
        value={title}
        onChange={(event) => setTitle(event.target.value)}
      />
      <input
        style={{ borderRadius: '10px', border: '1px solid #ccc', width: '220px', height: '40px', padding: '0 10px' }}
        type="text"
        placeholder="Auteur"
        value={author}
        onChange={(event) => setAuthor(event.target.value)}
      />
      <input
        style={{ borderRadius: '10px', border: '1px solid #ccc', width: '300px', height: '40px', padding: '0 10px' }}
        type="text"
        placeholder="Tags optionnels (ex: urgent, maison, travail)"
        value={tagsText}
        onChange={(event) => setTagsText(event.target.value)}
      />
      <button
        type="submit"
        style={{ backgroundColor: 'green', color: 'white', border: 'none', padding: '10px 14px', cursor: 'pointer', borderRadius: '8px' }}
      >
        Ajouter
      </button>
    </form>
  )
}

export default Input