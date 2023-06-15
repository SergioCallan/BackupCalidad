import React, {useState} from "react"
import axios from "axios"
import {Link} from "react-router-dom"
//Importas css
export default function RegistroVuelo(){
    const [aerolinea, setAerolinea]= useState('')
    const [origen, setOrigen]= useState('')
    const [destino, setDestino]= useState('')
    const [precio, setPrecio]= useState('')
    const [cantidad, setCantidad]= useState('')
    const [fechavuelo, setFechavuelo]= useState('')
    const [horasalida, setHorasalida]= useState('')

    const comprobarCambiosAerolinea = (event) => {
        setAerolinea(event.target.value)
    }
    const comprobarCambiosOrigen = (event) => {
        setOrigen(event.target.value)
    }
    const comprobarCambiosDestino = (event) => {
        setDestino(event.target.value)
    }
    const comprobarCambiosPrecio = (event) => {
        setPrecio(event.target.value)
    }
    const comprobarCambiosCantidad = (event) => {
        setCantidad(event.target.value)
    }
    const comprobarCambiosFechavuelo = (event) => {
        setFechavuelo(event.target.value)
    }
    const comprobarCambiosHorasalida = (event) => {
        setHorasalida(event.target.value)
    }
    
    const guardarDatos= async (e)=>{
        e.preventDefault();
        try{
            const formData={
                aerolinea: aerolinea,
                origen: origen,
                destino: destino,
                precio: precio,
                cantidad: cantidad,
                fechavuelo: fechavuelo,
                horasalida: horasalida,
                id: null
            }
            const url='http://localhost:9000/api/registerflights'
            const {formData:res}= await axios.post(url, formData)
            alert("Registro exitoso")
        }catch(error){
            console.error('Error al enviar la solicitud:', error);
        }
    };

    return(
        <form onSubmit={guardarDatos}>
        <Link to="/eliminarvuelo">Eliminar un Vuelo</Link>
        <h1>Registro de Vuelo</h1>
        <div class="contenedor-formulario">
            <div class="grupo-formulario">
                <label for="aerolinea">Nombre de la Aerolínea:</label>
                <input type="text" name="aerolinea" onChange={comprobarCambiosAerolinea} required value={aerolinea}></input><br></br>
                <label for="origen">Ingrese el punto de partida:</label>
                <input type="text" id="origen" name="origen" onChange={comprobarCambiosOrigen} required value={origen}></input><br></br>
                <label for="origen">Ingrese el punto de llegada:</label>
                <input type="text" id="destino" name="destino" onChange={comprobarCambiosDestino} required value={destino}></input><br></br>
                <label for="precio">Precio:</label>
                <input type="number" id="precio" name="precio" onChange={comprobarCambiosPrecio} required value={precio}></input><br></br>
                <label for="cantidad">Cantidad:</label>
                <input type="number" id="cantidad" name="cantidad" onChange={comprobarCambiosCantidad} required value={cantidad}></input><br></br>
                <label for="fechaVuelo">Fecha de Vuelo:</label>
                <input type="date" id="fechaVuelo" name="fechaVuelo" onChange={comprobarCambiosFechavuelo} required value={fechavuelo}></input><br></br>
                <label for="horaSalida">Hora de Salida:</label>
                <input type="time" id="horaSalida" name="horaSalida" onChange={comprobarCambiosHorasalida} required value={horasalida}></input><br></br>
            </div>
            <button id='btnSave'>Registrar Vuelo</button>
        </div>
    </form>
    )
}