import { Helmet } from 'react-helmet-async';
import Nabvar from '../../components/ui/Nabvar/Nabvar';
import { DivEmpleado } from './PaginaEmpleado.styled';
import Button from '../../components/ui/Button/Button';
import Tablas from '../../components/Tablas/Tablas';
import { useState } from 'react';
import PopUpFormulario from '../../components/PopupFormulario/PopupFormulario';
import { useParams } from 'react-router-dom';

export default function PaginaEmpleado() {
  const [isOpen, setIsOpen] = useState(false);
  const abrirPopup = () => {
    window.location.href = '/#/empleado';
    setIsOpen(!isOpen);
  };
  const params = useParams();
  const id_empleado = params.id;
  return (
    <div>
      <Helmet>
        <title>Empleados</title>
      </Helmet>
      <DivEmpleado>
        <Nabvar variant="administradorLogeo" />
        <div className="contenedorGeneral">
          <div className="contendortitulo">
            <h2>empleados</h2>
          </div>
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
              <Tablas onClick={abrirPopup} variant="empleados"></Tablas>
            </div>
          </div>
        </div>
        <div>
          {isOpen && (
            <PopUpFormulario variant={'empleados'} ids={id_empleado} onClick={abrirPopup} />
          )}
        </div>
      </DivEmpleado>
    </div>
  );
}
