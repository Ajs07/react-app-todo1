import React, { useState } from 'react'

function App() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      title: 'Finish Progate React Course',
      completed: false,
    },
    {
      id: 2,
      title: 'Have lunch with Guru Domba',
      completed: false,
    },
    {
      id: 3,
      title: 'Study React with Ninja Ken',
      completed: false,
    },
  ])

  return (
    <div>
      <h1>My Todo List</h1>
      {/* Gunakan method map di sini 
      key={todo.id} seharusnya ditambahkan pada masing-masing elemen dalam sebuah array untuk memberikan identitas yang unik dan membantu React mendeteksi element mana yang telah di-render.*/}
      {todos.map((todo) => {
        return <p key={todo.id}>{todo.title}</p>
      })}
    </div>
  )
}

export default App