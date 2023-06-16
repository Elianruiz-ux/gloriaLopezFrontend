import { API_URL } from './url';
//Registrar empleado
export async function postRegistrarEmpleado(
  nombre: string,
  fechaNacimiento: string,
  fechaIngreso: string,
  direccion: string,
  idTipoDocumento: number,
  numeroDocumento: string,
  correo: string,
  celular: string,
  contrasena: string,
  idRol: number,
  idTipoEmpleado: number
) {
  try {
    const response = await fetch(`${API_URL}/authEmp/singUp`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        nombre,
        fechaNacimiento,
        fechaIngreso,
        direccion,
        idTipoDocumento,
        numeroDocumento,
        correo,
        celular,
        contrasena,
        idRol,
        idTipoEmpleado
      })
    });

    if (response.ok) {
      console.log('Creado');
    } else {
      const error = await response.json();
      throw new Error(error.message);
    }
  } catch (error) {
    throw new Error('Error de red: ' + error);
  }
}

export async function putServicio(id: number, nombre: string, valor: string) {
  try {
    const response = await fetch(`${API_URL}/servicio/update`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        id,
        nombre,
        valor
      })
    });

    if (response.ok) {
      console.log('Creado');
    } else {
      const error = await response.json();
      throw new Error(error.message);
    }
  } catch (error) {
    throw new Error('Error de red: ' + error);
  }
}

export async function putProducto(id: number, nombreProducto: string, cantidad: number) {
  try {
    const response = await fetch(`${API_URL}/productos/update`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        id,
        nombreProducto,
        cantidad
      })
    });

    if (response.ok) {
      console.log('Creado');
    } else {
      const error = await response.json();
      throw new Error(error.message);
    }
  } catch (error) {
    throw new Error('Error de red: ' + error);
  }
}

export async function putProveedor(
  id: number,
  nombre: string,
  correo: string,
  direccion: string,
  idTipoDocumento: number,
  numeroDocumento: string
) {
  try {
    const response = await fetch(`${API_URL}/proveedor/update`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        id,
        nombre,
        correo,
        direccion,
        idTipoDocumento,
        numeroDocumento
      })
    });

    if (response.ok) {
      console.log('Creado');
    } else {
      const error = await response.json();
      throw new Error(error.message);
    }
  } catch (error) {
    throw new Error('Error de red: ' + error);
  }
}

export async function putEmpleado(
  id: number,
  nombre: string,
  fechaNacimiento: string,
  fechaIngreso: string,
  direccion: string,
  idTipoDocumento: number,
  numeroDocumento: string,
  correo: string,
  celular: string,
  contrasena: string,
  idRol: number,
  idTipoEmpleado: number
) {
  try {
    const response = await fetch(`${API_URL}/authEmp/update`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        id,
        nombre,
        fechaNacimiento,
        fechaIngreso,
        direccion,
        idTipoDocumento,
        numeroDocumento,
        correo,
        celular,
        contrasena,
        idRol,
        idTipoEmpleado
      })
    });

    if (response.ok) {
      console.log('Creado');
    } else {
      const error = await response.json();
      throw new Error(error.message);
    }
  } catch (error) {
    throw new Error('Error de red: ' + error);
  }
}
