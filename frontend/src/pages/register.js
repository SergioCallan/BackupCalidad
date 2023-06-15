import {useState} from 'react';
import {useNavigate} from "react-router-dom";
import axios from "axios";

export default function Register(){

    const [name, setName]= useState('')
    const [lastname, setLastname]= useState('')
    const [email, setEmail]= useState('')
    const [mobilenumber, setMobilenumber]= useState('')
    const [password, setPassword]= useState('')

    const navigate= useNavigate()

    const comprobarCambiosNombre = (event) => {
        setName(event.target.value)
    }
    const comprobarCambiosApellido = (event) => {
        setLastname(event.target.value)
    }
    const comprobarCambiosEmail = (event) => {
        setEmail(event.target.value)
    }
    const comprobarCambiosNumero = (event) => {
        setMobilenumber(event.target.value)
    }
    const comprobarCambiosContrasena = (event) => {
        setPassword(event.target.value)
    }

    const guardarDatos = async (e) => {
        e.preventDefault();
        try{
            const formData={
                nombre: name,
                apellido: lastname,
                email: email,
                numero: mobilenumber,
                contrasena: password
            }
            const url1='http://localhost:9000/api/email/'+email+'#'
            const response1 = await axios.get(url1, email);
            console.log('Respuesta del servidor:', response1.data);
            if(!response1.data.encontrado){
                const url2='http://localhost:9000/api/registeruser'
                const response = await axios.post(url2, formData);
                console.log(response)
                alert("Registro exitoso")
                navigate("/login")
            }
            else{
                alert("Correo utilizado con anterioridad, utilice otro")
            }
        }catch(error){
            console.error('Error al enviar la solicitud:', error);
        }
    };

    return(
        <body>
        <main>
            <div class="contenedor_todo">
                <div class="registrosUser">
                    <form onSubmit={guardarDatos}>
                        <div class="datosPersonales">
                            <h2>Es un placer tenerte aquí. ¿Cómo te llamas?</h2>
                            <input type="text" name="nombre" placeholder="Nombre" onChange={comprobarCambiosNombre} required value={name}></input><br></br>
                            <input type="text" name="lastname" placeholder="Apellido" onChange={comprobarCambiosApellido} required value={lastname}></input><br></br>
                            <input type="email" placeholder="E-Mail" onChange={comprobarCambiosEmail} required value={email} name="email"></input><br></br>
                        </div>
                        <div class="numeroTelefono">
                            <h2>¿Cuál es tu número?</h2>
                            <h3>Solo se utilizará en el caso improbable que se necesite contactar con usted (opcional)</h3>
                            <input type="text" name="mobilenumber" placeholder="Número" onChange={comprobarCambiosNumero} value={mobilenumber}></input><br></br>
                        </div>
                        <div class="crearcontrasena">
                            <h2>Crea una contraseña</h2>
                            <h3>Usa un mínimo de 10 caracteres que incluyan mayúsculas, minúsculas y números para mayor seguridad</h3>
                            <input type="password" name="contrasena" placeholder="Contraseña" onChange={comprobarCambiosContrasena} required value={password}></input><br></br><br></br>
                            <button id="btnRegister">Registrarse</button>
                        </div>
                    </form>
                </div>
            </div>
    </main>
    </body>
    )
}