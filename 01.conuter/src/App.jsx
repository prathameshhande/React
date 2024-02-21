import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

 let [conuter, setconuter] = useState (0)

  //let counter = 5

  const addValue = () =>{
    if (conuter >=20) {
      alert("more than20")
    }else{
    conuter = conuter + 1
    setconuter(conuter)
    }
  }

  const removeValue = () =>{
    if (conuter <= 0) {
      alert("less than0")
    }else{
    setconuter(conuter - 1)
    }
  }

  return (
    <>
    <h1>1st project</h1>
    <h2>counter value :{conuter}</h2>

    <button
    onClick={addValue}
    >add value {conuter}</button>
    <br />
    <button onClick={removeValue}>remove value{conuter}</button>
    </>
     
  )
}

export default App
