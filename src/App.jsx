import { React, useState, useEffect } from 'react';
import TodoBlock from './components/TodoBlock';
import './App.css';

function App() {
  const [todos, setTodos] = useState(
    JSON.parse(localStorage.getItem('todos')) || []
  );

  const addTodo = (todo) => {
    setTodos([...todos, todo]);
    localStorage.setItem('todos', JSON.stringify([...todos, todo]));
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((item) => item.id !== id));
  };

  const changeStatus = (id, status) => {
    setTodos(
      todos.map((item) => (item.id === id ? { ...item, status } : item))
    );
  };

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  return (
    <div className="container">
      <div className="section">
        <TodoBlock
          addTodo={addTodo}
          deleteTodo={deleteTodo}
          todos={todos}
          changeStatus={changeStatus}
          title="HIGH"
          priority="high"
        />
        <TodoBlock
          addTodo={addTodo}
          deleteTodo={deleteTodo}
          todos={todos}
          changeStatus={changeStatus}
          title="LOV"
          priority="lov"
        />
      </div>
    </div>
  );
}

export default App;
