import { Helmet } from 'react-helmet-async';
import { useState } from 'react';
import Nabvar from '../../components/ui/Nabvar/Nabvar';
import { DivPaginaCitas } from './PaginaCitas.styled';
import Button from '../../components/ui/Button/Button';
import Tablas from '../../components/Tablas/Tablas';
import PopUpFormulario from '../../components/PopupFormulario/PopupFormulario';
import { useParams } from 'react-router-dom';

export default function PaginaCitas() {
  const [isOpen, setIsOpen] = useState(false);
  const abrirPopup = () => {
    window.location.href = '/#/citas';
    setIsOpen(!isOpen);
  };
  const params = useParams();
  const id_citas = params.id;
  return (
    <div>
      <Helmet>
        <title>Citas</title>
      </Helmet>
      <DivPaginaCitas>
        <Nabvar variant="administradorLogeo" />
        <div className="contenedorGeneral">
          <div className="contendortitulo">
            <h2>citas</h2>
          </div>
          <div className="contenedorFiltros">
            <div className="contenedorBtn">
              <Button placeholder="Agregar cita" variant="secundario" onClick={abrirPopup}></Button>
            </div>
          </div>
          <div className="contenedorTabla">
            <div>
              <Tablas onClick={abrirPopup} variant="citas"></Tablas>
            </div>
          </div>
        </div>
        <div>
          {isOpen && <PopUpFormulario variant={'citas'} ids={id_citas} onClick={abrirPopup} />}
        </div>
      </DivPaginaCitas>
    </div>
  );
}
