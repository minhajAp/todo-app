import "./App.css"
import React,{useState} from "react"
import Form from "./components/forms.js"
import TodoList from "./components/todolist.js"
function App() {
  const [inputText, setinputText] = useState("");
  const [todos, settodos] = useState([]);
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
      />
      <TodoList
        Todos={todos}
        setTodos={settodos}
        
      />
    </div>
  )
}
export default App
