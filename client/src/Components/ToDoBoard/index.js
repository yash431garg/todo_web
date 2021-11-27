import React, { useState } from "react";
import "./styles.css";

function Index(props) {
  const [todo, setTodo] = useState([]);

  const todoHandler = (e) => {
    console.loog("todo");
    e.preventDefault();
  };
  function handleChange(event) {
    // const { name, value } = event.target;

    setTodo(todo);
  }
  return (
    <div className="board">
      <form className="todo_form" onSubmit={todoHandler}>
        <input
          name="title"
          onChange={handleChange}
          // value={todo}
          placeholder="Title"
        />
        <button type="submit">
          <i class="far fa-plus-square"></i>
        </button>
      </form>

      <div className="todo">
        <p>What's up bro?</p>
        <button type="submit">
          <i class="fas fa-trash"></i>
        </button>
      </div>
      <div className="todo">
        <p>What's up bro?</p>
        <button type="submit">
          <i class="fas fa-trash"></i>
        </button>
      </div>
      <div className="todo">
        <p>What's up bro?</p>
        <button type="submit">
          <i class="fas fa-trash"></i>
        </button>
      </div>
      <div className="todo">
        <p>What's up bro?</p>
        <button type="submit">
          <i class="fas fa-trash"></i>
        </button>
      </div>
      <div className="todo">
        <p>What's up bro?</p>
        <button type="submit">
          <i class="fas fa-trash"></i>
        </button>
      </div>
      <div className="todo">
        <p>What's up bro?</p>
        <button type="submit">
          <i class="fas fa-trash"></i>
        </button>
      </div>
    </div>
  );
}

export default Index;
