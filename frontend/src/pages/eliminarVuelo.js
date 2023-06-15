import React, {useEffect, useState} from "react"
import axios from "axios"
import {Link} from "react-router-dom"
//Importas css

export default function EliminarVuelo(){
    const [id, setID]= useState(null)
    const [listavuelos, setListavuelos]=useState('')
    const getVuelos= async()=>{    
        const url='http://localhost:9000/api/showflights/'
        const {data}= await axios.get(url)
        setListavuelos(data)
    }

    useEffect(()=>{
        try{
            getVuelos()
        } catch(err){
            console.log(err)
        } finally{
            console.log("Tabla actualizada")
        }
    })
    
    const comprobarCambiosID = (event) => {
        setID(event.target.value)
    }

    const deleteFlight= async () =>{
        const url= 'http://localhost:9000/api/deleteflight/'+id+'#'
        const response = await axios.delete(url);
        alert("Vuelo eliminado")
        console.log('Respuesta del servidor:', response.data);
    }
    const vuelos= Object.values(listavuelos)

    return(
        <body>
            <Link to="/registrovuelos">Registrar un Vuelo</Link>
            <h1>Vuelos Registrados</h1>
            <table id="listaVuelos">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Aerolínea</th>
                            <th>Partida</th>
                            <th>Destino</th>
                            <th>Precio</th>
                            <th>Cantidad</th>
                            <th>Fecha del vuelo</th>
                            <th>Hora de salida</th>
                        </tr>
                    </thead>
                    <tbody>
                        {vuelos.map((datos)=>(
                                <tr>
                                    <td key={datos.id}>{datos.id}</td>
                                    <td key={datos.id}>{datos.aerolinea}</td>
                                    <td key={datos.id}>{datos.origen}</td>
                                    <td key={datos.id}>{datos.destino}</td>
                                    <td key={datos.id}>{datos.precio}</td>
                                    <td key={datos.id}>{datos.cantidad}</td>
                                    <td key={datos.id}>{datos.fechavuelo}</td>
                                    <td key={datos.id}>{datos.horasalida}</td>
                                </tr>
                        ))}
                    </tbody>
                </table>
                <h3>Recuerde que borrar un vuelo es permanente</h3>
                <input type="int" name="id" placeholder="ID del vuelo a eliminar" onChange={comprobarCambiosID} required value={id}></input><br></br><br></br>
                <button id="btnDelete" onClick={deleteFlight}>Borrar</button>
        </body>
    )
}