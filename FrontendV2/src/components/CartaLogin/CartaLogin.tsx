import { ThemeProvider } from 'styled-components'; // Define the interface for the Input component
import { DivCartaLogin } from './CartaLogin.styled';
import Input from '../ui/Input/Input';
import Button from '../ui/Button/Button';
import { Link } from 'react-router-dom';
import Dropdown from '../ui/Dropdown/Dropdown';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface CartaLoginProps {
  variant: 'login' | 'registro' | 'admin';
}

// Use the Single Responsibility Principle (SRP)
const Cartahtml = ({ variant }: CartaLoginProps) => {
  const handleClickIngresarUsuario = () => {
    window.location.href = '/#/homeUsuario';
  };
  const handleClickRegistrarUsuario = () => {
    window.location.href = '/#/homeUsuario';
  };
  const handleClickIngresarAdministrador = () => {
    window.location.href = '/#/homeAdministrador';
  };

  return (
    <DivCartaLogin variant={variant}>
      <header>
        {variant == 'login' ? (
          <h2>Inicio de sesión</h2>
        ) : variant == 'registro' ? (
          <h2>Registrate</h2>
        ) : (
          variant == 'admin' && <h2>Administrador</h2>
        )}
      </header>
      {variant == 'login' ? (
        <main>
          <div>
            <Input placeholder="Correo" type="email" required={true} variant="primario" />
          </div>
          <div>
            <Input placeholder="Contraseña" type="password" required={true} variant="primario" />
          </div>
          <div>
            <Button
              placeholder="Iniciar sesión"
              variant="primario"
              onClick={handleClickIngresarUsuario}
            ></Button>
          </div>
        </main>
      ) : variant == 'registro' ? (
        <main>
          <div className="alinear">
            <Input placeholder="Nombre" type="text" required={true} variant="secundario" />
            <Input placeholder="Apellido" type="text" required={true} variant="secundario" />
          </div>
          <div className="alinear">
            <Dropdown placeholder="Tipo de documento" required={true} variant="secundario" />
            <Input
              placeholder="Número de documento"
              required={true}
              type="text"
              variant="secundario"
            />
          </div>
          <div className="alinear">
            <Input placeholder="Celular" type="text" required={true} variant="secundario" />
            <Input placeholder="Correo" type="email" required={true} variant="secundario" />
          </div>
          <div className="alinear">
            <Input placeholder="Contraseña" type="password" required={true} variant="secundario" />
            <Input
              placeholder="Confirmar contraseña"
              required={true}
              type="password"
              variant="secundario"
            />
          </div>
          <div>
            <Button
              placeholder="Iniciar sesión"
              variant="primario"
              onClick={handleClickRegistrarUsuario}
            ></Button>
          </div>
        </main>
      ) : (
        variant == 'admin' && (
          <main>
            <div>
              <Input placeholder="Correo" type="email" variant="primario" />
            </div>
            <div>
              <Input placeholder="Contraseña" type="password" variant="primario" />
            </div>
            <div>
              <Button
                placeholder="Iniciar sesión"
                variant="primario"
                onClick={handleClickIngresarAdministrador}
              ></Button>
            </div>
          </main>
        )
      )}
      {variant == 'login' && (
        <footer>
          <div className="noCuenta">
            <p>
              ¿No tienes cuenta?
              <span>
                {' '}
                <Link to={'/registro'}>Registrate aquí</Link>
              </span>
            </p>
          </div>
        </footer>
      )}
    </DivCartaLogin>
  );
};

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface CartaTheme {}

const cartaTheme: CartaTheme = {};

const CartaLogin = (props: CartaLoginProps) => (
  <ThemeProvider theme={cartaTheme}>
    <Cartahtml {...props} />
  </ThemeProvider>
);

export default CartaLogin;
