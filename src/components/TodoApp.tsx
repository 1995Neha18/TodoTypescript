import React, { useEffect, useState } from "react";
import TodoInput from "./TodoInput";
import { Todo } from "../constants";
import TodoItem from "./TodoItem";
import { getTodos } from "../api";

const TodoApp = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [update, setUpdate] = useState<boolean>(false)

  const onAdd = () => {
    setUpdate((prev) => !prev);
  };

  useEffect(() => {
    getTodos().then((res) => {
      setTodos(res);
    });
  }, [update]);

  return (
    <div>
      <TodoInput update={onAdd}/>
      <h2>Todo List</h2>
      {todos.map((item) => {
        return <TodoItem key={item.id} {...item} update={onAdd} />;
      })}
    </div>
  );
};

export default TodoApp;
