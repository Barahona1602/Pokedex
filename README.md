# Proyecto2_202109715
Este es mi proyecto 2 de Introducción a la Programación y Computación 1
## Tabla de Datos
| Nombre | Pablo Josué Barahona Luncey |
| ------ | ------ |
| Carnet | 202109715 |
| Auxiliar |  Javier Oswaldo Mirón Cifuentes (Sección F) |

#### VS Code
Se utilizó Visual Studio Code como editor de texto para poder usar los diferentes lenguajes de programación

## Frontend
El desarrollo web Front-end consiste en la conversión de datos en una interfaz gráfica para que el usuario pueda ver e interactuar con la información de forma digital usando HTML, CSS y JavaScript.

#### Angular
Para el proyecto se utilizó Angular, el cual es un framework para aplicaciones web, donde su principal lenguaje es TypeScript.
A través de este framework, se trabajó con distintas librerías y carpetas. Como librerías utiizamos bootstrap, el cual es un código abierto para diseñar el sitio web. El programa está dividido en carpetas como la mas importante (src) de estas desglosan los componentes, modelos y servicios, útiles para todo el programa. Para su funcionamiento utilizamos el puerto del localhost:4200 (Predeterminado)

#### Manual de uso

- Login

La primera página que aparece es el Login, el cual permite iniciar sesión con un usuario precargado 
![login](https://user-images.githubusercontent.com/98893615/165001680-17450edb-8503-4138-bf89-cf758bae76ff.jpg)


- Pókedex

La Pókedex es el lugar donde aparecen los pokemones, acá podrás ver los mejores 15 pokemon que existen, estos pueden ser buscados por tipo, nombre o número.

![Foto1](https://user-images.githubusercontent.com/98893615/164862061-9633e8f5-3240-4cc3-917e-a6f00613ffcd.png)

El filtro por nombre

![Foto2](https://user-images.githubusercontent.com/98893615/164862465-a25530e3-304b-4d77-a11c-d3d77d63673e.jpg)

El filtro por número
![Foto3](https://user-images.githubusercontent.com/98893615/164862591-870a1c2d-ba53-45cb-bf1a-7c7d301738c2.jpg)

El filtro por tipo
![Foto4](https://user-images.githubusercontent.com/98893615/164862611-8d667ed3-1961-4023-9554-c1598300a5f6.jpg)

## Backend
Para el Backend se utilizó Node.js, el cual es  un entorno en tiempo de ejecución multiplataforma, de código abierto, para la capa del servidor basado en el lenguaje de programación JavaScript. Gracias a este entorno, pudimos crear una API Rest.

Acá en la API Rest utilizamos el lenguaje de Javascript, como el uso de Express.js, este nos permite la creación de la misma API en Node.js

El puerto que se utilizó para crear el Backend fue el localhost:3000 (el más común para este tipo)

#### Endpoint
Para el manejo de los endpoints se utilizó el formato JSON
- Obtener Usuarios

Para este endpoint se usaron 3 usuarios, los cuales sus datos son usuarios y password.
- Obtener Pokemons

Para obtener los Pokemons, se crearon 15 de estos. Se utilizó un método el cual permite regresar los 15 Pokemons
- Obtener por Número

Los Pokemons pueden ser obtenidos por número, esto ya que se utiliza una función en la cual despues de un endpoint (en el caso del proyecto es /pokenumero) se busca un número y presenta todos sus datos.
- Obtener por Número

Los Pokemons pueden ser obtenidos por Nombre, esto ya que se utiliza una función en la cual despues de un endpoint (en el caso del proyecto es /pokenombre) se busca un nombre y presenta todos sus datos.
- Obtener por Tipo

Los Pokemons pueden ser obtenidos por Tipo, esto ya que se utiliza una función en la cual despues de un endpoint (en el caso del proyecto es /poketipo) se busca un tipo de pokemon y presenta todos los pokemons de ese tipo y sus datos.

