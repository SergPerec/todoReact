import { React, useState, useEffect } from 'react';
import BlockTodo from './components/BlockTodo';
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
      <div className="section-todo">
        <BlockTodo
          addTodo={addTodo}
          deleteTodo={deleteTodo}
          todos={todos}
          changeStatus={changeStatus}
          title="Высокий приоритет"
          priority="high"
        />
        <BlockTodo
          addTodo={addTodo}
          deleteTodo={deleteTodo}
          todos={todos}
          changeStatus={changeStatus}
          title="Низкий приоритет"
          priority="low"
        />
      </div>
    </div>
  );
}

export default App;
