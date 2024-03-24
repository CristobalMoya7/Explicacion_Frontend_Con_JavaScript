import { loaderController } from "../loader/loader-controller.js";
import { dispatchEvent } from "../utils/dispatchEvent.js";
import { createUser } from "./signup-model.js";

// Función controladora del formulario de registro
export function signupController(signupForm) {
  const spinner = signupForm.querySelector('#spinner');
  const { showLoader, hideLoader } = loaderController(spinner);

  // Agregar un evento de escucha al formulario de registro
  signupForm.addEventListener('submit', (event) => {
    event.preventDefault(); // evitamos validación en servidor
    
    // Manejar el envío del formulario de registro
    handleSignupFormSubmit(signupForm)
  })

  // Función para manejar el envío del formulario de registro
  function handleSignupFormSubmit(signupForm) {
    let errors = [];

    // Verificar si el correo electrónico es válido
    if (!isEmailValid(signupForm)) {
      errors.push('el email no tiene un formato correcto')      
    }
  
    // Verificar si las contraseñas son iguales
    if (!arePasswordsEqual(signupForm)) {
      errors.push('las contraseñas no son iguales')
    }

    // Mostrar errores del formulario
    showFormErrors(errors);
  
    // Si no hay errores, registrar al usuario
    if (errors.length === 0) {
      signupUser(signupForm);
    }
  }

  // Función para verificar si el correo electrónico es válido
  function isEmailValid(signupForm) {
    const email = signupForm.querySelector('#email');
    const emailRegExp = new RegExp(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/);

    return emailRegExp.test(email.value)
  }

  // Función para verificar si las contraseñas son iguales
  function arePasswordsEqual(signupForm) {
    const password = signupForm.querySelector('#password');
    const passwordConfirmation = signupForm.querySelector('#password-confirmation');
    
    return password.value === passwordConfirmation.value;
  }

  // Función para mostrar errores del formulario
  function showFormErrors(errors) {
    for (const error of errors) {
      dispatchEvent('signup-notification', {
        message: error,
        type: 'error'
      }, signupForm)
    }
  }

  // Función para registrar al usuario
  async function signupUser(signupForm) {
    const email = signupForm.querySelector('#email');
    const password = signupForm.querySelector('#password');

    try {
      showLoader()
      await createUser(email.value, password.value)
      dispatchEvent('signup-notification', {
        message: 'Te has registrado correctamente',
        type: 'success'
      }, signupForm)
      
      // Redirigir después de un breve retraso
      setTimeout(() => {
        window.location.href = 'index.html';
      }, 2000);
    } catch (error) {
      dispatchEvent('signup-notification', {
        message: error,
        type: 'error'
      }, signupForm)
    } finally {
      hideLoader()
    }
  }
}
