import { ThemeProvider } from 'styled-components'; // Define the interface for the Input component
import { Inputcss } from './Input.styled';
import { useState } from 'react';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface InputProps {
  placeholder: string;
  type: string;
  required?: boolean;
  variant: 'primario' | 'secundario';
  value?: string | undefined;
  onInputSearch: (value: any) => void;
}

// Use the Single Responsibility Principle (SRP)
const Inputhtml = ({ placeholder, variant, type, required, value, onInputSearch }: InputProps) => {
  const [searchTerm, setSearchTerm] = useState('');
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.value !== null) {
      setSearchTerm(event.target.value);
      onInputSearch(event.target.value);
    }
  };
  return (
    <Inputcss variant={variant}>
      <label className="text">{placeholder}</label>
      <input
        type={type}
        className="input"
        autoComplete="off"
        required={required}
        value={searchTerm}
        onChange={handleInputChange}
        placeholder={value}
      />
    </Inputcss>
  );
};

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface InputTheme {
  color_texto: string;
  color_fondo: string;
  color_borde: string;
  ancho: string;
}

const inputPrimario: InputTheme = {
  color_texto: `var(--txt-color-negro)`,
  color_fondo: `var(--bg-color-blanco)`,
  color_borde: `var(--color-borde)`,
  ancho: `100%`
};

const inputSecundario: InputTheme = {
  color_texto: `var(--txt-color-negro)`,
  color_fondo: `var(--bg-color-blanco)`,
  color_borde: `var(--color-borde)`,
  ancho: `50%`
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
