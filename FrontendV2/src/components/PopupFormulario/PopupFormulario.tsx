import { ThemeProvider } from 'styled-components'; // Define the interface for the Input component
import { DivPopUp } from './PopupFormulario.styled';
import { GrClose } from 'react-icons/gr';
import Button from '../ui/Button/Button';
import Input from '../ui/Input/Input';
import Dropdown from '../ui/Dropdown/Dropdown';
import { toast } from 'react-toastify';
import { useEffect, useState } from 'react';
import { sendEmail } from '../../Conection/MetodosPost';

import { Empleado, Producto, Proveedores, Servicio } from '../../data/Types';
import { getEmpleados, getProductos, getProveedor, getServicios } from '../../Conection/metodosGet';
import {
  postRegistrarServicio,
  postRegistrarProveedores,
  postRegistrarEmpleado,
  postRegistrarProducto
} from '../../Conection/MetodosPost';

import { putServicio, putProducto, putProveedor, putEmpleado } from '../../Conection/metodosPut';

import { useParams } from 'react-router-dom';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface PopUpFormualarioProps {
  variant: 'citas' | 'productos' | 'proveedores' | 'servicios' | 'empleados' | 'login';
  onClick: () => void;
  ids?: any;
}

// Use the Single Responsibility Principle (SRP)
const PopUpFormualariohtml = ({ variant, onClick, ids }: PopUpFormualarioProps) => {
  const today = new Date();
  const formattedDate = today.toISOString().substr(0, 10);

  const eighteenYearsAgo = new Date(today.getFullYear() - 18, today.getMonth(), today.getDate());
  const formattedEighteenYearsAgo = `${eighteenYearsAgo.getFullYear()}-${String(
    eighteenYearsAgo.getMonth() + 1
  ).padStart(2, '0')}-${String(eighteenYearsAgo.getDate()).padStart(2, '0')}`;

  const [nombre, setNombre] = useState('');
  const [fechaInicio, setFechaInicio] = useState(formattedDate);
  const [fechaFin, setFechaFin] = useState(formattedDate);
  const [fechaNacimiento, setFechaNacimiento] = useState(formattedDate);
  const [correo, setCorreo] = useState('');
  const [empleado, setEmpleado] = useState('');
  // const [estado, setEstado] = useState('');
  const [cantidad, setCantidad] = useState('');
  const [tipoProducto, setTipoProducto] = useState('');
  const [tipoDocumento, setTipoDocumento] = useState('');
  // const [nombreProvedor, setNombreProvedor] = useState('');
  const [numeroDocumento, setNumeroDocumento] = useState('');
  const [celular, setCelular] = useState('');
  const [direccion, setDireccion] = useState('');
  const [rol, setRol] = useState('');
  const [tipoEmpleado, setTipoEmpleado] = useState('');
  const [valor, setValor] = useState('');
  const [contrasena, setContrasena] = useState('');
  const [confirmarContrasena, setConfirmarContrasena] = useState('');

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const isValid = emailRegex.test(correo);

  const [empleados, setEmpleados] = useState<Empleado[]>([]);
  const [servicios, setServicios] = useState<Servicio[]>([]);
  const [productos, setProductos] = useState<Producto[]>([]);
  const [proveedores, setProveedores] = useState<Proveedores[]>([]);
  const [proveedor, setProveedor] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getEmpleados();
        const dataSer = await getServicios();
        const dataPro = await getProductos();
        const dataProve = await getProveedor();
        variant == 'empleados' && setEmpleados(data);
        variant == 'servicios' && setServicios(dataSer);
        variant == 'productos' && setProductos(dataPro);
        variant == 'proveedores' && setProveedores(dataProve);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  // console.log('empleados', empleados);
  // console.log('servicios', servicios);
  // console.log('productos', productos);
  // console.log('proveedores', proveedores);

  //Empleados
  useEffect(() => {
    if (empleados && empleados.length > 0) {
      const empl = empleados.find((emp) => emp.ID_EMPLEADO == ids);
      if (empl) {
        setNombre(empl.NOMBRE);
        setFechaNacimiento(empl.FECHA_NACIMIENTO.replaceAll('-', '/').split('T')[0]);
        setFechaInicio(empl.FECHA_INGRESO.replaceAll('-', '/').split('T')[0]);
        setTipoDocumento(empl.TIPO_DOCUMENTO);
        setDireccion(empl.DIRECCION);
        setNumeroDocumento(empl.NUMERO_DOCUMENTO);
        setCorreo(empl.CORREO);
        setCelular(empl.CELULAR);
        setRol(empl.ROL);
        setTipoEmpleado(empl.TIPO_EMPLEADO);
      } else {
        console.log('cargando');
      }
    }
  }, [empleados, ids]);

  // servicios
  useEffect(() => {
    if (servicios && servicios.length > 0) {
      const serv = servicios.find((ser) => ser.ID_SERVICIO == ids);
      if (serv) {
        setNombre(serv.NOMBRE);
        setValor(serv.VALOR);
      } else {
        console.log('cargando');
      }
    }
  }, [servicios, ids]);

  console.log('servicios', servicios);

  // proveedores
  useEffect(() => {
    if (proveedores && proveedores.length > 0) {
      const prov = proveedores.find((pro) => pro.ID_PROVEEDOR == ids);
      if (prov) {
        setNombre(prov.NOMBRE);
        setCorreo(prov.CORREO);
        setDireccion(prov.DIRECCION);
        setTipoDocumento(prov.TIPO_DOCUMENTO);
        setNumeroDocumento(prov.NUMERO_DOCUMENTO.toString());
      } else {
        console.log('cargando');
      }
    }
  }, [proveedores, ids]);

  //productos
  useEffect(() => {
    if (productos && productos.length > 0) {
      const produ = productos.find((prod) => prod.ID_PRODUCTO == ids);
      if (produ) {
        setNombre(produ.NOMBRE_PRODUCTO);
        setCantidad(produ.CANTIDAD.toString());
        setTipoProducto(produ.TIPO_PRODUCTO);
        setProveedor(produ.PROVEEDOR);
      } else {
        console.log('cargando');
      }
    }
  }, [productos, ids]);

  const handleClickRegistrarCita = () => {
    if (nombre == '' || fechaInicio == '' || fechaFin == '') {
      toast.error('Rellene todos los campos');
    } else {
      toast.success('¡Cita registrada!');
      onClick();
    }
  };

  const handleClickRegistrarProducto = async () => {
    if (nombre == '' || cantidad == '' || tipoProducto == '' || proveedor == '') {
      toast.error('Rellene todos los campo');
    } else if (parseFloat(cantidad) < 0) {
      toast.error('La cantidad no puede ser menor a cero');
    } else {
      await postRegistrarProducto(
        nombre,
        parseFloat(cantidad),
        parseFloat(tipoProducto),
        parseFloat(proveedor)
      );
      toast.success('¡Producto registrado!');
      onClick();
      window.location.href = '/#/productos';
    }
  };

  const handleClickActualizarProducto = async () => {
    if (nombre == '' || cantidad == '') {
      toast.error('Rellene todos los campo');
    } else if (parseFloat(cantidad) < 0) {
      toast.error('La cantidad no puede ser menor a cero');
    } else {
      await putProducto(ids, nombre, parseFloat(cantidad));
      toast.success('¡Producto actualizado!');
      onClick();
      window.location.href = '/#/productos';
    }
  };

  const handleClickRegistrarProveedor = async () => {
    if (
      nombre == '' ||
      correo == '' ||
      direccion == '' ||
      tipoDocumento == '' ||
      numeroDocumento == ''
    ) {
      toast.error('Rellene todos los campo');
    } else if (!isValid) {
      toast.error('El correo no es valido');
    } else if (!(numeroDocumento.length >= 8)) {
      toast.error('Número de documento no es valido');
    } else {
      try {
        await postRegistrarProveedores(
          nombre,
          correo,
          direccion,
          parseFloat(tipoDocumento),
          numeroDocumento
        );
        toast.success('¡Proveedor registrado!');
        onClick();

        window.location.href = '/#/proveedores';
      } catch (error) {
        toast.error('Hubo un error al registrar el proveedor');
      }
    }
  };

  const handleClickActualizarProveedor = async () => {
    if (
      nombre == '' ||
      correo == '' ||
      direccion == '' ||
      tipoDocumento == '' ||
      numeroDocumento == ''
    ) {
      toast.error('Rellene todos los campo');
    } else if (!isValid) {
      toast.error('El correo no es valido');
    } else if (!(numeroDocumento.length >= 8)) {
      toast.error('Número de documento no es valido');
    } else {
      try {
        await putProveedor(
          ids,
          nombre,
          correo,
          direccion,
          parseFloat(tipoDocumento),
          numeroDocumento
        );
        toast.success('¡Proveedor Actualizado!');
        onClick();

        window.location.href = '/#/proveedores';
      } catch (error) {
        toast.error('Hubo un error al registrar el proveedor');
      }
    }
  };

  const handleClickRegistrarServicio = async () => {
    if (nombre == '' || valor == '') {
      toast.error('Rellene todos los campo');
    } else if (!(parseFloat(valor) >= 1000)) {
      toast.error('El valor debe de ser mayor a mil pesos');
    } else {
      try {
        await postRegistrarServicio(nombre, valor);
        toast.success('¡Servicio registrado!');
        onClick();

        window.location.href = '/#/servicios';
      } catch (error) {
        toast.error('Hubo un error al registrar el servicio');
      }
    }
  };

  const handleClickActualizarServicio = async () => {
    if (nombre == '' || valor == '') {
      toast.error('Rellene todos los campo');
    } else if (!(parseFloat(valor) >= 1000)) {
      toast.error('El valor debe de ser mayor a mil pesos');
    } else {
      try {
        await putServicio(ids, nombre, valor);
        toast.success('¡Servicio actualizado!');
        onClick();

        window.location.href = '/#/servicios';
      } catch (error) {
        toast.error('Hubo un error al actualizar el servicio');
      }
    }
  };

  const handleClickRegistrarEmpleado = async () => {
    if (
      nombre == '' ||
      fechaNacimiento == '' ||
      fechaInicio == '' ||
      direccion == '' ||
      tipoDocumento == '' ||
      numeroDocumento == '' ||
      correo == '' ||
      celular == '' ||
      contrasena == '' ||
      confirmarContrasena == '' ||
      rol == '' ||
      tipoEmpleado == ''
    ) {
      toast.error('Rellene todos los campo');
    } else if (contrasena == confirmarContrasena && contrasena.length >= 8) {
      if (fechaNacimiento >= formattedEighteenYearsAgo) {
        toast.error('Debes ser mayor de 18');
      } else if (!isValid) {
        toast.error('El correo no es valido');
      } else if (!(numeroDocumento.length >= 8)) {
        toast.error('Número de documento no es valido');
      } else if (!(celular.length >= 10)) {
        toast.error('Número de celular no es valido');
      } else {
        try {
          await postRegistrarEmpleado(
            nombre,
            fechaNacimiento,
            fechaInicio,
            direccion,
            parseFloat(tipoDocumento),
            numeroDocumento,
            correo,
            celular,
            contrasena,
            parseFloat(rol),
            parseFloat(tipoEmpleado)
          );
          toast.success('Colaborador registrado!');
          onClick();

          window.location.href = '/#/empleado';
        } catch (error) {
          toast.error('Hubo un error al registrar el servicio');
        }
      }
    } else {
      toast.error('Contraseña no valida');
    }
  };

  const handleClickActualizarEmpleado = async () => {
    if (
      nombre == '' ||
      fechaNacimiento == '' ||
      fechaInicio == '' ||
      direccion == '' ||
      tipoDocumento == '' ||
      numeroDocumento == '' ||
      correo == '' ||
      celular == '' ||
      contrasena == '' ||
      confirmarContrasena == '' ||
      rol == '' ||
      tipoEmpleado == ''
    ) {
      toast.error('Rellene todos los campo');
    } else if (contrasena == confirmarContrasena && contrasena.length >= 8) {
      if (fechaNacimiento >= formattedEighteenYearsAgo) {
        toast.error('Debes ser mayor de 18');
      } else if (!isValid) {
        toast.error('El correo no es valido');
      } else if (!(numeroDocumento.length >= 8)) {
        toast.error('Número de documento no es valido');
      } else if (!(celular.length >= 10)) {
        toast.error('Número de celular no es valido');
      } else {
        try {
          await putEmpleado(
            ids,
            nombre,
            fechaNacimiento,
            fechaInicio,
            direccion,
            parseFloat(tipoDocumento),
            numeroDocumento,
            correo,
            celular,
            contrasena,
            parseFloat(rol),
            parseFloat(tipoEmpleado)
          );
          toast.success('Colaborador actualizado!');
          onClick();

          window.location.href = '/#/empleado';
        } catch (error) {
          toast.error('Hubo un error al registrar el servicio');
        }
      }
    } else {
      toast.error('Contraseña no valida');
    }
  };

  const handleClickEnviar = async () => {
    if (correo == '') {
      toast.error('Por favor ingrese un correo');
    } else {
      try {
        await sendEmail(correo);
        toast.success('¡Envio exitoso!');
        onClick();
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
              {/* <Dropdown placeholder="usuario" variant="primario" /> */}
              <Dropdown
                placeholder="empleado"
                onChange={(selectedValue) => setEmpleado(selectedValue)}
                variant="primario"
                varianteDos="empleado"
              />
              {/* <Dropdown placeholder="estado" variant="primario" /> */}
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
              <Dropdown
                placeholder="tipo de producto"
                variant="primario"
                varianteDos="tipoProducto"
                onChange={(selectedValue) => setTipoProducto(selectedValue)}
              />
              <Dropdown
                placeholder="proveedor"
                onChange={(selectedValue) => setProveedor(selectedValue)}
                variant="primario"
                varianteDos="proveedor"
              />
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
              <Input
                onInputSearch={(direccion) => setDireccion(direccion)}
                value={direccion}
                variant="primario"
                placeholder="direccion"
                type="email"
              />
              <Dropdown
                placeholder="tipo documento"
                variant="primario"
                varianteDos="tipoDocumento"
                onChange={(selectedValue) => setTipoDocumento(selectedValue)}
              />
              <Input
                onInputSearch={(numeroDocumento) => setNumeroDocumento(numeroDocumento)}
                value={numeroDocumento}
                variant="primario"
                placeholder="número documento"
                type="number"
              />
              {/* <Dropdown placeholder="estado" variant="primario" /> */}
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
              {/* <Dropdown placeholder="estado" variant="primario" varianteDos="estado" /> */}
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
                  type={ids ? 'text' : 'date'} //empleados ? 'text' :
                />
              </div>
              <div className="alinear">
                <Input
                  onInputSearch={(fechaInicio) => setFechaInicio(fechaInicio)}
                  value={fechaInicio}
                  variant="secundario"
                  placeholder="fecha ingreso"
                  type={ids ? 'text' : 'date'} //empleados ? 'text' :
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
                <Dropdown
                  placeholder="tipo documento"
                  variant="secundario"
                  varianteDos="tipoDocumento"
                  onChange={(selectedValue) => setTipoDocumento(selectedValue)}
                />
                <Input
                  onInputSearch={(numeroDocumento) => setNumeroDocumento(numeroDocumento)}
                  value={numeroDocumento}
                  variant="secundario"
                  placeholder="número documento"
                  type={'number'}
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
                  type="number"
                />
              </div>
              <div className="alinear">
                <Input
                  onInputSearch={(contrasena) => setContrasena(contrasena)}
                  value={contrasena}
                  variant="secundario"
                  placeholder="contraseña"
                  type="password"
                />
                <Input
                  onInputSearch={(confirmarContrasena) =>
                    setConfirmarContrasena(confirmarContrasena)
                  }
                  value={confirmarContrasena}
                  variant="secundario"
                  placeholder="confirmar contraseña"
                  type="password"
                />
              </div>
              <div className="alinear">
                <Dropdown
                  placeholder="tipo empleado"
                  variant="secundario"
                  varianteDos="tipoEmpleado"
                  onChange={(selectedValue) => setTipoEmpleado(selectedValue)}
                />
                <Dropdown
                  placeholder="tipo rol"
                  variant="secundario"
                  onChange={(selectedValue) => setRol(selectedValue)}
                  varianteDos="tipoRol"
                />
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
                placeholder={variant == 'login' ? 'enviar' : ids ? 'actualizar' : 'aceptar'}
                variant="primario"
                onClick={
                  ids && variant == 'servicios'
                    ? handleClickActualizarServicio
                    : ids && variant == 'proveedores'
                    ? handleClickActualizarProveedor
                    : ids && variant == 'productos'
                    ? handleClickActualizarProducto
                    : ids && variant == 'empleados'
                    ? handleClickActualizarEmpleado
                    : variant == 'citas'
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
