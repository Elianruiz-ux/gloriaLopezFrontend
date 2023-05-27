import { Helmet } from 'react-helmet-async';
import Nabvar from '../../components/ui/Nabvar/Nabvar';

export default function PaginaRegistro() {
  return (
    <div>
      <Helmet>
        <title>Registro</title>
      </Helmet>
      <div>
        <Nabvar variant="usuario" />
      </div>
    </div>
  );
}
