# Proyecto2_202109715
## Tabla de Datos
| Nombre | Pablo Josué Barahona Luncey |
| ------ | ------ |
| Carnet | 202109715 |
| Auxiliar |  Javier Oswaldo Mirón Cifuentes (Sección F) |

## Frontend
#### Angular
Para el proyecto se utilizó el framework Angular, el cual permite el uso de diferentes librerías y componentes. Principalmente está escrito en Typescript. Para su funcionamiento utilizamos el puerto del localhost:4200 (Predeterminado)

#### Manual de uso

- Login

La primera página que aparece es el Login, el cual permite iniciar sesión con un usuario precargado 

[![Login](https://cldup.com/dTxpPi9lDf.thumb.png)](https://nodesource.com/products/nsolid)

- Pókedex

La Pókedex es el lugar donde aparecen los pokemones, acá podrás ver los mejores 15 pokemon que existen, estos pueden ser buscados por tipo, nombre o número.

[![Login](https://cldup.com/dTxpPi9lDf.thumb.png)](https://nodesource.com/products/nsolid)

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

