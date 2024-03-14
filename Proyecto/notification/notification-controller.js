import { buildNotification } from "./notification-view.js";


export function notificationController(notificationContainer) {

    function showNotification(message, type = 'success') { // Añadimos type para poder decir el color del error, una exigencia, le ponemos success como parametro por defecto por si es vacio
        const notification = document.createElement('div');
        notification.classList.add('notification', [type]) // Le añadimos una clase al div llamada notification creada en style.css de notification.
        notification.innerHTML = buildNotification(message);
        notificationContainer.appendChild(notification)
        
        // Eliminar el mensage pasados x segundos

        setTimeout(() => {
            notification.remove()
        }, 4000);
    }    

    return {
        showNotification
    }
}


