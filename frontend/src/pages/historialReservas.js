import React, {useEffect, useState} from "react"
import axios from "axios"

export default function HistorialReservas(){
    
    const [idReserva, setIDReserva]= useState(null)
    const [listaReservas, setListaReservas]= useState('')

    const getReservas= async()=>{
        const email= localStorage.getItem("data")
        const url='http://localhost:9000/api/reservasuser/'+email+'#'
        const {data}= await axios.get(url)
        setListaReservas(data)
    }
    useEffect(()=>{
        getReservas().catch((error)=>{
            console.log(error)
        })  
    })
    const comprobarCambiosID = (event) => {
        setIDReserva(event.target.value)
    }
    const reservas=Object.values(listaReservas)

    return(
        <main>
            <h1>Bienvenido al menu de reservas realizadas</h1><br></br>
            <h3>Aquí verás todas las reservas que hayas realizado con tu cuenta</h3>
            <div className="historial">
                <table id="listahistorial">
                    <thead>
                        <tr>
                            <th>Email</th>
                            <th>Origen</th>
                            <th>Destino</th>
                            <th>Fecha del vuelo</th>
                        </tr>
                    </thead>
                    <tbody>
                        {reservas.map((datos)=>(
                            <tr key={datos}>
                                <td>{datos.email}</td>
                                <td>{datos.origen}</td>
                                <td>{datos.destino}</td>
                                <td>{datos.fechavuelo}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <input type="text" name="id" placeholder="ID de la reserva a observar" onChange={comprobarCambiosID} required value={idReserva}></input><br></br><br></br>
                <button id="btnHistory">Ver historial completo</button>
            </div>
        </main>
    )
}