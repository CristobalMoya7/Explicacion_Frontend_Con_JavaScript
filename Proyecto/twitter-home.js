// Este va a ser el controlador de todas las pantallas en el DOM, asi si quiero mostrar esto en otra pantalla simplemente importamos esto

import { tweetListController } from "./tweet-controller.js";

const tweetList = document.querySelector('.tweet-list');

tweetListController(tweetList);