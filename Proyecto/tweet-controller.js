import { getTweets } from "./tweet-model.js";
import { buildTweet } from "./tweet-view.js";

// CONTROLADOR

export function tweetListController (tweetList) {
  
  // 1 Pintar el boton
  const showTweetsButton = document.createElement('button')
  showTweetsButton.textContent = 'Mostrar tweets'
  tweetList.appendChild(showTweetsButton);

  // 2 Asignar evento al click del boton
  showTweetsButton.addEventListener('click', async () => {

    // 3 Mostar los tweets

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

    // Siempre que hay un await tiene que haber un async, esto se pone SIEMPRE en la funcion donde se esta ejecutando el await. Ponemos en async arriba

    // Try Catch, si lo que escribo dentro del try va mal o tiene un error en tiempo de ejecucion, voy a parar la ejecucion e inmediatamente iremos al catch
    try {
      const tweets = await getTweets(); // Aqui le decimos al codigo que no ejecute la siguiente linea hasta que no se cumpla esta promesay guarda el resultado en la variable tweets en este caso
      tweets.forEach(tweet => {
        const tweetItem = document.createElement('div');
      
        tweetItem.innerHTML = buildTweet(tweet);
      
        tweetList.appendChild(tweetItem)
      })
      
    } catch (errorMessage) {
      alert(errorMessage)
    }
  })
};