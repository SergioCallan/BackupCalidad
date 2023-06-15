import React, {useState} from "react"
import {useNavigate} from "react-router-dom"
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
        if(formEmail==="admin@gmail.com" && formPassword==="admin123"){
            alert("Bienvenido, administrador")
            navigate("/registrovuelos")
        }
        else{
            alert("ACCESO DENEGADO")
        }
        setEmail('');
        setPassword('');
    };

    return(
        <body>
            <main>
                <div className="contenedor_todo">
                    <div className="dataAdmin">
                        <form onSubmit={guardarDatos}>
                            <h2>Iniciar Sesión como administrador</h2>
                            <input  id="email" type="email" placeholder="Correo" onChange={comprobarCambiosEmail}
                                required value={email} name="email"></input><br></br>
                            <input id="password" type="password" placeholder="Contraseña" onChange={comprobarCambiosPassword}
                                required value={password} name="password"></input><br></br>
                            <button type="submit">Ingresar como administrador</button>
                        </form>
                    </div>
                </div>
            </main>
        </body>
    );
}
