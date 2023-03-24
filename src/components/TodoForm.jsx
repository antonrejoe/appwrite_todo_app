import React from "react";
import { useState, useEffect } from "react";
import { account } from "../appwrite/appwriteConfig.ts";
import { databases } from "../appwrite/appwriteConfig";
import "../assets/css/TodoForm/todoForm.css";

const TodoForm = () => {
  const [todo, setTodo] = useState({});
  useEffect(() => {
    const promise = account.get();

    promise.then(
      function (response) {
        setTodo(response);
      },
      function (error) {
        console.log(error);
      }
    );
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const promise = databases.createDocument(
      "64187e3b0c4e988035e2",
      "64187e5258a86452f64d",
      crypto.randomUUID(),
      {
        content: todo.content,
      }
    );

    promise.then(
      function (response) {
        console.log(response);
      },
      function (error) {
        console.log(error);
      }
    );
  };

  return (
    <>
      <div class="todo_form_container">
        <form class={"todo_form"}>
          <input
            class="todo_add_input"
            type="text"
            id="add_todo"
            placeholder="moshi moshi "
            name="add_todo"
            onChange={(e) => {
              setTodo(() => ({
                ...todo,
                ...(todo.content = e.target.value),
              }));
            }}
          />
          <button for="add_todo" class="add_todo_btn" onClick={handleSubmit}>
            add Todo
          </button>
        </form>
      </div>
    </>
  );
};

export default TodoForm;
