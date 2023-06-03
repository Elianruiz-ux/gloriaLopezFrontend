import { ThemeProvider } from 'styled-components'; // Define the interface for the Input component
import { DivPopUp } from './PopupFormulario.styled';
import { GrClose } from 'react-icons/gr';
import Button from '../ui/Button/Button';
import Input from '../ui/Input/Input';
import Dropdown from '../ui/Dropdown/Dropdown';

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
          <div className="contenedorCerrarPopUp">
            <button onClick={onClick}>
              <GrClose></GrClose>
            </button>
          </div>
          <div className="contenedortitulo">
            {variant == 'citas' && <h2>citas</h2>}
            {variant == 'productos' && <h2>productos</h2>}
            {variant == 'proveedores' && <h2>proveedores</h2>}
            {variant == 'servicios' && <h2>servicios</h2>}
            {variant == 'empleados' && <h2>empleados</h2>}
          </div>
          {variant == 'citas' && (
            <div className="contenedorFormulario">
              <Input variant="primario" placeholder="nombre" type="text" />
              <Input variant="primario" placeholder="fecha inicio" type="date" />
              <Input variant="primario" placeholder="fecha fin" type="date" />
              <Dropdown placeholder="usuario" variant="primario" />
              <Dropdown placeholder="empleado" variant="primario" />
              <Dropdown placeholder="estado" variant="primario" />
            </div>
          )}
          {variant == 'productos' && (
            <div className="contenedorFormulario">
              <Input variant="primario" placeholder="nombre" type="text" />
              <Input variant="primario" placeholder="cantidad" type="number" />
              <Dropdown placeholder="tipo de producto" variant="primario" />
              <Dropdown placeholder="proveedor" variant="primario" />
            </div>
          )}
          {variant == 'proveedores' && (
            <div className="contenedorFormulario">
              <Input variant="primario" placeholder="nombre" type="text" />
              <Input variant="primario" placeholder="correo" type="email" />
              <Dropdown placeholder="tipo documento" variant="primario" />
              <Input variant="primario" placeholder="número documento" type="number" />
              <Dropdown placeholder="estado" variant="primario" />
            </div>
          )}
          {variant == 'servicios' && (
            <div className="contenedorFormulario">
              <Input variant="primario" placeholder="nombre" type="text" />
              <Input variant="primario" placeholder="valor" type="number" />
              <Dropdown placeholder="estado" variant="primario" />
            </div>
          )}
          {variant == 'empleados' && (
            <div className="contenedorFormulario">
              <div className="alinear">
                <Input variant="secundario" placeholder="nombre" type="text" />
                <Input variant="secundario" placeholder="fecha nacimiento" type="date" />
              </div>
              <div className="alinear">
                <Input variant="secundario" placeholder="fecha ingreso" type="date" />
                <Input variant="secundario" placeholder="dirección" type="text" />
              </div>
              <div className="alinear">
                <Dropdown placeholder="tipo documento" variant="secundario" />
                <Input variant="secundario" placeholder="número documento" type="number" />
              </div>
              <div className="alinear">
                <Input variant="secundario" placeholder="correo" type="email" />
                <Input variant="secundario" placeholder="celular" type="text" />
              </div>
              <div className="alinear">
                <Dropdown placeholder="rol" variant="secundario" />
                <Dropdown placeholder="tipo empleado" variant="secundario" />
                <Dropdown placeholder="estado" variant="secundario" />
              </div>
            </div>
          )}
          <div className="contenedorbtnAgregar">
            <div className="column">
              <Button placeholder={'agregar'} variant="primario"></Button>
            </div>
            <div className="column">
              <Button placeholder={'cancelar'} variant="peligro" onClick={onClick}></Button>
            </div>
          </div>
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
