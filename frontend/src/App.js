import {BrowserRouter, Route, Routes} from "react-router-dom"
import MainPage from "./pages/mainpage"
import Register from "./pages/register"
import Login from "./pages/login"
import LoginAdmin from "./pages/loginadmin"
import MenuUser from "./pages/menuuser"
import MenuAdmin from "./pages/menuadmin"
import RegistroVuelos from "./pages/registroVuelos"
import EliminarVuelo from "./pages/eliminarVuelo"
import MostrarVuelos from "./pages/mostrarVuelos"
import HistorialReservas from "./pages/historialReservas"
import EstadisticasVuelos from "./pages/estadisticasVuelos"

function App() {
  return (
    <BrowserRouter>
            <Routes>
                <Route path="/mainpage" element={<MainPage/>}/>
                <Route path="/register" element={<Register/>}/>
                <Route path="/login" element={<Login/>}/>
                <Route path="/loginadmin" element={<LoginAdmin/>}/>
                <Route path="/menuuser" element={<MenuUser/>}/>
                <Route path="/menuadmin" element={<MenuAdmin/>}/>
                <Route path="/registrovuelos" element={<RegistroVuelos/>}/>
                <Route path="/eliminarvuelo" element={<EliminarVuelo/>}/>
                <Route path="/mostrarvuelos" element={<MostrarVuelos/>}/>
                <Route path="/reservas" element={<HistorialReservas/>}/>
                <Route path="/estadisticas" element={<EstadisticasVuelos/>}/>
            </Routes>
        </BrowserRouter>
  );
}

export default App;
