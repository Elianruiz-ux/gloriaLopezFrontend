import { ThemeProvider } from 'styled-components'; // Define the interface for the Input component
import { ButtonCss } from './Button.styled';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface ButtonProps {
  placeholder: string;
  onClick?: () => void;
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

//cuando los campos sean obligatorio tengan un color diferente y se si esta validado los campos sean de otro color y se active le boton

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface ButtonTheme {
  color: string;
  bgColor: string;
}

const buttonPrimario: ButtonTheme = {
  color: `var(--txt-color-negro)`,
  bgColor: `var(--bg-color-primario-btn)`
};

const buttonSecundario: ButtonTheme = {
  color: `var(--txt-color-blanco)`,
  bgColor: `var(--bg-color-secundario-btn)`
};

const buttonPeligro: ButtonTheme = {
  color: `var(--txt-color-blanco)`,
  bgColor: `var(--bg-color-peligro-btn)`
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
