import { Helmet } from 'react-helmet-async';
import Nabvar from '../../components/ui/Nabvar/Nabvar';
import { DivPaginaProveedores } from './PaginaProveedores.styled';
import Button from '../../components/ui/Button/Button';
import Tablas from '../../components/Tablas/Tablas';
import { useState } from 'react';
import PopUpFormulario from '../../components/PopupFormulario/PopupFormulario';

export default function PaginaProveedores() {
  const [isOpen, setIsOpen] = useState(false);
  const abrirPopup = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div>
      <Helmet>
        <title>Provedores</title>
      </Helmet>
      <DivPaginaProveedores>
        <Nabvar variant="administradorLogeo" />
        <div className="contenedorGeneral">
          <div className="contendortitulo">
            <h2>provedores</h2>
          </div>
          <div className="contenedorFiltros">
            <div className="contenedorBtn">
              <Button
                placeholder="Agregar proveedor"
                variant="secundario"
                onClick={abrirPopup}
              ></Button>
            </div>
          </div>
          <div className="contenedorTabla">
            <div>
              <Tablas variant="proveedores"></Tablas>
            </div>
          </div>
        </div>
        <div>{isOpen && <PopUpFormulario variant={'proveedores'} onClick={abrirPopup} />}</div>
      </DivPaginaProveedores>
    </div>
  );
}
