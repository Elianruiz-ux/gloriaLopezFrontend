import { ThemeProvider } from 'styled-components'; // Define the interface for the Input component
import { DivCarta } from './CartaPequena.styled';
import { Link } from 'react-router-dom';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface CartaProps {
  placeholder: string;
  img?: string;
  variant?: 'primario' | 'secundario';
  irA: string;
}

// Use the Single Responsibility Principle (SRP)
const Cartahtml = ({ placeholder, variant, irA, img }: CartaProps) => {
  return (
    <DivCarta variant={variant}>
      <Link to={irA}>
        <div className="contenedorImg">
          <div className="containerImg">
            <img src={img} alt={'imagen-' + placeholder} />
          </div>
        </div>
        <div className="contenedorTexto">
          <p>{placeholder}</p>
        </div>
        {/* <Link to={irA}>{placeholder}</Link> */}
      </Link>
    </DivCarta>
  );
};

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface cartaTheme {}

const CartaPrimario: cartaTheme = {};

const CartaPequena = (props: CartaProps) => (
  <ThemeProvider theme={CartaPrimario}>
    <Cartahtml {...props} />
  </ThemeProvider>
);

export default CartaPequena;
