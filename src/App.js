import logo from "./logo.svg"
import "./App.css"

function App() {
  return (
    <div>
      <div className="w-screen flex justify-center bg-green-500 h-screen">
        <div className="bg-green-800 w-4/6 max-w-xs mt-10 mb-10 rounded-lg">
          <h1 className="text-center font-extrabold m-2 underline">
            TO DO APP
          </h1>
          <div className="container w-full h-10 mt-5 ml-4 ">
            <input
              className="w-11/12 p-2 rounded-md"
              type="text"
            />
            <div className="w-11/12 flex justify-center">
              <button className="bg-green-500 w-7/12 font-semibold border-4 mt-2 rounded-lg">
                Add
              </button>
            </div>
            <div className="mt-4 ml-3">
              <li className="font-boldpb-2">
                propose her😘
              </li>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
