import "./App.css"

function App() {
  const add_todo = () => {
    const todo =
      document.getElementById("todo").value
    if (todo) {
      // Save
      const get_datas = localStorage["datas"]
      console.log(get_datas)
      //   todo_string=JSON.stringify(todo)
      //  get_datas.push(todo)
      localStorage["datas"] = [todo, get_datas]
      alert(todo)
    }
    // Retrieve
  }

  const stored_datas =
    localStorage["datas"].split(",")
  // console.log(split_string)
  // const stored_datas = localStorage["datas"]
  // console.log(stored_datas)

  return (
    <div>
      <div className="w-screen flex justify-center bg-green-500 h-screen">
        <div className="bg-green-800 w-4/6 max-w-xs mt-10 mb-10 rounded-lg  min-h-[350px]">
          <h1 className="text-center font-extrabold m-2 underline">
            TO DO APP
          </h1>
          <div className="container w-full h-10 mt-5 ml-4 ">
            <input
              className="w-11/12 p-2 rounded-md"
              type="text"
              id="todo"
            />
            <div className="w-11/12 flex justify-center">
              <button
                onClick={add_todo}
                className="bg-green-500 w-7/12 font-semibold border-4 mt-2 rounded-lg"
              >
                Add
              </button>
            </div>
            <div className="mt-4 ml-3">
              {stored_datas.map(user => (
                <li key={user} >{user}</li>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default App
