import React from "react";
import { Todo } from "../constants";
import { toggleTodo } from "../api";

interface TodoItemProps extends Todo{
   update: () => void;
}

const TodoItem = ({ title, id, status, update }: TodoItemProps) => {
  const handleToggle = () => {
    console.log("toggle")
    toggleTodo(status, id);
    update()
  };

  return (
    <div>
      <h3>
        Title: {title} -- Status: {status ? "True" : "False"}
      </h3>
      <button onClick={handleToggle}>Toggle</button>
    </div>
  );
};

export default TodoItem;
