import { useState } from "react";
import AddTodo from "./components/AddTodo";
import Todos from "./components/Todos";

import { useSelector } from "react-redux";

function App() {
  const todos = useSelector((state) => state.todo.todos);
  // console.log(todos);

  const [updateTodoId, setUpdateTodoId] = useState("");
  function handleUpdateTodo(id) {
    setUpdateTodoId(id);
  }
  return (
    <div className="max-w-2xl m-auto">
      <AddTodo updateTodoId={updateTodoId} />
      <ul className="list-none">
        {todos.map((todo) => (
          <li
            className="mt-4 flex justify-between items-center bg-zinc-800 px-4 py-2 rounded"
            key={todo.id}
          >
            <Todos
              todo={todo}
              handleUpdateTodo={(id) => handleUpdateTodo(id)}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
