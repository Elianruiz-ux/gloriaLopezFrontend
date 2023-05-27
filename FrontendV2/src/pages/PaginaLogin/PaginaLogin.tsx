import { Helmet } from 'react-helmet-async';
import Nabvar from '../../components/ui/Nabvar/Nabvar';

export default function PaginaLogin() {
  return (
    <div>
      <Helmet>
        <title>Inicio de sesión</title>
      </Helmet>
      <div>
        <Nabvar variant="usuario" />
      </div>
    </div>
  );
}
