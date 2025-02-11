import { useState } from "react";
import { TodoContextProvider } from "./contexts/TodoContext";
import { TodoForm, TodoItem } from "./components";

function App() {
  const [todos, setTodos] = useState([]);

  function addTodo(todo) {
    setTodos((prevTodos) => [...prevTodos, { ...todo, id: Date.now() }]);
  }
  function updateTodo(id, todo) {
    setTodos((prevTodos) =>
      prevTodos.map((prevTodo) => (prevTodo.id === id ? todo : prevTodo))
    );
  }
  function deleteTodo(id) {
    setTodos((prevTodos) => prevTodos.filter((prevTodo) => prevTodo.id != id));
  }
  function toggleCompleted(id) {
    setTodos((prevTodos) =>
      prevTodos.map((prevTodo) =>
        prevTodo.id === id
          ? { ...prevTodo, completed: !prevTodo.completed }
          : prevTodo
      )
    );
  }

  return (
    <TodoContextProvider
      value={{ todos, addTodo, updateTodo, deleteTodo, toggleCompleted }}
    >
      <div className="bg-slate-800 min-h-screen py-8 px-4">
        <div className=" max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white outline-1">
          <h1 className="text-2xl font-bold text-center mb-8 mt-2">
            Manage Your Todos
          </h1>
          <div className="mb-4">
            {/* Todo form goes here */}
            <TodoForm />
          </div>
          <div className="flex flex-wrap gap-y-3">
            {/*Loop and Add TodoItem here */}

            {todos.map((todo) => (
              <div className="w-full" key={todo.id}>
                <TodoItem todo={todo} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </TodoContextProvider>
  );
}

export default App;
