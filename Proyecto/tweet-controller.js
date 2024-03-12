import { getTweets } from "./tweet-model.js";
import { buildTweet } from "./tweet-view.js";

// CONTROLADOR

export function tweetListController (tweetList) {
  
  // 1 Pintar el boton
  const showTweetsButton = document.createElement('button')
  showTweetsButton.textContent = 'Mostrar tweets'
  tweetList.appendChild(showTweetsButton);

  // 2 Asignar evento al click del boton
  showTweetsButton.addEventListener('click', () => handleShowTweetsButtonClicked(tweetList)) // Lo ponemos en una funcion para que se ejecute al hacer click
};

async function handleShowTweetsButtonClicked(tweetList) {
  try {
    const tweets = await getTweets();
    renderTweets(tweets, tweetList);
  } catch (errorMessage) {
    alert(errorMessage)
  }
}

function renderTweets(tweets, tweetList) {
  tweets.forEach(tweet => {
    const tweetItem = document.createElement('div');
    tweetItem.innerHTML = buildTweet(tweet);
    tweetList.appendChild(tweetItem)
  })
}

 /* 
    CODIGO CON .THEN Y .CATCH. PERO ES MEJOR HACERLO CON ASYNC AWAIT
    getTweets()
      .then((tweets) => {
        tweets.forEach(tweet => {
          const tweetItem = document.createElement('div');
        
          tweetItem.innerHTML = buildTweet(tweet);
        
          tweetList.appendChild(tweetItem)
        })
      })
      .catch((errorMessage) => {
        alert(errorMessage)
      })
      */