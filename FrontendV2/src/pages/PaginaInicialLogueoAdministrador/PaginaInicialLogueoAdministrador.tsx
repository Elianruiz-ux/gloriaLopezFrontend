import { Helmet } from 'react-helmet-async';
import Nabvar from '../../components/ui/Nabvar/Nabvar';
import { DivPaginaInicialLogueoAdministrador } from './PaginaInicialLogueoAdministrador.styled';
import CartaPequena from '../../components/CartaPequena/CartaPequena';

export default function PaginaInicialLogueoAdministrador() {
  return (
    <div>
      <Helmet>
        <title>Inicio</title>
      </Helmet>
      <DivPaginaInicialLogueoAdministrador>
        <Nabvar variant="administradorLogeoSinTitulos" />
        <div className="contenedorGeneral">
          <div className="contendorCartas">
            <div>
              <CartaPequena img="./agenda.png" irA={'/citas'} placeholder="citas" />
            </div>
            <div>
              <CartaPequena img="./producto.png" irA={'/productos'} placeholder="productos" />
            </div>
            <div>
              <CartaPequena img="./proveedor.png" irA={'/proveedores'} placeholder="proveedores" />
            </div>
            <div>
              <CartaPequena img="./servicio.png" irA={'/servicios'} placeholder="servicios" />
            </div>
            <div>
              <CartaPequena img="./empleado.png" irA={'/empleado'} placeholder="empleados" />
            </div>
            <div>
              <CartaPequena img="./reportes.png" irA={'/reportes'} placeholder="reportes" />
            </div>
          </div>
        </div>
      </DivPaginaInicialLogueoAdministrador>
    </div>
  );
}
