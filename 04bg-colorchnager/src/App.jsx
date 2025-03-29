import { useState } from "react"

function App() {
  // State to manage background color
  const [color, setColor] = useState("olive")

  return (
    // Main container with dynamic background color
    <div
      className="w-full h-screen transition-all duration-200"
      style={{ backgroundColor: color }}
    >
      {/* Button container fixed at the bottom */}
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">

          {/* Red Button */}
          <button
            onClick={() => setColor("red")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "red" }}
          >
            Red
          </button>

          {/* Green Button */}
          <button
            onClick={() => setColor("green")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "green" }}
          >
            Green
          </button>

          {/* Blue Button */}
          <button
            onClick={() => setColor("blue")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "blue" }}
          >
            Blue
          </button>

          {/* Reset Button */}
          <button
            onClick={() => setColor("olive")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "gray" }}
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  )
}

export default App
