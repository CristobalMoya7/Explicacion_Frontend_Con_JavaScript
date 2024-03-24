export const loginUser = async (email, password) => {
  const url = 'http://localhost:8000/auth/login';

  const body = { // Transforma los nombres de sparrest a nuestro proyecto
    username: email,
    password: password,
  }

  let response;
  try {
    response = await fetch(url, {
      method: "POST",
      body: JSON.stringify(body),
      headers: {
        'Content-type': 'application/json'
      }
    });
    
    const data = await response.json() // En el login si nos interesa la respuesta por el SWT. Te devuelve el token

    if (!response.ok) { // Si no conozco el login doy error
      throw new Error(data.message);
    }
    if (response.ok) { // Si lo conozco le doy el token para hacer el login
      return data.accessToken;
    }
  } catch (error) {
    if (error.message) {
      throw error.message;
    } else {
      throw error;
    }
  }
}
