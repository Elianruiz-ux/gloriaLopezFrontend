import { ThemeProvider } from 'styled-components'; // Define the interface for the Input component;
import { Nav } from './Nabvar.styled';
import { Link } from 'react-router-dom';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface NabvarProps {
  variant:
    | 'usuario'
    | 'usuarioLogeo'
    | 'administrador'
    | 'administradorLogeo'
    | 'administradorLogeoSinTitulos';
}

// Use the Single Responsibility Principle (SRP)
const Nabvarhtml = ({ variant }: NabvarProps) => {
  return (
    <Nav variant={variant}>
      <div className="columnaUno">
        {/* <div className="ContenedorLogo">
          <p className="titulo">Gloria López</p>
          <p className="subtitulo">Centro de estetica</p>
          <span className="tijeras">
            <RxScissors />
          </span>
        </div> */}
        <div className="contenedorImg">
          <Link
            to={
              variant == 'usuario'
                ? '/'
                : variant == 'usuarioLogeo'
                ? '/homeUsuario'
                : variant == 'administrador'
                ? '/administrador'
                : variant == 'administradorLogeo' || variant == 'administradorLogeoSinTitulos'
                ? '/homeAdministrador'
                : '/'
            }
          >
            <img src="./logo.png" alt="logo" className="img" />
          </Link>
        </div>
      </div>
      <div className="columnaDos">
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
          ) : variant == 'administrador' ? (
            <div className="objetosNabVar">
              <li>
                <Link to={'/administrador'}>administrador</Link>
              </li>
            </div>
          ) : variant == 'administradorLogeo' ? (
            <div className="objetosNabVar">
              <li>
                <Link to={'/homeAdministrador'}>Inicio</Link>
              </li>
              <li>
                <Link to={'/citas'}>Citas</Link>
              </li>
              <li>
                <Link to={'/productos'}>Productos</Link>
              </li>
              <li>
                <Link to={'/proveedores'}>Proveedores</Link>
              </li>
              <li>
                <Link to={'/servicios'}>Servicios</Link>
              </li>
              <li>
                <Link to={'/empleado'}>Empleados</Link>
              </li>
              <li>
                <Link to={'/reportes'}>Reportes</Link>
              </li>
            </div>
          ) : (
            variant == 'usuarioLogeo' && (
              <div className="objetosNabVar">
                <li>
                  <Link to={'/homeUsuario'}>Inicio</Link>
                </li>
                <li>
                  <Link to={'/'} className="cerrarsesion">
                    Cerrar sesión
                  </Link>
                </li>
              </div>
            )
          )}

          {(variant == 'administradorLogeo' || variant == 'administradorLogeoSinTitulos') && (
            <div className="objetosNabVar">
              <li>
                <Link to={'/administrador'} className="cerrarsesion">
                  Cerrar sesión
                </Link>
              </li>
            </div>
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
