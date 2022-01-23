import "./App.css"
import React, { useState, useEffect } from "react"
import Form from "./components/forms.js"
import TodoList from "./components/todolist.js"
function App() {
  const [inputText, setinputText] = useState("")
  const [todos, settodos] = useState([])
  const [status, setstatus] = useState("all")
  const [filteredTodos, setfilteredTodos] =
    useState([])

  useEffect(() => {
    getLocalTodos()
  }, [])
  useEffect(() => {
    const filterHandler = () => {
      switch (status) {
        case "completed":
          setfilteredTodos(
            todos.filter(
              todo => todo.completed === true
            )
          )
          break
        case "uncompleted":
          setfilteredTodos(
            todos.filter(
              todo => todo.completed === false
            )
          )
          break
        default:
          setfilteredTodos(todos)
          break
      }
    }
    filterHandler()
    const saveLocalTodos = () => {
      localStorage.setItem(
        "todos",
        JSON.stringify(todos)
      )
    }
    saveLocalTodos()
  }, [todos, status])

  const getLocalTodos = () => {
    if (localStorage.getItem("todos") === null) {
      localStorage.setItem(
        "todos",
        JSON.stringify([])
      )
    } else {
      let LocalTodos = JSON.parse(
        localStorage.getItem("todos")
      )
      settodos(LocalTodos)
    }
  }
  return (
    <div className="App">
      <header>
        <h1>Your Todo List</h1>
      </header>
      <Form
        setInputText={setinputText}
        inputText={inputText}
        Todos={todos}
        setTodos={settodos}
        setstatus={setstatus}
      />
      <TodoList
        Todos={todos}
        setTodos={settodos}
        filteredTodos={filteredTodos}
      />
    </div>
  )
}
export default App
