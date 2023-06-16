import { Helmet } from 'react-helmet-async';
import Nabvar from '../../components/ui/Nabvar/Nabvar';
import { DivPaginaProveedores } from './PaginaProveedores.styled';
import Button from '../../components/ui/Button/Button';
import Tablas from '../../components/Tablas/Tablas';
import { useState } from 'react';
import PopUpFormulario from '../../components/PopupFormulario/PopupFormulario';
import { useParams } from 'react-router-dom';
import {getProveedores} from '../../Conection/metodosGet';
import * as XLSX from 'xlsx';

export default function PaginaProveedores() {
  const [isOpen, setIsOpen] = useState(false);
  const abrirPopup = () => {
    window.location.href = '/#/proveedores';

    setIsOpen(!isOpen);
  };
  const params = useParams();
  const id_proveedor = params.id;

  const handleClickGenerar = () => {
    getProveedores()
    .then(data => {

      const workbook = XLSX.utils.book_new();

      const worksheet = XLSX.utils.json_to_sheet(data);

      XLSX.utils.book_append_sheet(workbook, worksheet, 'Proveedores');

      XLSX.writeFile(workbook, 'proveedores.xlsx');
    })
    .catch(error => {
      console.error('Error al obtener los proveedores:', error);
    });
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
              <Tablas onClick={abrirPopup} variant="proveedores"></Tablas>
            </div>
          </div>
        </div>
        <div>
          {isOpen && (
            <PopUpFormulario variant={'proveedores'} ids={id_proveedor} onClick={abrirPopup} />
          )}
        </div>
      </DivPaginaProveedores>
    </div>
  );
}
