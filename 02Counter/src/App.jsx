import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  
  let [counter, setCounter] = useState(15)
  let addValue = () => {
    if(counter!==20){
      setCounter(counter+1)
    }
  }
  let removeValue = () => {
    if(counter!==0){
      setCounter(counter-1)
    }
  }

  return (
    <>
      <h1>Kaun Talha ??</h1>
      <h3>Rap Elia toh Jaun Talha</h3>
      <button
      onClick={addValue}>
      Add Values upto 20 : {counter}</button>
      <br/>
      <br/>
      <button
      onClick={removeValue}>
      Remove Values upto 0 : {counter}</button>
    </>
  )
}

export default App
