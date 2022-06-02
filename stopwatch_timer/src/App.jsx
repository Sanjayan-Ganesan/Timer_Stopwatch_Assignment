import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import Stop from './Component/Stop'
import Timer from './Component/Timer'

function App() {
  const [count, setCount] = useState(0)

  const[change,setChange] = useState(true);

  return (
    <div className="App">
      <div id='button_box'>
      <button onClick={()=>{setChange(false)}}>Timer</button>
        <button onClick={()=>{
          setChange(true)
        }}>Stopwatch</button>
      </div>

      <div>
        {change ? <Stop/> : <Timer/>}
      </div>

   
    
      
    </div>
  )
}

export default App
