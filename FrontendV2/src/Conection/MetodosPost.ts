import { API_URL } from './url';

//Login admin
export async function login(username: string, password: string) {
  try {
    const response = await fetch(`${API_URL}/authEmp/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ username, password })
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

//Login usuario
export async function loginUser(username: string, password: string) {
  try {
    const response = await fetch(`${API_URL}/authUsu/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ username, password })
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

//Registrar usuario
export async function sigup(
  nombre: string,
  idTipoDocumento: number,
  numeroDocumento: string,
  celular: string,
  correo: string,
  contrasena: string
) {
  try {
    const response = await fetch(`${API_URL}/authUsu/singUp`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        nombre,
        idTipoDocumento,
        numeroDocumento,
        celular,
        correo,
        contrasena
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

//Registrar serivicios
export async function postRegistrarServicio(nombre: string, valor: string) {
  try {
    const response = await fetch(`${API_URL}/servicio`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
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

//Registrar proveedor
export async function postRegistrarProveedores(
  nombre: string,
  correo: string,
  direccion: string,
  idTipoDocumento: number,
  numeroDocumento: string
) {
  try {
    const response = await fetch(`${API_URL}/proveedor`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
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

//Registrar producto
export async function postRegistrarProducto(
  nombreProducto: string,
  cantidad: number,
  idTipoProducto: string
) {
  try {
    const response = await fetch(`${API_URL}/productos`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        nombreProducto,
        cantidad,
        idTipoProducto
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

//Enviar correo
export async function sendEmail(correo: string) {
  try {
    const response = await fetch(`${API_URL}/authEmp/recoverPassword`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        correo
      })
    });

    if (response.ok) {
      console.log('Enviado');
    } else {
      const error = await response.json();
      throw new Error(error.message);
    }
  } catch (error) {
    throw new Error('Error de red: ' + error);
  }
}
