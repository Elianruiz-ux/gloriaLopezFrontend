import { Helmet } from 'react-helmet-async';
import Nabvar from '../../components/ui/Nabvar/Nabvar';
import { DivPaginaInicial } from './PaginaInicial.styled';

export default function PaginaInicial() {
  return (
    <div>
      <Helmet>
        <title>Inicio</title>
      </Helmet>
      <DivPaginaInicial>
        <Nabvar variant="usuario" />
      </DivPaginaInicial>
    </div>
  );
}
