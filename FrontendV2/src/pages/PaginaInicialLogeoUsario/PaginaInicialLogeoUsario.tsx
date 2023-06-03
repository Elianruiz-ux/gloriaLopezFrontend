import { Helmet } from 'react-helmet-async';
import Nabvar from '../../components/ui/Nabvar/Nabvar';
import { DivPaginaInicialLogeoUsario } from './PaginaInicialLogeoUsario.styled';

export default function PaginaInicialLogeoUsario() {
  return (
    <div>
      <Helmet>
        <title>Inicio</title>
      </Helmet>
      <DivPaginaInicialLogeoUsario>
        <Nabvar variant="usuarioLogeo" />
      </DivPaginaInicialLogeoUsario>
    </div>
  );
}
