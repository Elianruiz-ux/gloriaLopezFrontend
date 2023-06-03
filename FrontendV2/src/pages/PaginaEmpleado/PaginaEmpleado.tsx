import { Helmet } from 'react-helmet-async';
import Nabvar from '../../components/ui/Nabvar/Nabvar';
import { DivEmpleado } from './PaginaEmpleado.styled';
import Button from '../../components/ui/Button/Button';
import Tablas from '../../components/Tablas/Tablas';
import { useState } from 'react';
import PopUpFormulario from '../../components/PopupFormulario/PopupFormulario';

export default function PaginaEmpleado() {
  const [isOpen, setIsOpen] = useState(false);
  const abrirPopup = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div>
      <Helmet>
        <title>Empleados</title>
      </Helmet>
      <DivEmpleado>
        <Nabvar variant="administradorLogeo" />
        <div className="contenedorGeneral">
          <div className="contenedorFiltros">
            <div className="contenedorBtn">
              <Button
                placeholder="Agregar empleado"
                variant="secundario"
                onClick={abrirPopup}
              ></Button>
            </div>
          </div>
          <div className="contenedorTabla">
            <div>
              <Tablas variant="empleados"></Tablas>
            </div>
          </div>
        </div>
        <div>{isOpen && <PopUpFormulario variant={'citas'} onClick={abrirPopup} />}</div>
      </DivEmpleado>
    </div>
  );
}
