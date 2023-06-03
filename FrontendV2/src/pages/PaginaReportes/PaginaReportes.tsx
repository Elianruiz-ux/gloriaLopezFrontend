import { Helmet } from 'react-helmet-async';
import Nabvar from '../../components/ui/Nabvar/Nabvar';
import { DivPaginaReportes } from './PaginaReportes.styled';
import Button from '../../components/ui/Button/Button';

export default function PaginaReportes() {
  return (
    <div>
      <Helmet>
        <title>Resportes</title>
      </Helmet>
      <DivPaginaReportes>
        <Nabvar variant="administradorLogeo" />
        <div className="contenedorGeneral">
          <div className="contenedorFiltros">
            <div className="contenedorBtn">
              <Button placeholder="Generar reporte" variant="secundario"></Button>
            </div>
          </div>
          <div className="contenedorReportes">
            <div></div>
          </div>
        </div>
      </DivPaginaReportes>
    </div>
  );
}
