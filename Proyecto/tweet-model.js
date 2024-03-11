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

export function getTweets() {
  const url = 'https://fake-tweets-api-kc.vercel.app/posts';

  return new Promise(function(resolve, reject) {
    fetch(url)
      .then(response => response.json())
      .then(data => {
        const tweets = parseTweets(data)
        resolve(tweets); // Aqui damos por termianda la promesa y ponemos el resolve para mandarlos al controlador
      }) 
      .catch(() => reject('Error al obtener los tweets'))
  })
}

