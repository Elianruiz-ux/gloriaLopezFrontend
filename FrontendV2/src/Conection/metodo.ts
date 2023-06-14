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

//Get empleados
// export async function getEmpleados() {
//   try {
//     const response = await fetch(`${API_URL}/authEmp/login`, {
//       method: 'GET',
//       headers: {
//         'Content-Type': 'application/json'
//       },
//       body: JSON.stringify({ username, password })
//     });

//     if (response.ok) {
//       const { token } = await response.json();
//       return token;
//     } else {
//       const error = await response.json();
//       throw new Error(error.message);
//     }
//   } catch (error) {
//     throw new Error('Error de red: ' + error);
//   }
// }

//Registrar
export async function sigup(
  nombre: string,
  id_tipo_documento: number,
  numero_documento: string,
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
        id_tipo_documento,
        numero_documento,
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
