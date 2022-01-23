import "./App.css"
import React, { useState,useEffect } from "react"
import Form from "./components/forms.js"
import TodoList from "./components/todolist.js"
function App() {
  const [inputText, setinputText] = useState("")
  const [todos, settodos] = useState([])
  const [status, setstatus] = useState("all")
  const [filteredTodos, setfilteredTodos] =
    useState([])

    useEffect(() => {
      filterHandler();
    }, [todos,status]);
    
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
  return (
    <div className="App">
      <header>
        <h1>Minhaj's Todo List</h1>
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
