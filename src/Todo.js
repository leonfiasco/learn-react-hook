import React from 'react'

function Todo({ todo, index, completeTodo, deleteTodo }) {
    return (
        <div style={{textDecoration: todo.isCompleted ? 'line-through' : ''}} className='todo'>
            {todo.text}
            <button onClick={() => completeTodo(index)}>Complete</button>
            <button onClick={() => deleteTodo(index)}>X</button>
        </div>
    )
}

export default Todo;
