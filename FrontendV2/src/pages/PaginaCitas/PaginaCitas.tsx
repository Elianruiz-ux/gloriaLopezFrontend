import { Helmet } from 'react-helmet-async';
import { useState } from 'react';
import Nabvar from '../../components/ui/Nabvar/Nabvar';
import { DivPaginaCitas } from './PaginaCitas.styled';
import Button from '../../components/ui/Button/Button';
import Tablas from '../../components/Tablas/Tablas';
import PopUpFormulario from '../../components/PopupFormulario/PopupFormulario';

export default function PaginaCitas() {
  const [isOpen, setIsOpen] = useState(false);
  const abrirPopup = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div>
      <Helmet>
        <title>Citas</title>
      </Helmet>
      <DivPaginaCitas>
        <Nabvar variant="administradorLogeo" />
        <div className="contenedorGeneral">
          <div className="contenedorFiltros">
            <div className="contenedorBtn">
              <Button placeholder="Agregar cita" variant="secundario" onClick={abrirPopup}></Button>
            </div>
          </div>
          <div className="contenedorTabla">
            <div>
              <Tablas variant="citas"></Tablas>
            </div>
          </div>
        </div>
        <div>{isOpen && <PopUpFormulario variant={'citas'} onClick={abrirPopup} />}</div>
      </DivPaginaCitas>
    </div>
  );
}
