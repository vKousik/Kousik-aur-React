import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [color, setColor] = useState('aliceblue')

  return (
    <div className='w-screen h-screen fixed top-0 left-0 duration-200'
    style={{backgroundColor: color}}>
      <h1 className='text-5xl top-20'> Pookie !!</h1>
      <div className='fixed flex flex-wrap justify-center bottom-20 inset-x-0 px-2'>
        <div className='fixed flex flex-wrap justify-center gap-3 bg-amber-900 px-3 py-2 rounded-3xl'>
          <button
           onClick={()=>{setColor('red')}}
           className='justify-center px-1 py-1 rounded-xl'
          style={{backgroundColor:"red"}}
          > Red </button>
          <button
           onClick={()=>{setColor('blue')}}
           className='justify-center px-1 py-1 rounded-xl'
          style={{backgroundColor:"blue"}}
          > Blue </button>
          <button
           onClick={()=>{setColor('#D28FBE')}}
           className='justify-center px-1 py-1 rounded-xl'
          style={{backgroundColor:"#D28FBE"}}
          > Lavender </button>
          <button
           onClick={()=>{setColor('Pink')}}
           className='justify-center px-1 py-1 rounded-xl'
          style={{backgroundColor:"Pink"}}
          > Pink </button>
          <button
           onClick={()=>{setColor('#CEFFC5')}}
           className='justify-center px-1 py-1 rounded-xl'
          style={{backgroundColor:"#CEFFC5"}}
          > Light Green </button>
        </div>
      </div>
      
    </div>
  )
}

export default App
