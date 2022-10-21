# RESTAURANTE

API REST en la cuál encontrarás funciones como:

* Observar todos los restaurantes registrados.
* Crear un nuevo restaurante.
* Hacer reservas en un restaurante.
* Ver todas las reservas

# Comienzo 🚀

## Instalación 🔧

_Estas instrucciones te permitirán correr el proyecto y realizar las pruebas correspondientes._

1. Descarga el repositorio en este [link](https://github.com/jimalaros/restaurante) e instala los packages como se muestra a continuación.

```
npm install
```

2. Ejecutar el proyecto con el siguiente comando:

```
npm start
```

3. Dirigirse a la documentación de Swagger en el siguiente [link](https://localhost:5000/swagger)

### Endpoints

_Para crear un restaurante tendrás que llenar todos los datos de este esquema en el body correspondiente, acá un pequeño ejemplo:_

```
{
    "nombreRestaurante": "Plutos",
    "descripcion": "Comida Rapida",
    "direccion": "Cuba",
    "ciudad": "Pereira",
    "urlImagen": ".jpg"
}
```

_Para ver un restaurante o varios restaurantes por ciudad o por la letra con que comienzan tendrás que pasar la ciudad o la letra en el cuadro denominado query:_

```
{
    "ciudad":"Pereira"
}
```

_Para editar un restaurante tendrás que llenar todos los datos de este esquema en el body correspondiente, podes cambiar un dato todos, acá un pequeño ejemplo:_

```
{
    "nombreRestaurante": "Hot Burguer",
    "descripcion": "Comida Rapida",
    "direccion": "Cuba",
    "ciudad": "Pereira",
    "urlImagen": ".jpg"
}
```

_Para hacer una reserva tendrás que pasar el nombre del restaurante donde vas a hacer la reserva en el body:_

```
{
    "nombre":"Hot Burguer"
}
```

## Construido con 🛠️

* NodeJS
* Express
* Swagger

## Autores ✒️

* **Jimmy Alexander Arango Ossa** - [portfolio](http://bit.ly/Jimmy-Arango-Portafolio)