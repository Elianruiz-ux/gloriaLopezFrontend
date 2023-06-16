import { API_URL } from './url';

//Get productos
export async function getProductos() {
  try {
    const response = await fetch(`${API_URL}/productos/all`, {
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
    const response = await fetch(`${API_URL}/proveedor/all`, {
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

//Get servicios
export async function getServicios() {
  try {
    const response = await fetch(`${API_URL}/servicio/all`, {
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

//Get empleados
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

//Get servicios
export async function getTipoDocumento() {
  try {
    const response = await fetch(`${API_URL}/tipoDoc/all`, {
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

export async function getTipoEmpleado() {
  try {
    const response = await fetch(`${API_URL}/tipoEmpleado/all`, {
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

export async function getTipoProducto() {
  try {
    const response = await fetch(`${API_URL}/tipoProducto/all`, {
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

export async function getRol() {
  try {
    const response = await fetch(`${API_URL}/rol/all`, {
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

export async function getEstado() {
  try {
    const response = await fetch(`${API_URL}/estadoCita/all`, {
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
