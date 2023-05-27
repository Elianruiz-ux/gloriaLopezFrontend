import { ThemeProvider } from 'styled-components'; // Define the interface for the Input component
import { ButtonCss } from './Button.styled';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface ButtonProps {
  placeholder: string;
  onClick: () => void;
  variant: 'primario' | 'secundario' | 'peligro';
}

// Use the Single Responsibility Principle (SRP)
const Buttonhtml = ({ placeholder, onClick, variant }: ButtonProps) => {
  return (
    <ButtonCss variant={variant} onClick={onClick}>
      {placeholder}
    </ButtonCss>
  );
};

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface ButtonTheme {
  color: string;
}

const buttonPrimario: ButtonTheme = {
  color: `var()`
};

const buttonSecundario: ButtonTheme = {
  color: `var()`
};

const buttonPeligro: ButtonTheme = {
  color: `var()`
};

const Button = (props: ButtonProps) => (
  <ThemeProvider
    theme={
      props.variant == 'primario'
        ? buttonPrimario
        : props.variant == 'secundario'
        ? buttonSecundario
        : props.variant == 'peligro' && buttonPeligro
    }
  >
    <Buttonhtml {...props} />
  </ThemeProvider>
);

export default Button;
