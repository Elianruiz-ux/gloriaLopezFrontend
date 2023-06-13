import { Helmet } from 'react-helmet-async';
import Nabvar from '../../components/ui/Nabvar/Nabvar';
import { DivPaginaInicialAdmin } from './PaginaInicialAdmin.styled';
import CartaLogin from '../../components/CartaLogin/CartaLogin';
import PopUpFormulario from '../../components/PopupFormulario/PopupFormulario';
import { useState } from 'react';

export default function PaginaInicialAdmin() {
  const [isOpen, setIsOpen] = useState(false);
  const abrirPopup = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <Helmet>
        <title>Inicio administrador</title>
      </Helmet>
      <DivPaginaInicialAdmin>
        <Nabvar variant="administrador" />
        <div className="contenedorFormulario">
          <CartaLogin onClick={abrirPopup} variant="admin"></CartaLogin>
        </div>
        <div>{isOpen && <PopUpFormulario variant={'login'} onClick={abrirPopup} />}</div>
      </DivPaginaInicialAdmin>
    </div>
  );
}
