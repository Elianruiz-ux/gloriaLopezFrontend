import { ThemeProvider } from 'styled-components'; // Define the interface for the Input component
import { Dropdowncss } from './Dropdown.styled';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface DropdownProps {
  placeholder: string;
  variant: 'primario' | 'secundario';
  varianteDos:
    | 'tipoDocumento'
    | 'empleado'
    | 'tipoProducto'
    | 'proveedor'
    | 'estado'
    | 'tipoEmpleado'
    | 'tipoRol';
  required?: boolean;
}

// Use the Single Responsibility Principle (SRP)
const Dropdownhtml = ({ placeholder, variant, required, varianteDos }: DropdownProps) => {
  return (
    <Dropdowncss variant={variant}>
      <label className="text">{placeholder}</label>
      <select className="dropdown" autoComplete="off" required={required}>
        <option defaultValue={''}></option>

        {varianteDos == 'tipoDocumento' && (
          <>
            <option value={'1'}>C.C</option>
            <option value={'2'}>T.I</option>
          </>
        )}
        {varianteDos == 'tipoEmpleado' && (
          <>
            <option value={'1'}>Pedicurista</option>
            <option value={'2'}>Peluquero</option>
            <option value={'3'}>Estilista</option>
          </>
        )}

        {varianteDos == 'empleado' && (
          <>
            <option value={'1'}>Emplado</option>
            <option value={'2'}>Administrador</option>
          </>
        )}

        {varianteDos == 'proveedor' && (
          <>
            <option value={'1'}>Avon</option>
          </>
        )}
        {varianteDos == 'estado' && (
          <>
            <option value={'1'}>Activo</option>
            <option value={'2'}>Inactivo</option>
          </>
        )}
        {varianteDos == 'tipoProducto' && (
          <>
            <option value={'1'}>Maquillaje</option>
          </>
        )}
        {varianteDos == 'tipoRol' && (
          <>
            <option value={'1'}>Administrador</option>
            <option value={'2'}>Colaborador</option>
          </>
        )}
      </select>
    </Dropdowncss>
  );
};

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface DropdownTheme {
  color_texto: string;
  color_fondo: string;
  color_borde: string;
  ancho: string;
}

const dropdownPrimario: DropdownTheme = {
  color_texto: `var(--txt-color-negro)`,
  color_fondo: `var(--bg-color-blanco)`,
  color_borde: `var(--color-borde)`,
  ancho: `100%`
};

const dropdownSecundario: DropdownTheme = {
  color_texto: `var(--txt-color-negro)`,
  color_fondo: `var(--bg-color-blanco)`,
  color_borde: `var(--color-borde)`,
  ancho: `50%`
};

const Dropdown = (props: DropdownProps) => (
  <ThemeProvider
    theme={
      props.variant == 'primario'
        ? dropdownPrimario
        : props.variant == 'secundario' && dropdownSecundario
    }
  >
    <Dropdownhtml {...props} />
  </ThemeProvider>
);

export default Dropdown;
