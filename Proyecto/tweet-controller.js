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
  try {
    const tweets = await getTweets();
    if (tweets.length === 0) {
      renderEmptyTweetsList(tweetList);
    } else {
      renderTweets(tweets, tweetList);
    }
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

function renderEmptyTweetsList() {
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