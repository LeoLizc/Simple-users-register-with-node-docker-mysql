# Overview
Este proyecto es una implementación básica de _Docker_ y _Docker-Compose_ para montar un servidor _http_ para el registro de usuarios desarrollado en _node_ con persistencia en una base de datos _mysql_

<!-- ## Uso básico -->
## Puesta en marcha
Lo primero a hacer para poner en marcha este proyecto es clonar el repositorio en un sistema con _docker_ y _docker-compose_.
Lo cual se puede llevar a cabo fácilmente a través del sigiente comando en consola

    git clone https://github.com/LeoLizc/Simple-users-register-with-node-docker-mysql.git
Luego es necesario navegar a la carpeta del repositorio clonado ejecutando del siguiente comando en la misma consola:

    cd ./Simple-users-register-with-node-docker-mysql
Por último se deben crear las imágenes utilizando los comandos de _docker-compose_ expuestos a continuación:

    docker-compose build
    docker-compose up
    
## Uso del servicio
Si está corriendo el servicio en su máquina local puede realizar las peticiones _http_ a través de la ruta:
    `http://localhost:3000` con la extención `/api/` de la manera:
    
    http://localhost:3000/api/
O en su defecto puede usar la ruta al host de la manera:
    
    http://urlHost/api/
    
**A su vez contamos con diferentes rutas y servicios http**
---
- [Verificar conexión](#verificar-conexi%C3%B3n-a-la-base-de-datos)
- [Agregar un usuario](https://github.com/LeoLizc/Simple-users-register-with-node-docker-mysql/edit/master/readme.md#agregar-un-usuario-a-la-base-de-datos)
- [Eliminar todos los usuarios](https://github.com/LeoLizc/Simple-users-register-with-node-docker-mysql/edit/master/readme.md#eliminar-todos-los-usuarios-de-la-base-de-datos)
- [Listar usuarios](https://github.com/LeoLizc/Simple-users-register-with-node-docker-mysql/edit/master/readme.md#listar-en-formato-json-todos-los-usuarios-de-la-base-de-datos)
- [Agregar varios usuarios](https://github.com/LeoLizc/Simple-users-register-with-node-docker-mysql/edit/master/readme.md#agregar-varios-usuarios-a-la-base-de-datos-enviador-en-formato-json)

### Verificar conexión a la base de datos
Se pude realizar una solicitud para saber si el servidor se encuentra conectado satisfactoriamente a la base de datos a través de una petición `get` a la ruta `/api/`

En caso de que el servidor se encuentr conectado se resivirá un `ok`, en caso contrario se recibirá un `nok`

### Agregar un usuario a la base de datos
**Método:**
```
POST - http://localhost:3000/api/
```
**Formato del usuario:**
```
{
  "usuario": "holiwh",
  "clave": "adivina",
  "nrc": "4561"
}
```
Se pude optener `ok` o `nok` como respuesta
### Eliminar todos los usuarios de la base de datos
**Método:**
```
DELETE - http://localhost:3000/api/
```
Se pude optener `ok` o `nok` como respuesta
### Listar en formato json todos los usuarios de la base de datos
**Método:**
```
GET - http://localhost:3000/api/users
```
Se puede optener una lista de los **usuarios** en el formato:
```
[{
  "usuario": "holiwh",
  "clave": "adivina",
  "nrc": "4561"
}, ...]
```
### Agregar varios usuarios a la base de datos _(enviador en formato json)_
**Método:**
```
POST - POST - http://localhost:3000/api/
```
**Formato de envio:**
```
[{
  "usuario": "holiwh",
  "clave": "adivina",
  "nrc": "4561"
}, ...]
```
