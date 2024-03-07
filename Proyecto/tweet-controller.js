import { tweets } from "./tweet-model.js";
import { buildTweet } from "./tweet-view.js";

// CONTROLADOR

export function tweetListController (tweetList) {
  
  // 1 Pintar el boton
  const showTweetsButton = document.createElement('button')
  showTweetsButton.textContent = 'Mostrar tweets'
  tweetList.appendChild(showTweetsButton);

  // 2 Asignar evento al click del boton
  showTweetsButton.addEventListener('click', () => {

    // 3 Mostar los tweets
    tweets.forEach(tweet => {
      const tweetItem = document.createElement('div');
    
      tweetItem.innerHTML = buildTweet(tweet);
    
      tweetList.appendChild(tweetItem)
    })
    
  })
};