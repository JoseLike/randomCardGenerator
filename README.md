# Random Card Generator

Creando una landing page la cual es un generador de cartas de Poker aleatorias. Se muestran todas las combinaciones posibles y se resetean al recargar la pagina o al pulsar el boton de reset.

### Pre-requisitos 📋

1. Ordenador o dispositivo movil.
2. Programa donde copiar el repositorio. (Gitpod, VisualStudioCode, Pycharm ....)
3. Navegador web donde visualizar el resultado del codigo.


## Construido con 🛠️

* [HTML5] 
* [CSS3]  
* [Javascript](https://www.javascript.com/) - Usado para generar interactividad del DOM.
* [Bootstrap v5.1.3](https://getbootstrap.com/) - Libreria para el diseño del HTML.


## Deployment

Para lanzar este proyecto introduce en la consola el codigo de la ventana inferior, posteriormente si no se muestra el resultado escibre localhost en el buscador.

```bash
  $ npm run start
```



## Estructura y explicación del codigo ⚙️

* La estructura del ejercicio se basa en crear un generador de cartas de Poker aleatorio.
* En el HTML se crea una estructura basica de un div contenedor el cual sera la carta. Ese div se divide en 3. La parte superior e inferior seran el icono del palo. Y en medio irá el número.
* Debajo de la carta se situan dos botones. Uno de "next card enlazado a la funcion: "generarCarta" el cual generará una nueva carta aleatoria y no repetida. El boton de Reset, esta enlazado a la funcion: "reseteo". Este limpia los arrays y vuelve a generar la baraja principal.
* Estructura del JS: 
- En primer lugar se declaran todas las variables que utilizaremos, tanto para las funciones como para el DOM.
- Posteriormente declaramos las funciones: generarBaraja() hace un nested for loop de los arrays palo y numero con todas las combinaciones posibles de Poker y guardandolo en un nuevo array llamado Baraja. Esta funcion se llama en el JS para generar una baraja cada vez que se inicia el codigo. 
- La funcion generarCarta(), Se crea un condicional el cual lee la longitud del array Baraja. Si esta es 0, despliega una alerta al usuario para advertirle que no quedan combinaciones y que resete la baraja. De lo contrario, Coge un indice random de Baraja. De este indice extraemos el numero y palo y los inserta cada uno en una variable(numeroSelec y paloSelec), posteriormente en la variable carta se insertan esas variables en forma de Array. Esa carta la empujamos en el array barajaSalida el cual almacenara todos los resultados ya mostrados al usuario. En la misma funcion se insertan en el html los resultados.
* La funcion reseteo(), limpia los arrays: baraja y barajaSalida, posteriormente llama a la funcion generarBaraja() pàra volver a generar el array de combinaciones "baraja".


## Autor ✒️

* **Jose Luis Gil** - *Ejercicio completo* - [JoseLike](https://github.com/JoseLike)

También puedes mirar la lista de todos los [contribuyentes](https://github.com/JoseLike/excuse-generator/contributors) quíenes han participado en este 