import { ThemeProvider } from 'styled-components'; // Define the interface for the Input component

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface CartaLoginProps {}

// Use the Single Responsibility Principle (SRP)
const Carta = () => {
  return <div>carta login</div>;
};

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface CartaTheme {}

const cartaTheme: CartaTheme = {};

const CartaLogin = (props: CartaLoginProps) => (
  <ThemeProvider theme={cartaTheme}>
    <Carta {...props} />
  </ThemeProvider>
);

export default CartaLogin;
