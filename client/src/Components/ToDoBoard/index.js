import React, { useState } from "react";
// import api from "../../utils/api";
import { useSelector, useDispatch } from "react-redux";
import { Navigate } from "react-router-dom";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";
import "./styles.css";

function Index(props) {
  const [todos, setTodos] = useState(["hii", "bro", "whats "]);
  console.log(todos);
  const [todoText, setTodoText] = useState("");

  const persist = async (newTodos) => {
    await fetch(`http://localhost:4000/board`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiNjFhMjAzYmM1MDY5MDFiMGE1MTE4MDA2IiwiZW1haWwiOiJ5YXNoNDMxZ2FyZ0BnbWFpbC5jb20iLCJpYXQiOjE2MzgxODEwNzUsImV4cCI6MTYzODE4NDY3NX0.36b6neidLLBfy5s1PnrSwO552RSpAb9jqiVuQNJeTpw",
      },
      body: JSON.stringify(newTodos),
    }).then(() => {});
  };
  React.useEffect(() => {
    axios(`http://localhost:4000/board`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiNjFhMjAzYmM1MDY5MDFiMGE1MTE4MDA2IiwiZW1haWwiOiJ5YXNoNDMxZ2FyZ0BnbWFpbC5jb20iLCJpYXQiOjE2MzgxODEwNzUsImV4cCI6MTYzODE4NDY3NX0.36b6neidLLBfy5s1PnrSwO552RSpAb9jqiVuQNJeTpw",
      },
    })
      .then((response) => response.json())
      .then((todos) => setTodos(todos));
  }, []);
  console.log(todos);
  const addTodo = (e) => {
    e.preventDefault();
    // if (!todoText) return;
    const newTodo = { id: uuidv4(), checked: false, text: todoText };

    console.log(newTodo);
    const newTodos = [...todos, newTodo];
    setTodos(newTodos);
    setTodoText("");
    persist(newTodos);
    // console.log("clicked");
  };
  function handleChange(event) {
    setTodoText(event.target.value);
  }
  const isAuthenticated = useSelector((state) => state.auth.value);

  return (
    <React.Fragment>
      {isAuthenticated ? (
        <div className="board">
          <form className="todo_form">
            <input
              name="title"
              onChange={handleChange}
              // value={todoText}
              placeholder="Title"
            />
            <button type="submit" onClick={addTodo}>
              <i className="far fa-plus-square"></i>
            </button>
          </form>
        </div>
      ) : (
        <Navigate to="/register" />
      )}
      {todos.map((todo, index) => (
        <div className="board" key={1}>
          <div className="todo">
            {todo}
            <button>
              <i className="fas fa-trash"></i>
            </button>
          </div>
        </div>
      ))}
    </React.Fragment>
  );
}

export default Index;
