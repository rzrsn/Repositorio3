# API de Gestión de Usuarios

## Descripción

Este proyecto consiste en una API REST básica para la gestión de usuarios. Permite realizar operaciones CRUD y está orientado a la comprensión de conceptos fundamentales del desarrollo backend.

## Funcionalidades

* Crear usuarios
* Obtener lista de usuarios
* Actualizar información de usuarios
* Eliminar usuarios

## Tecnologías

* Node.js
* Express.js

## Ejecución

### Clonar repositorio

```bash
git clone https://github.com/rzrsn/Repositorio3.git
```

### Instalar dependencias

```bash
npm install
```

### Ejecutar servidor

```bash
npm start
```

El servidor estará disponible en:
http://localhost:3000

## Uso de la API

Una vez que el servidor esté en ejecución, puedes interactuar con la API utilizando herramientas como Postman, Insomnia o mediante comandos curl.

A continuación se muestran ejemplos de uso:

### Obtener todos los usuarios

```bash
curl http://localhost:3000/usuarios
```

### Crear un usuario

```bash
curl -X POST http://localhost:3000/usuarios \
-H "Content-Type: application/json" \
-d '{"nombre": "Ana"}'
```

### Actualizar un usuario

```bash
curl -X PUT http://localhost:3000/usuarios/1 \
-H "Content-Type: application/json" \
-d '{"nombre": "Nuevo Nombre"}'
```

### Eliminar un usuario

```bash
curl -X DELETE http://localhost:3000/usuarios/1
```

## Autor

Ana Laura Rios 
