import './App.css';
import { Routes, Route, HashRouter } from 'react-router-dom';
import PaginaInicial from './pages/PaginaInicialUser/PaginaInicial';
import PaginaInicialAdmin from './pages/PaginaInicialAdmin/PaginaInicialAdmin';
import PaginaLogin from './pages/PaginaLogin/PaginaLogin';
import PaginaRegistro from './pages/PaginaRegistro/PaginaRegistro';

function App() {
  return (
    <HashRouter>
      <main>
        <Routes>
          <Route path="/administrador" element={<PaginaInicialAdmin />} />
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
