import { ThemeProvider } from 'styled-components'; // Define the interface for the Input component
import { Dropdowncss } from './Dropdown.styled';
import { useEffect, useState } from 'react';
import {
  getEmpleados,
  getEstado,
  getProveedor,
  getRol,
  getTipoDocumento,
  getTipoEmpleado,
  getTipoProducto
} from '../../../Conection/metodosGet';
import {
  Empleado,
  Estado,
  Proveedores,
  Rol,
  TipoDocumento,
  TipoEmpleado,
  TipoProducto
} from '../../../data/Types';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface DropdownProps {
  placeholder: string;
  variant: 'primario' | 'secundario';
  varianteDos:
    | 'tipoDocumento'
    | 'empleado'
    | 'tipoProducto'
    | 'proveedor'
    | 'estado'
    | 'tipoEmpleado'
    | 'tipoRol';
  required?: boolean;
  onChange: (selectedValue: any) => void;
}

// Use the Single Responsibility Principle (SRP)
const Dropdownhtml = ({ placeholder, variant, required, varianteDos, onChange }: DropdownProps) => {
  const [tipoDocumento, setTipoDocumento] = useState<TipoDocumento[]>([]);
  const [tipoEmpleado, setTipoEmpleado] = useState<TipoEmpleado[]>([]);
  const [empleado, setEmpleado] = useState<Empleado[]>([]);
  const [proveedor, setProveedor] = useState<Proveedores[]>([]);
  const [tipoProducto, setTipoProducto] = useState<TipoProducto[]>([]);
  const [rol, setRol] = useState<Rol[]>([]);
  const [estado, setEstado] = useState<Estado[]>([]);

  const handleDropdownChange = (event: any) => {
    const selectedValue = event.target.value;
    onChange(selectedValue);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const dataTipoDocumento = await getTipoDocumento();
        const dataTipoEmpleado = await getTipoEmpleado();
        const dataEmpleado = await getEmpleados();
        const dataProveedores = await getProveedor();
        const dataProducto = await getTipoProducto();
        const dataRol = await getRol();
        const dataEstado = await getEstado();
        setTipoDocumento(dataTipoDocumento);
        setTipoEmpleado(dataTipoEmpleado);
        setEmpleado(dataEmpleado);
        setProveedor(dataProveedores);
        setTipoProducto(dataProducto);
        setRol(dataRol);
        setEstado(dataEstado);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);
  return (
    <Dropdowncss variant={variant}>
      <label className="text">{placeholder}</label>
      <select
        className="dropdown"
        autoComplete="off"
        required={required}
        onChange={handleDropdownChange}
      >
        <option defaultValue={''}></option>

        {varianteDos == 'tipoDocumento' &&
          (tipoDocumento && tipoDocumento.length > 0
            ? tipoDocumento.map((tipoDocumento, index) => (
                <>
                  <option key={index} value={tipoDocumento.ID_TIPO_DOCUMENTO}>
                    {tipoDocumento.TIPO_DOCUMENTO}
                  </option>
                </>
              ))
            : null)}
        {varianteDos == 'tipoEmpleado' &&
          (tipoEmpleado && tipoEmpleado.length > 0
            ? tipoEmpleado.map((tipoEmplea, index) => (
                <>
                  <option key={index} value={tipoEmplea.ID_TIPO_EMPLEADO}>
                    {tipoEmplea.TIPO_EMPLEADO}
                  </option>
                </>
              ))
            : null)}

        {varianteDos == 'empleado' &&
          (empleado && empleado.length > 0
            ? empleado.map((emp, index) => (
                <>
                  <option key={index} value={emp.ID_EMPLEADO}>
                    {emp.NOMBRE}
                  </option>
                </>
              ))
            : null)}

        {varianteDos == 'proveedor' &&
          (proveedor && proveedor.length > 0
            ? proveedor.map((prove, index) => (
                <>
                  <option key={index} value={prove.ID_PROVEEDOR}>
                    {prove.NOMBRE}
                  </option>
                </>
              ))
            : null)}
        {varianteDos == 'estado' &&
          (estado && estado.length > 0
            ? estado.map((est, index) => (
                <>
                  <option key={index} value={est.ID_ESTADO_CITA}>
                    {est.ESTADO_CITA}
                  </option>
                </>
              ))
            : null)}
        {varianteDos == 'tipoProducto' &&
          (tipoProducto && tipoProducto.length > 0
            ? tipoProducto.map((tipoprod, index) => (
                <>
                  <option key={index} value={tipoprod.ID_TIPO_PRODUCTO}>
                    {tipoprod.TIPO_PRODUCTO}
                  </option>
                </>
              ))
            : null)}
        {varianteDos == 'tipoRol' &&
          (rol && rol.length > 0
            ? rol.map((r, index) => (
                <>
                  <option key={index} value={r.ID_ROL}>
                    {r.ROL}
                  </option>
                </>
              ))
            : null)}
      </select>
    </Dropdowncss>
  );
};

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface DropdownTheme {
  color_texto: string;
  color_fondo: string;
  color_borde: string;
  ancho: string;
}

const dropdownPrimario: DropdownTheme = {
  color_texto: `var(--txt-color-negro)`,
  color_fondo: `var(--bg-color-blanco)`,
  color_borde: `var(--color-borde)`,
  ancho: `100%`
};

const dropdownSecundario: DropdownTheme = {
  color_texto: `var(--txt-color-negro)`,
  color_fondo: `var(--bg-color-blanco)`,
  color_borde: `var(--color-borde)`,
  ancho: `50%`
};

const Dropdown = (props: DropdownProps) => (
  <ThemeProvider
    theme={
      props.variant == 'primario'
        ? dropdownPrimario
        : props.variant == 'secundario' && dropdownSecundario
    }
  >
    <Dropdownhtml {...props} />
  </ThemeProvider>
);

export default Dropdown;
