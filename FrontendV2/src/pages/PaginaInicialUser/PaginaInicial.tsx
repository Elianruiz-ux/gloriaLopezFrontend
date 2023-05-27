import { Helmet } from 'react-helmet-async';
import Nabvar from '../../components/ui/Nabvar/Nabvar';
import Input from '../../components/ui/Input/Input';

export default function PaginaInicial() {
  return (
    <div>
      <Helmet>
        <title>Inicio</title>
      </Helmet>
      <div>
        <Nabvar variant="usuario" />
        <Input placeholder="nombre" type="text" variant="primario" />
      </div>
    </div>
  );
}
