import { ThemeProvider } from 'styled-components'; // Define the interface for the Input component
import { Dropdowncss } from './Dropdown.styled';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface DropdownProps {
  placeholder: string;
  variant: 'primario' | 'secundario';
}

// Use the Single Responsibility Principle (SRP)
const Dropdownhtml = ({ placeholder, variant }: DropdownProps) => {
  return (
    <Dropdowncss variant={variant}>
      <label className="text">{placeholder}</label>
      <select className="dropdown" autoComplete="off">
        <option defaultValue={''}></option>
        <option value={'c'}>C.c</option>
        <option value={'t'}>T.i</option>
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
