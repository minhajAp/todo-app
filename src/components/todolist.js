import React from "react"
import Todo from "./todo"
const TodoList = ({ Todos, setTodos }) => {
  return (
    <div className="todo-container">
      <ul className="todo-list">
        {Todos.map(todo => (
          <Todo
            Todos={Todos}
            setTodos={setTodos}
            todo={todo}
            text={todo.text}
            key={todo.text}
          />
        ))}
      </ul>
    </div>
  )
}
export default TodoList
