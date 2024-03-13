
Lo ponemos todo como module en el html por que si no lo pasamos como module podemos tener archivos js dependientes, esto se ve en la primera clase.
Si por ejemplo queremos usar una funcion de un fichero js a otro podemos importarle en el fichero js que queremos usarla.
Pongo un ejemplo en la carpeta ejemplo de error

La palabra document nos devuelve el html principal. si por ejemplo ponemos document.head, nos devuelve el head, si ponemos document.body pues el bodyy asi cada vez a mas, por ejemplo, document.body.children[0]

Para crear un elemento ponemos
document.createElement('Lo que queremos que sea (div, button, img)')

Para acceder dentro del elemento usamos. Le añadimos nombre al boton
newButtom.textContent = 'Nuevo boton'

Seleccionamos donde queremos añadir el boton con una constante
const target = document.querySelector('div') Le decimos que nos devuelva el primer DIV

Como añado un nodo a un DOM
target.appendChild(Nombre del elemento, en este caso el boton)

Para eliminar algo lo seleccionamos con querySelector('button')
button.remove() Y se elimina.

# Modelo, vista, controlador

### Modelo.
Es la obtencion de los datos, por ejemplo en tweets seria:
```
const tweets = [{
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
```

### Controlador
Es el meadiador entre el modelo y la vista. El controlador es el unico que puede interactuar con el DOM, es decir, el unico que puede pintar en pantalla
```
const tweetList = document.querySelector('.tweet-list');

tweets.forEach(tweet => {
  const tweetItem = document.createElement('div');

  tweetItem.innerHTML = ;

  tweetList.appendChild(tweetItem)
})
```

### Vista
Construccion de los datos que vamos a mostrar
```
`
<span>${tweet.handler}</span>
<span>${tweet.date}</span>
<p>${tweet.message}</p>
<p>${tweet.likes} likes</p>
`
```

-----------------------------------

1  CONTROLADOR SE VA A ENCARGAR DE GESTIONAR UN UNICO DOCUMENTO DEL DOM, CADA PARTE DE MI WEB TIENE UN MODELO, VISTA, CONTROLADOR

2 NUNCA HAY QUE COMUNICAR 2 CONTROLADORES, EN EL CASO DE QUE QUERAMOS QUE SE COMUNIQUEN LO HACEMOS EN OTRO DIFERENTE, EN ESTE CASO EL TWITTERHOME,
ESTO SE LLAMA PATRON MEDIADOR