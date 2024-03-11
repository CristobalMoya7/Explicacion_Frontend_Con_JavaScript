Es un medio que nos ofrece JS para gestionar procesos asincronos.
Un proceso asincrono es aquel que no sabemos cuanto tiempo va a tomar en terminarse.

EJEMPLO:

El consumo de un API. No sabemos cuanto tiempo nos va a tardar en cargar todo.

Por ejemplo nosotros le pedimos a un API los tweets, nosotros sabemos que eso es una funcion asincrona ya que no sabemos
lo que va a tardar en darnos esos tweets. Asi que ya sabemos que cuando esa promesa se resuelva podemos pintar los datos.

En una promesa hay 2 involucrados:

- Productor: Es quien gestiona un proceso asincrono mediante una promesa y quien decide si la operacion concluye bien o no.

- Consumidor: Es quien reacciona ante el cambio de esta de la promesa

Hay 3 posibles estados en una promesa:

- Pending (Pendiente)
- Fulfilled (concluida)
- Rejected (Error o rechazada)

Inicalmente es pending, cuando el procesa asincrono va bien pasa a Fulfilled a traves del metodo RESOLVE, si en cambio el proceso
asincrono va mal, la primesa a traves del metido REJECT pasa a Rejected. Esto es responsabilidad del PRODUCTOR!! El se encarga
de ejecutar uno u otro para que el CONSUMIDOR sea capaz de reaccionar ante el cambio de la promesa.
Ejemplo muy bueno de patatas en el PDF.

Para hacer peticiones HTTP con promesas usamos fetch