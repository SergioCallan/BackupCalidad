import React, {Component} from "react"
import {Link} from "react-router-dom"
import "./Estilos/mainpage.css"
//Importas css

class MainPage extends Component{
    render(){
        return(
            <body>
                <main>
                    <div class="contenedor_todo">
                        <h1>Bienvenido a FlyEasy</h1>
                        <div class="contenedor_register">
                            <h3>¿Aun no tienes cuenta?</h3>
                            <div>
                                <Link to="/register">Regístrate</Link>
                            </div>
                        </div>
                        <div class="contenedor_login">
                            <h3>¿Ya tienes cuenta?</h3>
                            <div>
                                <Link to="/login">Inicia sesión</Link>
                            </div>
                        </div>
                    </div>
                </main>
            </body>
        )
    }
}

export default MainPage