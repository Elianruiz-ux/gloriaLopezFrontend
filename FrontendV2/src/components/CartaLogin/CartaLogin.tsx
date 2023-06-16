import { ThemeProvider } from 'styled-components'; // Define the interface for the Input component
import { DivCartaLogin } from './CartaLogin.styled';
import Input from '../ui/Input/Input';
import Button from '../ui/Button/Button';
import { Link } from 'react-router-dom';
import Dropdown from '../ui/Dropdown/Dropdown';
import { toast } from 'react-toastify';
import { useState } from 'react';
import { login, loginUser, sigup } from '../../Conection/MetodosPost';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface CartaLoginProps {
  variant: 'login' | 'registro' | 'admin';
  onClick?: () => void;
}

// Use the Single Responsibility Principle (SRP)
const Cartahtml = ({ variant, onClick }: CartaLoginProps) => {
  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');
  const [confirmarPassword, setConfirmarPassword] = useState('');
  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');
  //const [tipoDocumento, setTipoDocumento] = useState('');
  const [numeroDocumento, setNumeroDocumento] = useState('');
  const [celular, setCelular] = useState('');

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const isValid = emailRegex.test(user);

  const handleClickIngresarUsuario = async () => {
    if (user == '' || password == '') {
      toast.error('Correo o contraseña incorrectas');
    } else if (!isValid) {
      toast.error('Correo o contraseña incorrectas');
    } else {
      try {
        const token = await loginUser(user, password);
        toast.success('¡Inicio exitoso!');
        window.location.href = '/#/homeUsuario';
      } catch (error) {
        toast.error('Correo o contraseña incorrectas');
      }
    }
  };
  const handleClickRegistrarUsuario = async () => {
    if (
      nombre == '' ||
      apellido == '' ||
      numeroDocumento == '' ||
      celular == '' ||
      user == '' ||
      password == '' ||
      confirmarPassword == ''
    ) {
      toast.error('Por favor complete los campos');
    } else if (!(numeroDocumento.length >= 8)) {
      toast.error('Número de documento no es valido');
    } else if (!(celular.length >= 10)) {
      toast.error('Número de celular no es valido');
    } else if (!isValid) {
      toast.error('Correo no valido');
    } else if (password !== confirmarPassword) {
      toast.error('Las contraseñas no coinciden');
    } else {
      try {
        toast.success('¡Registro exitoso!');
        await sigup(nombre.concat(apellido), 1, numeroDocumento, celular, user, password);
        window.location.href = '/#/login';
      } catch (error) {
        toast.error('Correo existente');
      }
    }
  };
  const handleClickIngresarAdministrador = async () => {
    if (user == '' || password == '') {
      toast.error('Correo o contraseña incorrectas');
    } else if (!isValid) {
      toast.error('Correo o contraseña incorrectas');
    } else {
      try {
        const token = await login(user, password);
        toast.success('¡Inicio exitoso!');
        console.log('Inicio de sesión exitoso:', token);
        window.location.href = '/#/homeAdministrador';
      } catch (error) {
        toast.error('Correo o contraseña incorrectas');
      }
    }
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
            <Input
              onInputSearch={(user) => setUser(user)}
              placeholder="Correo"
              type="email"
              required={true}
              variant="primario"
              value={user}
            />
          </div>

          <div>
            <Input
              onInputSearch={(password) => setPassword(password)}
              placeholder="Contraseña"
              type="password"
              required={true}
              variant="primario"
              value={password}
            />
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
            <Input
              onInputSearch={(nombre) => setNombre(nombre)}
              value={nombre}
              placeholder="Nombre"
              type="text"
              required={true}
              variant="secundario"
            />
            <Input
              onInputSearch={(apellido) => setApellido(apellido)}
              value={apellido}
              placeholder="Apellido"
              type="text"
              required={true}
              variant="secundario"
            />
          </div>
          <div className="alinear">
            <Dropdown
              placeholder="Tipo de documento"
              required={true}
              variant="secundario"
              varianteDos="tipoDocumento"
            />
            <Input
              onInputSearch={(numeroDocumento) => setNumeroDocumento(numeroDocumento)}
              value={numeroDocumento}
              placeholder="Número de documento"
              required={true}
              type="text"
              variant="secundario"
            />
          </div>
          <div className="alinear">
            <Input
              onInputSearch={(celular) => setCelular(celular)}
              value={celular}
              placeholder="Celular"
              type="text"
              required={true}
              variant="secundario"
            />
            <Input
              onInputSearch={(user) => setUser(user)}
              value={user}
              placeholder="Correo"
              type="email"
              required={true}
              variant="secundario"
            />
          </div>
          <div className="alinear">
            <Input
              onInputSearch={(password) => setPassword(password)}
              value={password}
              placeholder="Contraseña"
              type="password"
              required={true}
              variant="secundario"
            />
            <Input
              onInputSearch={(confirmarPassword) => setConfirmarPassword(confirmarPassword)}
              value={confirmarPassword}
              placeholder="Confirmar contraseña"
              required={true}
              type="password"
              variant="secundario"
            />
          </div>
          <div>
            <Button
              placeholder="Registrar"
              variant="primario"
              onClick={handleClickRegistrarUsuario}
            ></Button>
          </div>
        </main>
      ) : (
        variant == 'admin' && (
          <main>
            <div>
              <Input
                onInputSearch={(user) => setUser(user)}
                placeholder="Correo"
                type="email"
                variant="primario"
                value={user}
              />
            </div>
            <div>
              <Input
                onInputSearch={(password) => setPassword(password)}
                placeholder="Contraseña"
                type="password"
                variant="primario"
                value={password}
              />
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
      {(variant == 'login' || variant == 'admin') && (
        <footer>
          <div className="noCuenta">
            <p>
              Recuperar contraseña
              <span>
                {' '}
                <button onClick={onClick}>Recuperar aquí</button>
              </span>
            </p>
          </div>
        </footer>
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
