import React, {useState} from 'react';
import Todo from './Todo';
import TodoForm from './TodoForm';

import './App.css'

function App() {
    // like setState
  const [todos, setTodos] = useState([
    {
      text: 'Learn about React',
      isCompleted: false
    },
    {
      text: 'Meet friends',
      isCompleted: false
    },
    {
      text: 'Read a book',
      isCompleted: false
    }
  ]);

  const addTodo = text => {
    const newTodos = [...todos, { text }];
    setTodos(newTodos)
  }

  const completeTodo = index => {
    const newTodos = [...todos];
    newTodos[index].isCompleted = true;
    setTodos(newTodos);
  }

  const deleteTodo = index => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  }

  return (
    <div className='app'>
      <div className='todo-list'>
        {todos.map((todo, i) => (
          <Todo 
          key={i} 
          index={i} 
          todo={todo} 
          completeTodo={completeTodo}
          deleteTodo={deleteTodo}
          />
        ))}
        <TodoForm addTodo={addTodo} />
      </div>
    </div>
  )

}

export default App
