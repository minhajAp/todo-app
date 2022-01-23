import React from "react"
import Todo from "./todo"
const TodoList = ({
  Todos,
  setTodos,
  filteredTodos,
}) => {
  return (
    <div className="todo-container">
      <ul className="todo-list">
        {filteredTodos.map(todo => (
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
