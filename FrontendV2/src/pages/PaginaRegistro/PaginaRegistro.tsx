import { Helmet } from 'react-helmet-async';
import Nabvar from '../../components/ui/Nabvar/Nabvar';
import { DivPaginaRegistro } from './PaginaRegitro.styled';
import CartaLogin from '../../components/CartaLogin/CartaLogin';

export default function PaginaRegistro() {
  return (
    <div>
      <Helmet>
        <title>Registro</title>
      </Helmet>
      <DivPaginaRegistro>
        <Nabvar variant="usuario" />
        <div className="contenedorFormulario">
          <CartaLogin variant="registro"></CartaLogin>
        </div>
      </DivPaginaRegistro>
    </div>
  );
}
