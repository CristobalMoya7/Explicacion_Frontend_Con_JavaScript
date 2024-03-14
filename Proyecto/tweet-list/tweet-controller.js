import { getTweets } from "./tweet-model.js";
import { buildTweet, buildEmptyTweetList } from "./tweet-view.js";

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
  const spinner = tweetList.querySelector('.lds-ring') // Quitamos la clase Hidden del css spinner
  try {
    spinner.classList.toggle('hidden'); // Quitamos la clase Hidden del css spinner
    const tweets = await getTweets();
    if (tweets.length === 0) {
      renderEmptyTweetsList(tweetList);
    } else {
      renderTweets(tweets, tweetList);
    }
  } catch (errorMessage) {
    dispatchErrorEvent(errorMessage, tweetList) // Usamos la funcion de error
  } finally{ // Finally es un anexo para try catch. Esto se va a ejecutar si o si, a si si hay error o no quitaremos la ruleta de carga de nuevo
    spinner.classList.toggle('hidden'); // Añadimos de nuevo la clase Hidden del css spinner
  }
}

function dispatchErrorEvent(errorMessage, tweetList) {
  const event = new CustomEvent('error-loading-tweets', { // Creamos evento de error
    detail: {
      message: errorMessage,
      type: 'error'  // Para que se pinte de rojo como hemos puesto en notification_controller
    }
  });
  tweetList.dispatchEvent(event);
}

function renderTweets(tweets, tweetList) {
  tweets.forEach(tweet => {
    const tweetItem = document.createElement('div');
    tweetItem.innerHTML = buildTweet(tweet);
    tweetList.appendChild(tweetItem)
  })
}

function renderEmptyTweetsList(tweetList) {
  tweetList.innerHTML = buildEmptyTweetList()
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