import { loginController } from "./login/login-controller.js";

// Lo metemos todo dentro del document para esperar a que el DOM este listo. Hasta que el DOM no este listo no se ejecutara la funcion de abajo. "DOMContentLoaded"

document.addEventListener('DOMContentLoaded', () => { 
  const loginForm = document.querySelector('#login');

  loginController(loginForm);
})
