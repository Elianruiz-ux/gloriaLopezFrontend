import { ThemeProvider } from 'styled-components'; // Define the interface for the Input component
import { DivPopUp } from './PopupFormulario.styled';
import { GrClose } from 'react-icons/gr';
import Button from '../ui/Button/Button';
import Input from '../ui/Input/Input';
import Dropdown from '../ui/Dropdown/Dropdown';
import { toast } from 'react-toastify';
import { useState } from 'react';
import { sendEmail } from '../../Conection/metodo';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface PopUpFormualarioProps {
  variant: 'citas' | 'productos' | 'proveedores' | 'servicios' | 'empleados' | 'login';
  onClick: () => void;
}

// Use the Single Responsibility Principle (SRP)
const PopUpFormualariohtml = ({ variant, onClick }: PopUpFormualarioProps) => {
  const [nombre, setNombre] = useState('');
  const [fechaInicio, setFechaInicio] = useState('');
  const [fechaFin, setFechaFin] = useState('');
  const [fechaNacimiento, setFechaNacimiento] = useState('');
  const [correo, setCorreo] = useState('');
  const [empleado, setEmpleado] = useState('');
  const [estado, setEstado] = useState('');
  const [cantidad, setCantidad] = useState('');
  const [tipoProducto, setTipoProducto] = useState('');
  const [tipoDocumento, setTipoDocumento] = useState('');
  const [numeroDocumento, setNumeroDocumento] = useState('');
  const [celular, setCelular] = useState('');
  const [direccion, setDireccion] = useState('');
  const [rol, setRol] = useState('');
  const [tipoEmpleado, setTipoEmpleado] = useState('');
  const [valor, setValor] = useState('');

  const handleClickRegistrarCita = () => {
    if (nombre == '' || fechaInicio == '' || fechaFin == '') {
      toast.error('Rellene todos los campos');
    } else {
      toast.success('¡Cita registrada!');
      onClick;
    }
  };

  const handleClickRegistrarProducto = () => {
    if (nombre == '' || cantidad == '') {
      toast.error('Rellene todos los campo');
    } else {
      toast.success('¡Producto registrado!');
      onClick;
    }
  };

  const handleClickRegistrarProveedor = () => {
    if (nombre == '' || correo == '' || numeroDocumento == '') {
      toast.error('Rellene todos los campo');
    } else {
      toast.success('¡Proveedor registrado!');
      onClick;
    }
  };

  const handleClickRegistrarServicio = () => {
    if (nombre == '' || valor == '') {
      toast.error('Rellene todos los campo');
    } else {
      toast.success('¡Servicio registrado!');
      onClick;
    }
  };

  const handleClickRegistrarEmpleado = () => {
    if (
      nombre == '' ||
      fechaNacimiento == '' ||
      fechaInicio == '' ||
      direccion == '' ||
      numeroDocumento == '' ||
      correo == '' ||
      celular == ''
    ) {
      toast.error('Rellene todos los campo');
    } else {
      toast.success('¡Empleado registrado!');
      onClick;
    }
  };

  const handleClickEnviar = async () => {
    if (correo == '') {
      toast.error('Por favor ingrese un correo');
    } else {
      try {
        await sendEmail(correo);
        toast.success('¡Envio exitoso!');
        onClick;
      } catch (err) {
        toast.error('Hubo un problema al enviar el correo');
      }
    }
  };

  return (
    <DivPopUp variant={variant}>
      <div className="popupContainer">
        <div className="popupBackground" onClick={onClick}></div>
        <div className="popupContent">
          <div className="contenedorCerrarPopUp">
            <button onClick={onClick}>
              <GrClose></GrClose>
            </button>
          </div>
          <div className="contenedortitulo">
            {variant == 'citas' && <h2>citas</h2>}
            {variant == 'productos' && <h2>productos</h2>}
            {variant == 'proveedores' && <h2>proveedores</h2>}
            {variant == 'servicios' && <h2>servicios</h2>}
            {variant == 'empleados' && <h2>empleados</h2>}
            {variant == 'login' && <h2>recuperar contraseña</h2>}
          </div>
          {variant == 'citas' && (
            <div className="contenedorFormularios">
              <Input
                onInputSearch={(nombre) => setNombre(nombre)}
                value={nombre}
                variant="primario"
                placeholder="nombre"
                type="text"
              />
              <Input
                onInputSearch={(fechaInicio) => setFechaInicio(fechaInicio)}
                value={fechaInicio}
                variant="primario"
                placeholder="fecha inicio"
                type="date"
              />
              <Input
                onInputSearch={(fechaFin) => setFechaFin(fechaFin)}
                value={fechaFin}
                variant="primario"
                placeholder="fecha fin"
                type="date"
              />
              <Dropdown placeholder="usuario" variant="primario" />
              <Dropdown placeholder="empleado" variant="primario" />
              <Dropdown placeholder="estado" variant="primario" />
            </div>
          )}
          {variant == 'productos' && (
            <div className="contenedorFormularios">
              <Input
                onInputSearch={(nombre) => setNombre(nombre)}
                value={nombre}
                variant="primario"
                placeholder="nombre"
                type="text"
              />
              <Input
                onInputSearch={(cantidad) => setCantidad(cantidad)}
                value={cantidad}
                variant="primario"
                placeholder="cantidad"
                type="number"
              />
              <Dropdown placeholder="tipo de producto" variant="primario" />
              <Dropdown placeholder="proveedor" variant="primario" />
            </div>
          )}
          {variant == 'proveedores' && (
            <div className="contenedorFormularios">
              <Input
                onInputSearch={(nombre) => setNombre(nombre)}
                value={nombre}
                variant="primario"
                placeholder="nombre"
                type="text"
              />
              <Input
                onInputSearch={(correo) => setCorreo(correo)}
                value={correo}
                variant="primario"
                placeholder="correo"
                type="email"
              />
              <Dropdown placeholder="tipo documento" variant="primario" />
              <Input
                onInputSearch={(numeroDocumento) => setNumeroDocumento(numeroDocumento)}
                value={numeroDocumento}
                variant="primario"
                placeholder="número documento"
                type="number"
              />
              <Dropdown placeholder="estado" variant="primario" />
            </div>
          )}
          {variant == 'servicios' && (
            <div className="contenedorFormularios">
              <Input
                onInputSearch={(nombre) => setNombre(nombre)}
                value={nombre}
                variant="primario"
                placeholder="nombre"
                type="text"
              />
              <Input
                onInputSearch={(valor) => setValor(valor)}
                value={valor}
                variant="primario"
                placeholder="valor"
                type="number"
              />
              <Dropdown placeholder="estado" variant="primario" />
            </div>
          )}
          {variant == 'empleados' && (
            <div className="contenedorFormularios">
              <div className="alinear">
                <Input
                  onInputSearch={(nombre) => setNombre(nombre)}
                  value={nombre}
                  variant="secundario"
                  placeholder="nombre"
                  type="text"
                />
                <Input
                  onInputSearch={(fechaNacimiento) => setFechaNacimiento(fechaNacimiento)}
                  value={fechaNacimiento}
                  variant="secundario"
                  placeholder="fecha nacimiento"
                  type="date"
                />
              </div>
              <div className="alinear">
                <Input
                  onInputSearch={(fechaInicio) => setFechaInicio(fechaInicio)}
                  value={fechaInicio}
                  variant="secundario"
                  placeholder="fecha ingreso"
                  type="date"
                />
                <Input
                  onInputSearch={(direccion) => setDireccion(direccion)}
                  value={direccion}
                  variant="secundario"
                  placeholder="dirección"
                  type="text"
                />
              </div>
              <div className="alinear">
                <Dropdown placeholder="tipo documento" variant="secundario" />
                <Input
                  onInputSearch={(numeroDocumento) => setNumeroDocumento(numeroDocumento)}
                  value={numeroDocumento}
                  variant="secundario"
                  placeholder="número documento"
                  type="number"
                />
              </div>
              <div className="alinear">
                <Input
                  onInputSearch={(correo) => setCorreo(correo)}
                  value={correo}
                  variant="secundario"
                  placeholder="correo"
                  type="email"
                />
                <Input
                  onInputSearch={(celular) => setCelular(celular)}
                  value={celular}
                  variant="secundario"
                  placeholder="celular"
                  type="text"
                />
              </div>
              <div className="alinear">
                <Dropdown placeholder="rol" variant="secundario" />
                <Dropdown placeholder="tipo empleado" variant="secundario" />
                <Dropdown placeholder="estado" variant="secundario" />
              </div>
            </div>
          )}

          {variant == 'login' && (
            <div className="contenedorFormularios">
              <Input
                onInputSearch={(correo) => setCorreo(correo)}
                value={correo}
                variant="primario"
                placeholder="Correo"
                type="email"
              />
            </div>
          )}
          <div className="contenedorbtnAgregar">
            <div className="column">
              <Button
                placeholder={variant == 'login' ? 'enviar' : 'agregar'}
                variant="primario"
                onClick={
                  variant == 'citas'
                    ? handleClickRegistrarCita
                    : variant == 'productos'
                    ? handleClickRegistrarProducto
                    : variant == 'servicios'
                    ? handleClickRegistrarServicio
                    : variant == 'proveedores'
                    ? handleClickRegistrarProveedor
                    : variant == 'empleados'
                    ? handleClickRegistrarEmpleado
                    : handleClickEnviar
                }
              ></Button>
            </div>
            <div className="column">
              <Button placeholder={'cancelar'} variant="peligro" onClick={onClick}></Button>
            </div>
          </div>
        </div>
      </div>
    </DivPopUp>
  );
};

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface PopUpFormualarioTheme {
  width: string;
  heigth: string;
}

const citasTheme: PopUpFormualarioTheme = {
  width: '40%',
  heigth: '80%'
};
const productosTheme: PopUpFormualarioTheme = {
  width: '40%',
  heigth: '80%'
};
const proveedoresTheme: PopUpFormualarioTheme = {
  width: '40%',
  heigth: '80%'
};
const serviciosheme: PopUpFormualarioTheme = {
  width: '40%',
  heigth: '80%'
};
const empleadosTheme: PopUpFormualarioTheme = {
  width: '50%',
  heigth: '80%'
};

const loginTheme: PopUpFormualarioTheme = {
  width: '30%',
  heigth: '50%'
};

const PopUpFormulario = (props: PopUpFormualarioProps) => (
  <ThemeProvider
    theme={
      props.variant == 'citas'
        ? citasTheme
        : props.variant == 'productos'
        ? productosTheme
        : props.variant == 'servicios'
        ? serviciosheme
        : props.variant == 'proveedores'
        ? proveedoresTheme
        : props.variant == 'empleados'
        ? empleadosTheme
        : props.variant == 'login' && loginTheme
    }
  >
    <PopUpFormualariohtml {...props} />
  </ThemeProvider>
);

export default PopUpFormulario;
