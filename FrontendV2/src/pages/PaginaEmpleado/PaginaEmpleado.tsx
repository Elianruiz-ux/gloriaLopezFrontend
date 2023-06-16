import { Helmet } from 'react-helmet-async';
import Nabvar from '../../components/ui/Nabvar/Nabvar';
import { DivEmpleado } from './PaginaEmpleado.styled';
import Button from '../../components/ui/Button/Button';
import Tablas from '../../components/Tablas/Tablas';
import { useState } from 'react';
import PopUpFormulario from '../../components/PopupFormulario/PopupFormulario';
import { useParams } from 'react-router-dom';
import {getEmpleados} from '../../Conection/metodosGet';
import * as XLSX from 'xlsx';

export default function PaginaEmpleado() {
  const [isOpen, setIsOpen] = useState(false);
  const abrirPopup = () => {
    window.location.href = '/#/empleado';
    setIsOpen(!isOpen);
  };
  const params = useParams();
  const id_empleado = params.id;

  const handleClickGenerar = () => {
    getEmpleados()
    .then(data => {

      const workbook = XLSX.utils.book_new();

      const worksheet = XLSX.utils.json_to_sheet(data);

      XLSX.utils.book_append_sheet(workbook, worksheet, 'Empleados');

      XLSX.writeFile(workbook, 'empleados.xlsx');
    })
    .catch(error => {
      console.error('Error al obtener los empleados:', error);
    });

  };
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
            <div className="contenedorBtn">
              <Button
                placeholder="Generar excel"
                variant="primario"
                onClick={handleClickGenerar}
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
