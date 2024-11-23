<img src="assets/utn_logo.svg" width="150">
<br/>
<br/>

# Trabajo Práctico Parte 2 — API películas

API REST desarrollada con Node.js, Express y Sequelize para gestionar películas y directores, con una relación muchos a muchos (N:N) entre ambas entidades. Proporciona funcionalidades CRUD completas para ambas entidades.


## Features

- Crear, leer, actualizar y eliminar (CRUD) películas y directores.
- Gestionar la relación entre películas y directores.
- Proporcionar paginación, ordenación y filtrado en las rutas de consulta para películas.
- Documentación Swagger disponible para explorar y probar la API.


## Inicializar base de datos

En la carpeta ./test podemos encontrar el archivo mysql.md con un script para crear esquema, tablas y popular las tablas. Además, en la misma carpeta, hay 3 archivos json con datos de ejemplo. 
## Run Locally
Se recomienda instalar la extensión REST Client en tu editor de código (como Visual Studio Code)

Clonar el proyecto

```bash
  git clone https://github.com/panconmantek/TP2-UTN-PIII-C331.git
```

Ir a la carpeta donde tenemos ubicado el proyecto

```bash
  cd TP2-UTN-PIII-C331
```

Instalar dependencias

```bash
  npm install
```

Iniciar el servidor 

```bash
  npm run start
```


## Casos de uso & ejempos

### Rest Client
En la carpeta ./test, hay un archivo test.http con ejemplos de solicitudes HTTP. Para probar estos ejemplos, se recomienda instalar la extensión REST Client en tu editor de código (como Visual Studio Code).

### Swagger
La api cuenta con soporte para documentación con swagger, siento la ruta /api-doc.

```bash
  GET http://localhost:4004/api-doc
  Content-Type: application/json
```
## Tecnologías Utilizadas
- Node.js: Entorno de ejecución de JavaScript.
- Express: Framework web para Node.js.
- Sequelize: ORM para gestionar la base de datos MySQL.
- Swagger: Documentación interactiva para la API.
- Axios: Cliente HTTP para realizar solicitudes externas.
- Morgan: Middleware para el registro de solicitudes HTTP.