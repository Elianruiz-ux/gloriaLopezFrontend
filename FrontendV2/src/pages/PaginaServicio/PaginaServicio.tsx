import { Helmet } from 'react-helmet-async';
import Nabvar from '../../components/ui/Nabvar/Nabvar';
import { DivPaginaServicio } from './PaginaServicio.styled';
import Button from '../../components/ui/Button/Button';
import Tablas from '../../components/Tablas/Tablas';
import PopUpFormulario from '../../components/PopupFormulario/PopupFormulario';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { getServicios } from '../../Conection/metodosGet';

import * as XLSX from 'xlsx';

export default function PaginaServicio() {
  const [isOpen, setIsOpen] = useState(false);
  const abrirPopup = () => {
    window.location.href = '/#/servicios';
    setIsOpen(!isOpen);
  };
  const params = useParams();
  const id_servicio = params.id;

  const handleClickGenerar = () => {
    getServicios()
      .then((data) => {
        const workbook = XLSX.utils.book_new();

        const worksheet = XLSX.utils.json_to_sheet(data);

        XLSX.utils.book_append_sheet(workbook, worksheet, 'Servicios');

        XLSX.writeFile(workbook, 'servicios.xlsx');
      })
      .catch((error) => {
        console.error('Error al obtener los servicios:', error);
      });
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
              <Tablas onClick={abrirPopup} variant="servicios"></Tablas>
            </div>
          </div>
        </div>
        <div>
          {isOpen && (
            <PopUpFormulario variant={'servicios'} ids={id_servicio} onClick={abrirPopup} />
          )}
        </div>
      </DivPaginaServicio>
    </div>
  );
}
