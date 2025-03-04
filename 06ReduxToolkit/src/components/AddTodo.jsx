import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, updateTodo } from "../features/todo/todoSlice";
function AddTodo(props) {
  const [todoText, setTodoText] = useState("");
  // const [isUpdate, setIsUpdate] = useState(isUpdate);
  const [updateTodoId, setUpdateTodoId] = useState(props.updateTodoId);

  const dispatch = useDispatch();

  const todos = useSelector((state) => state.todo.todos);
  const updatebleTodo = todos.filter(
    (todo) => todo.id == props.updateTodoId
  )[0];

  function handleSubmit(e) {
    e.preventDefault();

    if (updateTodoId) {
      dispatch(
        updateTodo({
          id: updateTodoId,
          todo: { ...updatebleTodo, text: todoText },
        })
      );
      setUpdateTodoId("");
    } else {
      dispatch(addTodo(todoText));
    }
    setTodoText("");
  }

  useEffect(() => {
    setUpdateTodoId(props.updateTodoId);
    if (props.updateTodoId) {
      setTodoText(updatebleTodo.text);
    }
  }, [props.updateTodoId]);

  return (
    <form onSubmit={handleSubmit} className="space-x-3 mt-12">
      <input
        type="text"
        className="bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out w-md"
        placeholder="Enter a Todo..."
        value={todoText}
        onChange={(e) => setTodoText(e.target.value)}
      />
      <button
        type="submit"
        className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
      >
        {updateTodoId ? `Update Todo` : "Add Todo"}
      </button>
    </form>
  );
}

export default AddTodo;
