import { useState } from "react"


function App() {
  const [color, setColor] = useState("#2f2f2f")

  return (
    <>
      <div className="w-full h-screen duration-200" style={{backgroundColor: color}}>
        <h1 className="text-white flex justify-center">Click the button for Background color change</h1>
        <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
          <div className="flex flex-wrap justify-centera gap-3 shadow-lg bg-white px-3 py-2 rounded-2xl">
            <button onClick={() => setColor("#7f59b0")} className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style = {{backgroundColor: "#7f59b0"}}>Purpel</button>
            <button onClick={() => setColor("#f75435")} className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style = {{backgroundColor: "#f75435"}}>Orange</button>
            <button onClick={() => setColor("blue")} className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style = {{backgroundColor: "blue"}}>blue</button>
            <button onClick={() => setColor("#63c5ea")} className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style = {{backgroundColor: "#63c5ea"}}>Cyan</button>
            <button onClick={() => setColor("#684c41")} className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style = {{backgroundColor: "#684c41"}}>Brown</button>
            <button onClick={() => setColor("#fcb424")} className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style = {{backgroundColor: "#fcb424"}}>Yellow</button>
            <button onClick={() => setColor("#4fa3a5")} className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style = {{backgroundColor: "#4fa3a5"}}>Green</button>
            <button onClick={() => setColor("maroon")} className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style = {{backgroundColor: "maroon"}}>Maroon</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
