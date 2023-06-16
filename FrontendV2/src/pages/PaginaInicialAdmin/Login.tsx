// api.js
const BASE_URL = 'http://localhost:3000';

export async function login(username:any, password:any) {
  try {
    const response = await fetch(`${BASE_URL}/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, password }),
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
