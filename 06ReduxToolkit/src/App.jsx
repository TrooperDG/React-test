import { useState } from "react";
import AddTodo from "./components/AddTodo";
import Todos from "./components/Todos";

import { useSelector } from "react-redux";

function App() {
  const todos = useSelector((state) => state.todos);

  const [isUpdate, setIsUpdate] = useState(false);
  const [updateId, setUpdateId] = useState("");
  function handleIsUpdate(id) {
    console.log("hashfkh", id);
    setUpdateId(id);
  }
  return (
    <>
      <AddTodo isUpdate={isUpdate} updateId={updateId} />
      <ul className="list-none">
        {todos.map((todo) => (
          <li
            className="mt-4 flex justify-between items-center bg-zinc-800 px-4 py-2 rounded"
            key={todo.id}
          >
            <Todos todo={todo} handleIsUpdate={(id) => handleIsUpdate(id)} />
          </li>
        ))}
      </ul>
    </>
  );
}

export default App;
