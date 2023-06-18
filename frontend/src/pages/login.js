import React, {useState} from "react"
import axios from "axios"
import {Link, useNavigate} from "react-router-dom"
import "./Estilos/login.css"
//Importas css

export default function Login(){
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigate= useNavigate()

    const comprobarCambiosEmail = (event) => {
        setEmail(event.target.value)
    }

    const comprobarCambiosPassword = (event) => {
        setPassword(event.target.value)
    }

    const guardarDatos = async (e) => {
        e.preventDefault();
        const formEmail=email
        const formPassword= password
        try {
            const url1='http://localhost:9000/api/email/'+formEmail+'#'
            const response1 = await axios.get(url1);
            console.log('Respuesta del servidor:', response1.data);
            if(response1.data.encontrado){
                const url2='http://localhost:9000/api/password/'+formPassword+'#'
                const response2 = await axios.get(url2);
                console.log("Respuesta del servidor: ", response2.data);
                if(response2.data.encontrado){
                    alert("Inicio de sesion exitoso")
                    localStorage.setItem("data", formEmail)
                    navigate("/menuuser")
                }
            }
            setEmail('');
            setPassword('');
          } catch (error) {
            console.error('Error al enviar la solicitud:', error);
          }
        
    };

    return(
        <body>
            <main>
                <div>
                    <Link to="/loginadmin">Ingresar como administrador</Link>
                </div>
                <div className="contenedor_todo">
                    <div className="dataUser">
                        <form onSubmit={guardarDatos}>
                            <h2>Iniciar Sesión</h2>
                            <input  id="email" type="email" placeholder="Correo" onChange={comprobarCambiosEmail}
                                required value={email} name="email"></input><br></br>
                            <input id="password" type="password" placeholder="Contraseña" onChange={comprobarCambiosPassword}
                                required value={password} name="password"></input><br></br>
                            <button type="submit">Ingresar</button>
                        </form>
                    </div>
                </div>
            </main>
        </body>
    );
}
