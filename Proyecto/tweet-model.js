// MODELO
/* export const tweets = [{ // Lo exportamos
    handler: '@usuario1',
    date: new Date().toISOString(),
    message: 'Eligendi fugiat veniam a neque omnis doloribus sequi porro expedita ullam excepturi.',
    likes: 40,
  },
  {
    handler: '@usuario2',
    date: new Date().toISOString(),
    message: 'Laborum ad animi officia dolore nisi necessitatibus a porro! Odit!',
    likes: 3,
  },
  {
    handler: '@usuario3',
    date: new Date().toISOString(),
    message: 'Ayer estuve en le parque y me lo pasé genial',
    likes: 34,
  },
  {
    handler: '@usuario4',
    date: new Date().toISOString(),
    message: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    likes: 400,
  }];
  */ 

// Esta funciones muy IMPORTANTE ya que en el API los nombres no son igual que los de nuestra vista. Para no cambiarlos en la vista creamos esta funcion.
function parseTweets(data) {
  return data.map(data => ({
    handler: data.author,
    date: new Date().toISOString(),
    message: data.message,
    likes: data.likes.length, // Ponemos el lenght por que nosotros esperamos un numero y el API nos devuelve un array de string
  }))
}

export async function getTweets() {
  const url = 'http://localhost:8000/api/tweets'; // Con esto atacamos a sparres para que el gaurde los datos. Sepo /api/nombreRecurso(tweets, users o lo que sea)

  /* 
  return new Promise(function(resolve, reject) {
    fetch(url)
      .then(response => response.json())
      .then(data => {
        const tweets = parseTweets(data)
        resolve(tweets); // Aqui damos por termianda la promesa y ponemos el resolve para mandarlos al controlador
      }) 
      .catch(() => reject('Error al obtener los tweets'))
  })
  */

  let tweets = [] // Ponemos la variable let por que hay que modificarla y const no se puede. Esa variable la hacemos para poner el return a nivel dela funcion

  try {
    const response = await fetch(url);
    const data = await response.json();
    tweets = parseTweets(data);
  } catch (error) {
    // error
    throw new Error('Error al obtener los tweets')
  }

  return tweets;

}

