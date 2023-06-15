import './App.css';
import { Routes, Route, HashRouter } from 'react-router-dom';
import PaginaInicial from './pages/PaginaInicialUser/PaginaInicial';
import PaginaInicialAdmin from './pages/PaginaInicialAdmin/PaginaInicialAdmin';
import PaginaLogin from './pages/PaginaLogin/PaginaLogin';
import PaginaRegistro from './pages/PaginaRegistro/PaginaRegistro';
import PaginaCitas from './pages/PaginaCitas/PaginaCitas';
import PaginaEmpleado from './pages/PaginaEmpleado/PaginaEmpleado';
import PaginaInicialLogeoUsario from './pages/PaginaInicialLogeoUsario/PaginaInicialLogeoUsario';
import PaginaProducto from './pages/PaginaProducto/PaginaProducto';
import PaginaProveedores from './pages/PaginaProveedores/PaginaProveedores';
import PaginaReportes from './pages/PaginaReportes/PaginaReportes';
import PaginaServicio from './pages/PaginaServicio/PaginaServicio';
import PaginaInicialLogueoAdministrador from './pages/PaginaInicialLogueoAdministrador/PaginaInicialLogueoAdministrador';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <HashRouter>
      <main>
        <ToastContainer autoClose={2000} position="top-center" />
        <Routes>
          <Route path="/administrador" element={<PaginaInicialAdmin />} />
          <Route path="/citas" element={<PaginaCitas />} />
          <Route path="/homeUsuario" element={<PaginaInicialLogeoUsario />} />
          <Route path="/homeAdministrador" element={<PaginaInicialLogueoAdministrador />} />
          <Route path="/empleado" element={<PaginaEmpleado />} />
          <Route path="/empleado/:id" element={<PaginaEmpleado />} />
          <Route path="/productos" element={<PaginaProducto />} />
          <Route path="/proveedores" element={<PaginaProveedores />} />
          <Route path="/servicios" element={<PaginaServicio />} />
          <Route path="/reportes" element={<PaginaReportes />} />
          <Route path="/login" element={<PaginaLogin />} />
          <Route path="/registro" element={<PaginaRegistro />} />
          <Route path="/" element={<PaginaInicial />} />
          <Route path="*" element={<PaginaInicial />} />
        </Routes>
      </main>
    </HashRouter>
  );
}

export default App;
