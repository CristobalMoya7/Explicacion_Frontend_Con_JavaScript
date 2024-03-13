// Este va a ser el controlador de todas las pantallas en el DOM, asi si quiero mostrar esto en otra pantalla simplemente importamos esto

import { notificationController } from "./notification/notification-controller.js";
import { tweetListController } from "./tweet-list/tweet-controller.js";

const notificationList = document.querySelector('.notification-list');
const tweetList = document.querySelector('.tweet-list');

notificationController(notificationList);
tweetListController(tweetList);