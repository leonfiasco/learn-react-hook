import React, {useState} from 'react';
import Todo from './Todo';
import TodoForm from './TodoForm';

import './App.css'

function App() {
    // like setState
  const [todos, setTodos] = useState([
    {
      text: 'Learn about React',
      isComplicated: false
    },
    {
      text: 'Meet friends',
      isComplicated: false
    },
    {
      text: 'Read a book',
      isComplicated: false
    }
  ]);

  const addTodo = text => {
    const newTodos = [...todos, { text }];
    setTodos(newTodos)
  }

  return (
    <div className='app'>
      <div className='todo-list'>
        {todos.map((todo, i) => (
          <Todo key={i} index={i} todo={todo} />
        ))}
        <TodoForm addTodo={addTodo} />
      </div>
    </div>
  )

}

export default App
