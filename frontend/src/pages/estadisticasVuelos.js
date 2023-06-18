import React, {useEffect, useState} from "react"
import axios from "axios"
import {useNavigate} from "react-router-dom"

export default function EstadisticasVuelos(){
    const[aerolinea, setAerolinea]= useState('')
    const [listavuelos, setListavuelos]=useState('')
    const navigate= useNavigate()
    const getVuelos= async()=>{
        const url='http://localhost:9000/api/showflights/'
        const {data}= await axios.get(url)
        setListavuelos(data)
    }
    useEffect(()=>{
        getVuelos().catch((error)=>{
            console.log(error)
        })  
    })
    const comprobarCambiosAerolinea = (event) => {
        setAerolinea(event.target.value)
    }
    const vuelos= Object.values(listavuelos)

    const stats= async (e) =>{
        e.preventDefault();
        try{
            var ganancias=0;
            navigate("/menuadmin")
        }catch(error){
            console.error('Error al enviar la solicitud:', error);
        }
    }
    
    return (
        <main>
            <h1>Lista de aerolineas que actualmente se encuentran registradas en FlyEasy</h1>
            <div className="mostrarAerolineas">
                <table id="listaAerolineas">
                    <thead>
                        <tr>
                            <th>Aerolínea</th>
                            <th>Precio de la reserva</th>
                        </tr>
                    </thead>
                    <tbody>
                        {vuelos.map((datos)=>(
                                <tr key={datos}>
                                    <td>{datos.aerolinea}</td>
                                    <td>{datos.precio}</td>
                                </tr>
                        ))}
                    </tbody>
                </table>
                <h3>Elija la aerolinea en la que esta interesado</h3>
                <input type="text" name="id" placeholder="Nombre de la aerolinea" onChange={comprobarCambiosAerolinea} required value={aerolinea}></input><br></br><br></br>
                <button id="btnReserve" onClick={stats}>Reservar</button>
            </div>
        </main>
    )
}