import React from "react"

const Form = ({
  setInputText,
  Todos,
  setTodos,
  inputText,
  setstatus,
}) => {
  const inputTextHandler = e => {
    setInputText(e.target.value)
  }
  const submitTodoHandler = e => {
    e.preventDefault()
    setTodos([
      ...Todos,
      {
        text: inputText,
        completed: false,
        id: Math.random() * 1000,
      },
    ])
    setInputText("")
  }
  const statusHandler = e => {
    setstatus(e.target.value)
  }
  return (
    <form>
<div>
      <input
        type="text"
        className="todo-input"
        onChange={inputTextHandler}
        value={inputText}
      />
      <button
        className="todo-button"
        type="submit"
        onClick={submitTodoHandler}
      >
        <i className="fas fa-plus-square"></i>
      </button>
</div>
      <div className="select">
        <select
          name="todos"
          className="filter-todo"
          onChange={statusHandler}
        >
          <option value="all">All</option>
          <option value="completed">
            Completed
          </option>
          <option value="uncompleted">
            Uncompleted
          </option>
        </select>
      </div>
    </form>
  )
}

export default Form
