// Este va a ser el controlador de todas las pantallas.

import { tweetListController } from "./tweet-controller.js";

const tweetList = document.querySelector('.tweet-list');

tweetListController(tweetList);