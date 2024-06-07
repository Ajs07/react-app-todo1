import React from 'react'
import TodoItem from './TodoItem'

const Todos = ({ todos }) => {
  return (
    <div style={styles.container}>
    {/* Gunakan method map di sini 
      key={todo.id} seharusnya ditambahkan pada masing-masing elemen dalam sebuah array untuk memberikan identitas yang unik dan membantu React mendeteksi element mana yang telah di-render.*/}
      {todos.map((todo) => {
        return <TodoItem key={todo.id} todo={todo}/>
      })}
    </div>
  )
}

const styles = {
  container: {
    width: '40%',
    margin: '0 auto',
  },
}

export default Todos