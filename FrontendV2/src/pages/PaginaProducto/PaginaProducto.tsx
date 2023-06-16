import { Helmet } from 'react-helmet-async';
import Nabvar from '../../components/ui/Nabvar/Nabvar';
import { DivProducto } from './PaginaProducto.styled';
import Button from '../../components/ui/Button/Button';
import Tablas from '../../components/Tablas/Tablas';
import { useState } from 'react';
import PopUpFormulario from '../../components/PopupFormulario/PopupFormulario';
import { useParams } from 'react-router-dom';

export default function PaginaProducto() {
  const [isOpen, setIsOpen] = useState(false);
  const abrirPopup = () => {
    window.location.href = '/#/productos';
    setIsOpen(!isOpen);
  };
  const params = useParams();
  const id_producto = params.id;
  return (
    <div>
      <Helmet>
        <title>Productos</title>
      </Helmet>
      <DivProducto>
        <Nabvar variant="administradorLogeo" />
        <div className="contenedorGeneral">
          <div className="contendortitulo">
            <h2>productos</h2>
          </div>
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
              <Tablas onClick={abrirPopup} variant="productos"></Tablas>
            </div>
          </div>
        </div>
        <div>
          {isOpen && (
            <PopUpFormulario variant={'productos'} ids={id_producto} onClick={abrirPopup} />
          )}
        </div>
      </DivProducto>
    </div>
  );
}
