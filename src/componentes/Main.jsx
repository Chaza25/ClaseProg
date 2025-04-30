import React from "react"
import Aside from "./Aside";
//import Button from 'react-bootstrap/Button';

const Main = ({saludo}) => {

    let equipos = ["Boca,", " Atl,", " SMT"]

    return(
        <div className="bg-secondary">
            <br />
            <h3>Probando React</h3>

            <button>Boton de prueba</button>
            <br />
            <Aside saludo = {saludo} equipos = {equipos}/>
        </div>
    )
}

export default Main