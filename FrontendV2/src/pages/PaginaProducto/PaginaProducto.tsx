import { Helmet } from 'react-helmet-async';
import Nabvar from '../../components/ui/Nabvar/Nabvar';
import { DivProducto } from './PaginaProducto.styled';
import Button from '../../components/ui/Button/Button';
import Tablas from '../../components/Tablas/Tablas';
import { useState } from 'react';
import PopUpFormulario from '../../components/PopupFormulario/PopupFormulario';

export default function PaginaProducto() {
  const [isOpen, setIsOpen] = useState(false);
  const abrirPopup = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div>
      <Helmet>
        <title>Productos</title>
      </Helmet>
      <DivProducto>
        <Nabvar variant="administradorLogeo" />
        <div className="contenedorGeneral">
          <div className="contenedorFiltros">
            <div className="contenedorBtn">
              <Button
                placeholder="Agregar producto"
                variant="secundario"
                onClick={abrirPopup}
              ></Button>
            </div>
          </div>
          <div className="contenedorTabla">
            <div>
              <Tablas variant="productos"></Tablas>
            </div>
          </div>
        </div>
        <div>{isOpen && <PopUpFormulario variant={'citas'} onClick={abrirPopup} />}</div>
      </DivProducto>
    </div>
  );
}
