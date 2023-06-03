import { Helmet } from 'react-helmet-async';
import Nabvar from '../../components/ui/Nabvar/Nabvar';
import { DivPaginaInicialLogueoAdministrador } from './PaginaInicialLogueoAdministrador.styled';

export default function PaginaInicialLogueoAdministrador() {
  return (
    <div>
      <Helmet>
        <title>Inicio</title>
      </Helmet>
      <DivPaginaInicialLogueoAdministrador>
        <Nabvar variant="administradorLogeo" />
      </DivPaginaInicialLogueoAdministrador>
    </div>
  );
}
