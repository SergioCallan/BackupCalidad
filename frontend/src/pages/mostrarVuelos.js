import React, {useEffect, useState} from "react"
import axios from "axios"
//Importas css
export default function MostrarVuelos(){
    const [idVuelo, setIDVuelo]= useState(null)
    const [listavuelos, setListavuelos]=useState('')
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
    const comprobarCambiosID = (event) => {
        setIDVuelo(event.target.value)
    }
    const vuelos= Object.values(listavuelos)
    const reserveFlight= async (e) =>{
        e.preventDefault();
        try{
            const index= vuelos.findIndex(i=>i.id==idVuelo)
            const aerolinea=vuelos[index].aerolinea
            const origen= vuelos[index].origen
            const destino= vuelos[index].destino
            const datareserva={
                email: localStorage.getItem('data'),
                aerolinea: aerolinea,
                origen: origen,
                destino: destino,
                fechavuelo: null,
                horasalida: null
            }
            const url= 'http://localhost:9000/api/reserveflight'
            const response = await axios.post(url, datareserva);
            console.log(response)
            alert("Reserva realizada")
        }catch(error){
            console.error('Error al enviar la solicitud:', error);
        }
        
    }
    
    return (
        <main>
            <h1>¿Qué vuelo elegiré hoy?</h1>
            <h3>Vuelos disponibles para su reserva</h3>
            <div className="mostrarVuelos">
                <table id="listaVuelos">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Aerolínea</th>
                            <th>Partida</th>
                            <th>Destino</th>
                            <th>Precio</th>
                            <th>Fecha del vuelo</th>
                            <th>Hora de salida</th>
                        </tr>
                    </thead>
                    <tbody>
                        {vuelos.map((datos)=>(
                                <tr key={datos}>
                                    <td>{datos.id}</td>
                                    <td>{datos.aerolinea}</td>
                                    <td>{datos.origen}</td>
                                    <td>{datos.destino}</td>
                                    <td>{datos.precio}</td>
                                    <td>{datos.cantidad}</td>
                                    <td>{datos.fechavuelo}</td>
                                    <td>{datos.horasalida}</td>
                                </tr>
                        ))}
                    </tbody>
                </table>
                <h3>Elija el vuelo que quiera reservar</h3>
                <input type="text" name="id" placeholder="ID del vuelo a reservar" onChange={comprobarCambiosID} required value={idVuelo}></input><br></br><br></br>
                <button id="btnReserve" onClick={reserveFlight}>Reservar</button>
            </div>
        </main>
    )
}