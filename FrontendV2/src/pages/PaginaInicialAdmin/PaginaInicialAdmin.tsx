import { Helmet } from 'react-helmet-async';
import Nabvar from '../../components/ui/Nabvar/Nabvar';

export default function PaginaInicialAdmin() {
  return (
    <div>
      <Helmet>
        <title>Inicio administrador</title>
      </Helmet>
      <div>
        <Nabvar variant="administrador" />
      </div>
    </div>
  );
}
