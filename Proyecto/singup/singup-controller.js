import { createUser } from "./singup-model.js";

export function singupController(singupForm) {

    singupForm.addEventListener('submit', async (event) => {
        event.preventDefault(); // El preventDefault es para evitar la validacion en el servidor, no se refrescan los datos
        let errors = []; // Este array solo se rellena si hay errores

        // Validaciones del formulario

        // Email con formato correcto
        const email = singupForm.querySelector('#email'); // Esto selecciona el email del DOM
        const emailRegExp = new RegExp(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/); // Esto dice el formato del email. algo@algo.2o3caracteres
        // Hace un test de email con la variable emailRegExp para ver si es correcto
        if (!emailRegExp.test(email.value)) { // Si no es validad
            errors.push('El email no tiene un formato correcto') // El array solo se rellena si hay errores
        }

        // Las dos password deben coincidir
        const password = singupForm.querySelector('#password');
        const passwordConfirm = singupForm.querySelector('#password-confirmation');
        if (password.value !== passwordConfirm.value) {
            errors.push('Las contraseñas no son iguales') // El array solo se rellena si hay errores
        }

        for (const error of errors) {
            alert(error) // Lanzamos el error
        }

        if (errors.length === 0) {
            // Si todo esta bien, creamos usuario
            // Usuario y contraseña a sparrest ( Nuestro backend). Peticion al endpoint
            // /auth/register EndPoint en formato POST
            // {userName: string; password: string}
            try {
                await createUser(email.value, password.value)
                alert('Creado correctamente')
                window.location.href = 'index.html'; // Redirigimos a la pagina principal
            } catch (error) {
                alert(error)
            }  
        }
    })
}