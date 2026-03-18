import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import TodoList from './TodoList.jsx'
function App() {

  const [todoListArray, setTodos] = useState([]);
  const addTodo = (todo) => {
    setTodos([...todoListArray, TodoList({ title: todo })]);
  };
  return (
    <div>
      <div>
        <h1> Todo list</h1>
      </div>
      <input id="todo-input" type="text" placeholder='Add a new todo list' />
      <button onClick={() => addTodo(document.querySelector('input').value)}>Add</button>
    </div>
  )
}

export default App
