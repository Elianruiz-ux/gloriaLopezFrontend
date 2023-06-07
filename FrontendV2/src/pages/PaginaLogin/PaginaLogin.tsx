import { Helmet } from 'react-helmet-async';
import Nabvar from '../../components/ui/Nabvar/Nabvar';
import { DivPaginaLogin } from './PaginaLogin.styled';
import CartaLogin from '../../components/CartaLogin/CartaLogin';
import PopUpFormulario from '../../components/PopupFormulario/PopupFormulario';
import { useState } from 'react';

export default function PaginaLogin() {
  const [isOpen, setIsOpen] = useState(false);
  const abrirPopup = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div>
      <Helmet>
        <title>Inicio de sesión</title>
      </Helmet>
      <DivPaginaLogin>
        <Nabvar variant="usuario" />
        <div className="contenedorFormulario">
          <CartaLogin onClick={abrirPopup} variant="login"></CartaLogin>
        </div>
        <div>{isOpen && <PopUpFormulario variant={'login'} onClick={abrirPopup} />}</div>
      </DivPaginaLogin>
    </div>
  );
}
