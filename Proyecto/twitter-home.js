// Este va a ser el controlador de todas las pantallas en el DOM, asi si quiero mostrar esto en otra pantalla simplemente importamos esto

import { notificationController } from "./notification/notification-controller.js";
import { tweetListController } from "./tweet-list/tweet-controller.js";

const notificationList = document.querySelector('.notification-list');
const tweetList = document.querySelector('.tweet-list');

// Aqui vamos a escuchar al evento, lo hacemos aqui en twitter home para poder unir los dos controladores, se hace antes del resto para que primero lea este codigo

const {showNotification} = notificationController(notificationList);

tweetList.addEventListener('error-loading-tweets', (event) => { // Creamos el escuchador, ponemos el nombre del evento que queremos manejar "error-loading-tweets" y creamos la funcion que recibe como parametro el nombre de ese evento "event"
    showNotification(event.detail.message, event.detail.type) // Mensaje y type
    event.stopPropagation(); // Para que no siga subiendo y no llegue al HTML. No noseinteresa que siga subiendo en el arbol DOM
})

tweetListController(tweetList);

