import { Helmet } from 'react-helmet-async';
import Nabvar from '../../components/ui/Nabvar/Nabvar';
import { DivPaginaLogin } from './PaginaLogin.styled';
import CartaLogin from '../../components/CartaLogin/CartaLogin';

export default function PaginaLogin() {
  return (
    <div>
      <Helmet>
        <title>Inicio de sesión</title>
      </Helmet>
      <DivPaginaLogin>
        <Nabvar variant="usuario" />
        <div className="contenedorFormulario">
          <CartaLogin variant="login"></CartaLogin>
        </div>
      </DivPaginaLogin>
    </div>
  );
}
