import { API_URL } from './url';

const id = String;
const nombre = String;
// const cantidadProducto = Number;
// const tipoProducto = String;
// const proveedor = String;
const correo = String;
const direccion = String;
const tipoDocumento = String;
const numeroDocumento = String;
const valorProducto = Number;
const estado = String;
const fechaNacimiento = String;
const fechaIngreso = String;
const celular = String;
const rol = String;
const tipoEmpleado = String;

//Get productos
export async function getEmpleados() {
  try {
    const response = await fetch(`${API_URL}/empleado/all`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    });

    if (response.ok) {
      const data = await response.json();
      return data;
    } else {
      throw new Error('Error al obtener los productos');
    }
  } catch (error) {
    console.error(error);
    throw new Error('Error en la conexión');
  }
}
export async function getEmpleado() {
  try {
    const response = await fetch(`${API_URL}/empleado/:id`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    });

    if (response.ok) {
      const data = await response.json();
      return data;
    } else {
      throw new Error('Error al obtener los productos');
    }
  } catch (error) {
    console.error(error);
    throw new Error('Error en la conexión');
  }
}

//Get proveedor
export async function getProveedor() {
  try {
    const response = await fetch(`${API_URL}/authEmp/login`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ id, nombre, correo, direccion, tipoDocumento, numeroDocumento })
    });

    if (response.ok) {
      const { token } = await response.json();
      return token;
    } else {
      const error = await response.json();
      throw new Error(error.message);
    }
  } catch (error) {
    throw new Error('Error de red: ' + error);
  }
}

//Get servicios
export async function getServicios() {
  try {
    const response = await fetch(`${API_URL}/authEmp/login`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ id, nombre, valorProducto, estado })
    });

    if (response.ok) {
      const { token } = await response.json();
      return token;
    } else {
      const error = await response.json();
      throw new Error(error.message);
    }
  } catch (error) {
    throw new Error('Error de red: ' + error);
  }
}

//Get empleados
export async function getProductos() {
  try {
    const response = await fetch(`${API_URL}/authEmp/login`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        id,
        nombre,
        fechaNacimiento,
        fechaIngreso,
        direccion,
        tipoDocumento,
        numeroDocumento,
        correo,
        celular,
        rol,
        tipoEmpleado
      })
    });

    if (response.ok) {
      const { token } = await response.json();
      return token;
    } else {
      const error = await response.json();
      throw new Error(error.message);
    }
  } catch (error) {
    throw new Error('Error de red: ' + error);
  }
}
