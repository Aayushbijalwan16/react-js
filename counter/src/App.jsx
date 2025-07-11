import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
    // hooks
    let [counter, setCounter] = useState(15)

    //let counter = 5
    const addValue = () => {
      //counter = counter + 1
      if (counter < 20) {
        // console.log("clicked", counter);
        setCounter(counter + 1)
      }
      else {
        console.log("limit reached");
      }
    }

    const removeValue = () => {
      if (counter > 0) {
        setCounter(counter - 1)
      } else {
        console.log("unable to reduce value");
        
      }
    }
  return (
    <>
      <h1>React with Aayush</h1>
      <h2>counter value : {counter}</h2>

      <button onClick={addValue}>Add value</button><br />
      <button onClick={removeValue}>remove value</button>
    </>
  )
}

export default App
