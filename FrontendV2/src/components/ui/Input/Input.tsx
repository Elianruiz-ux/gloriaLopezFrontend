import { ThemeProvider } from 'styled-components'; // Define the interface for the Input component
import { Inputcss } from './Input.styled';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface InputProps {
  placeholder: string;
  type: string;
  variant: 'primario' | 'secundario';
}

// Use the Single Responsibility Principle (SRP)
const Inputhtml = ({ placeholder, variant, type }: InputProps) => {
  return (
    <Inputcss variant={variant}>
      <label className="text">{placeholder}</label>
      <input type={type} className="input" autoComplete="off" />
    </Inputcss>
  );
};

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface InputTheme {
  color_texto: string;
  color_fondo: string;
  color_borde: string;
}

const inputPrimario: InputTheme = {
  color_texto: `var(--txt-color-negro)`,
  color_fondo: `var(--bg-color-blanco)`,
  color_borde: `var(--color-borde)`
};

const inputSecundario: InputTheme = {
  color_texto: `var(--txt-color-negro)`,
  color_fondo: `var(--bg-color-blanco)`,
  color_borde: `var(--color-borde)`
};

const Input = (props: InputProps) => (
  <ThemeProvider
    theme={
      props.variant == 'primario' ? inputPrimario : props.variant == 'secundario' && inputSecundario
    }
  >
    <Inputhtml {...props} />
  </ThemeProvider>
);

export default Input;
