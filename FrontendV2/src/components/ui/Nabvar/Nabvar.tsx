import { ThemeProvider } from 'styled-components'; // Define the interface for the Input component;
import { Nav } from './Nabvar.styled';
import { Link } from 'react-router-dom';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface NabvarProps {
  variant: 'usuario' | 'administrador';
}

// Use the Single Responsibility Principle (SRP)
const Nabvarhtml = ({ variant }: NabvarProps) => {
  return (
    <Nav variant={variant}>
      <div className="columna">
        {/* <div className="ContenedorLogo">
          <p className="titulo">Gloria López</p>
          <p className="subtitulo">Centro de estetica</p>
          <span className="tijeras">
            <RxScissors />
          </span>
        </div> */}
        <div className="contenedorImg">
          <img src="./logo.png" alt="logo" className="img" />
        </div>
      </div>
      <div className="columna">
        <ul>
          {variant == 'usuario' ? (
            <div className="objetosNabVar">
              <li>
                <Link to={'/'}>inicio</Link>
              </li>
              <li>
                <Link to={'/login'} className="iniciar">
                  iniciar sesión
                </Link>
              </li>
              <li>
                <Link to={'/registro'} className="registro">
                  registro
                </Link>
              </li>
            </div>
          ) : (
            variant == 'administrador' && (
              <div className="objetosNabVar">
                <li>
                  <Link to={'/administrador'}>administrador</Link>
                </li>
              </div>
            )
          )}
        </ul>
      </div>
    </Nav>
  );
};

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface NabvarTheme {}

const NavTheme: NabvarTheme = {};

const Nabvar = (props: NabvarProps) => (
  <ThemeProvider theme={NavTheme}>
    <Nabvarhtml {...props} />
  </ThemeProvider>
);

export default Nabvar;
