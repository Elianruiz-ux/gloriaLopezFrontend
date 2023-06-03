import { ThemeProvider } from 'styled-components'; // Define the interface for the Input component
import { DivPopUp } from './PopupFormulario.styled';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface PopUpFormualarioProps {
  variant: 'citas' | 'productos' | 'proveedores' | 'servicios' | 'empleados';
  onClick: () => void;
}

// Use the Single Responsibility Principle (SRP)
const PopUpFormualariohtml = ({ variant, onClick }: PopUpFormualarioProps) => {
  return (
    <DivPopUp variant={variant}>
      <div className="popupContainer">
        <div className="popupBackground" onClick={onClick}></div>
        <div className="popupContent">
          <h2>Contenido del Popup</h2>
          <p>Este es el contenido del popup.</p>
          <button onClick={onClick}>Cerrar Popup</button>
        </div>
      </div>
    </DivPopUp>
  );
};

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface PopUpFormualarioTheme {}

const popUpFormualarioTheme: PopUpFormualarioTheme = {};

const PopUpFormulario = (props: PopUpFormualarioProps) => (
  <ThemeProvider theme={popUpFormualarioTheme}>
    <PopUpFormualariohtml {...props} />
  </ThemeProvider>
);

export default PopUpFormulario;
