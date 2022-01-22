import "./App.css"
import React,{useState} from "react"
import Form from "./components/forms.js"
import TodoList from "./components/todolist.js"
function App() {
  const [inputText, setinputText] = useState("");
  return (
    <div className="App">
      <header>
        <h1>Minhaj's Todo List</h1>
      </header>
      <Form  setInputText={setinputText} />
      <TodoList />
    </div>
  )
}
export default App
