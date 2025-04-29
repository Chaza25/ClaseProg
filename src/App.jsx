import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Prueba from "./Prueba"

function App() {
  const [count, setCount] = useState(0)

function handleClick() {
  setCount(count + 1) 
}

function Formu () {

  
  return(
    <form action="get">
      <label><span>Nombre</span>
      <input type="text" name='name' placeholder='Nombre' /></label>
      <label htmlFor="">Apellido</label>
      <input type="text" placeholder='Apellido' />
      <button>enviar ahora</button>
    </form>
  )
  
}

let nombre = "Agustin"
  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Agustin Chazarreta Cruz</h1>
      {Formu()}
      <p>
        nombre: Me llamo {nombre}
      </p>
      <Prueba/>
      <div className="card">
        <button onClick={() => handleClick()}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
