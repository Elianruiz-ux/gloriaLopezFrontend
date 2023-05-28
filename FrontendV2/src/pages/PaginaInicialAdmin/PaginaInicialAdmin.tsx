import { Helmet } from 'react-helmet-async';
import Nabvar from '../../components/ui/Nabvar/Nabvar';
import { DivPaginaInicialAdmin } from './PaginaInicialAdmin.styled';
import CartaLogin from '../../components/CartaLogin/CartaLogin';

export default function PaginaInicialAdmin() {
  return (
    <div>
      <Helmet>
        <title>Inicio administrador</title>
      </Helmet>
      <DivPaginaInicialAdmin>
        <Nabvar variant="administrador" />
        <div className="contenedorFormulario">
          <CartaLogin variant="admin"></CartaLogin>
        </div>
      </DivPaginaInicialAdmin>
    </div>
  );
}
