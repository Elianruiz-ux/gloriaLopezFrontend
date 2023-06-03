import { Helmet } from 'react-helmet-async';
import Nabvar from '../../components/ui/Nabvar/Nabvar';
import { DivPaginaServicio } from './PaginaServicio.styled';
import Button from '../../components/ui/Button/Button';
import Tablas from '../../components/Tablas/Tablas';
import PopUpFormulario from '../../components/PopupFormulario/PopupFormulario';
import { useState } from 'react';

export default function PaginaServicio() {
  const [isOpen, setIsOpen] = useState(false);
  const abrirPopup = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div>
      <Helmet>
        <title>Servicios</title>
      </Helmet>
      <DivPaginaServicio>
        <Nabvar variant="administradorLogeo" />
        <div className="contenedorGeneral">
          <div className="contendortitulo">
            <h2>servicios</h2>
          </div>
          <div className="contenedorFiltros">
            <div className="contenedorBtn">
              <Button
                placeholder="Agregar servicio"
                variant="secundario"
                onClick={abrirPopup}
              ></Button>
            </div>
          </div>
          <div className="contenedorTabla">
            <div>
              <Tablas variant="servicios"></Tablas>
            </div>
          </div>
        </div>
        <div>{isOpen && <PopUpFormulario variant={'servicios'} onClick={abrirPopup} />}</div>
      </DivPaginaServicio>
    </div>
  );
}
