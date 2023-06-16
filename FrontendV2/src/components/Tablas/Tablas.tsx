import { ThemeProvider } from 'styled-components'; // Define the interface for the Input component
import { DivTablas } from './Tablas.styled';
import { getEmpleados, getProveedor, getServicios, getProductos } from '../../Conection/metodosGet';
import { useEffect, useState } from 'react';
import { Empleado, Proveedores, Servicio, Producto } from '../../data/Types';
import { BsPencilSquare } from 'react-icons/bs';
import { Link } from 'react-router-dom';
// eslint-disable-next-line @typescript-eslint/no-empty-interface

interface TablasProps {
  variant: 'citas' | 'productos' | 'proveedores' | 'servicios' | 'empleados';
  onClick: () => void;
}

// Use the Single Responsibility Principle (SRP)
const Tablashtml = ({ variant, onClick }: TablasProps) => {
  const [empleados, setEmpleados] = useState<Empleado[]>([]);
  const [proveedores, setProveedores] = useState<Proveedores[]>([]);
  const [servicios, setServicios] = useState<Servicio[]>([]);
  const [productos, setProducto] = useState<Producto[]>([]);

  //Empleados
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getEmpleados();
        setEmpleados(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  //Proveedores
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getProveedor();
        setProveedores(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  //Servicios
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getServicios();
        setServicios(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  //Producto
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getProductos();
        setProducto(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);
  return (
    <DivTablas variant={variant}>
      <div>
        <table>
          <thead>
            {variant == 'citas' && (
              <tr>
                <th>id</th>
                <th>fecha inicio</th>
                <th>fecha fin</th>
                <th>servicio</th>
                <th>usuario</th>
                <th>empleado</th>
                <th>estado</th>
                <th>editar</th>
                <th>eliminar</th>
              </tr>
            )}
            {variant == 'productos' && (
              <tr>
                <th>id</th>
                <th>nombre</th>
                <th>cantidad</th>
                <th>tipo producto</th>
                <th>proveedor</th>
                <th>editar</th>
                {/* <th>eliminar</th> */}
              </tr>
            )}
            {variant == 'proveedores' && (
              <tr>
                <th>id</th>
                <th>nombre</th>
                <th>correo</th>
                <th>dirección</th>
                <th>tipo documento</th>
                <th>número documento</th>
                {/* <th>estado</th> */}
                <th>editar</th>
              </tr>
            )}
            {variant == 'servicios' && (
              <tr>
                <th>id</th>
                <th>nombre</th>
                <th>valor</th>
                {/* <th>estado</th> */}
                <th>editar</th>
              </tr>
            )}
            {variant == 'empleados' && (
              <tr>
                <th>id</th>
                <th>nombre</th>
                <th>fecha nacimiento</th>
                <th>fecha ingreso</th>
                <th>dirección</th>
                <th>tipo documento</th>
                <th>número documento</th>
                <th>correo</th>
                <th>celular</th>
                <th>tipo empleado</th>
                {/* <th>estado</th> */}
                <th>editar</th>
              </tr>
            )}
          </thead>
          <tbody>
            {variant == 'citas' && (
              <tr>
                <td>dd</td>
                <td>dd</td>
                <td>dd</td>
                <td>dd</td>
                <td>dd</td>
                <td>dd</td>
                <td>dd</td>
                <td>dd</td>
                <td>
                  <button className="btnEditar">
                    <BsPencilSquare />
                  </button>
                </td>
              </tr>
            )}
            {variant == 'productos' &&
              (productos && productos.length > 0
                ? productos.map((producto, index) => (
                    <tr key={index}>
                      <td>{index}</td>
                      <td>{producto.Nombre_producto}</td>
                      <td>{producto.cantidad}</td>
                      <td>{producto.TIPO_PRODUCTO}</td>
                      <td>{producto.NOMBRE}</td>
                      <td>
                        <button className="btnEditar">
                          <BsPencilSquare />
                        </button>
                      </td>
                    </tr>
                  ))
                : null)}
            {variant == 'proveedores' &&
              (proveedores && proveedores.length > 0
                ? proveedores.map((proveedor, index) => (
                    <tr key={index}>
                      <td>{index}</td>
                      <td>{proveedor.NOMBRE}</td>
                      <td>{proveedor.CORREO}</td>
                      <td>{proveedor.DIRECCION}</td>
                      <td>{proveedor.TIPO_DOCUMENTO}</td>
                      <td>{proveedor.NUMERO_DOCUMENTO}</td>
                      {/* <td>{proveedor.CORREO}</td> */}
                      <td>
                        <button className="btnEditar">
                          <BsPencilSquare />
                        </button>
                      </td>
                    </tr>
                  ))
                : null)}
            {variant == 'servicios' &&
              (servicios && servicios.length > 0
                ? servicios.map((servicio, index) => (
                    <tr key={index}>
                      <td>{index}</td>
                      <td>{servicio.NOMBRE}</td>
                      <td>{servicio.VALOR}</td>
                      {/* <td>dd</td> */}
                      <td>
                        <Link
                          to={`/servicio/${servicio.ID_SERVICIO}`}
                          onClick={onClick}
                          className="btnEditar"
                        >
                          <BsPencilSquare />
                        </Link>
                        {/* <button className="btnEditar">
                          <BsPencilSquare />
                        </button> */}
                      </td>
                    </tr>
                  ))
                : null)}
            {variant == 'empleados' &&
              (empleados && empleados.length > 0
                ? empleados.map((empleado, index) => (
                    <tr key={index}>
                      <td>{index}</td>
                      <td>{empleado.NOMBRE}</td>
                      <td>{empleado.FECHA_NACIMIENTO.split('T')[0]}</td>
                      <td>{empleado.FECHA_INGRESO.split('T')[0]}</td>
                      <td>{empleado.DIRECCION}</td>
                      <td>{empleado.TIPO_DOCUMENTO}</td>
                      <td>{empleado.NUMERO_DOCUMENTO}</td>
                      <td>{empleado.CORREO}</td>
                      <td>{empleado.CELULAR}</td>
                      <td>{empleado.TIPO_EMPLEADO}</td>
                      {/* <td>estado</td> */}
                      <td>
                        <Link
                          to={`/empleado/${empleado.ID_EMPLEADO}`}
                          onClick={onClick}
                          className="btnEditar"
                        >
                          <BsPencilSquare />
                        </Link>
                      </td>
                    </tr>
                  ))
                : null)}
          </tbody>
        </table>
      </div>
    </DivTablas>
  );
};

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface TablasTheme {}

const tablasTheme: TablasTheme = {};

const Tablas = (props: TablasProps) => (
  <ThemeProvider theme={tablasTheme}>
    <Tablashtml {...props} />
  </ThemeProvider>
);

export default Tablas;
