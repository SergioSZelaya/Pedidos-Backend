# Pedidos Rolling Backend 🍕🍔☕

<p align="center">
  <img src="https://res.cloudinary.com/dgzimgpia/image/upload/v1696038559/logo_shsofa.png" alt="Texto alternativo" width="300px">
</p>

_Es una aplicación para que los clientes de un restaurante elijan entre distintos productos y puedan hacer su pedido._

_El alcance de este proyecto se centra en realizar todos los pasos del CRUD y deberá contar con un login con diferentes opciones dependiendo el usuario que se loguea. Se considera que solo el usuario administrador podrá administrar las diferentes opciones de menú, mientras que los clientes deberán iniciar su sesión o registrarse para poder solicitar un pedido_

## Características

- Registro e inicio de sesión de usuarios.
- Búsqueda y filtrado de productos.
- Detalles de productos, incluyendo imágenes, descripciones y precios.
- Carrito de compras.
- Panel de administración para realizar acciones de gestión de productos.

## Tecnologías Utilizadas

- Node.js para el desarrollo del backend.
- MongoDB para la base de datos.
- Mongoose para la interacción con la base de datos.
- Bcrypt para el cifrado de contraseñas.

## Instalación

1. Clona el repositorio desde GitHub:

```bash
git https://github.com/SergioSZelaya/Pedidos-Backend.git
```

## Uso

- Asegúrate de tener Node.js y MongoDB instalados en tu máquina.

- Configura las variables de entorno en un archivo .env (puerto, conexión a la base de datos, etc.).

- Ejecuta npm install para instalar las dependencias.

- Ejecuta npm run dev para iniciar el servidor.

- Accede al backend desde tu aplicación de frontend.

## Endpoints API

- POST /api/usuarios: Registro de usuarios.
- POST /api/login: Inicio de sesión de usuarios.
- GET /api/products: Obtener todos los productos.
- GET /api/products/:id: Obtener un producto por su ID.
- POST /api/products/crear un nuevo producto (solo administradores).
- PUT /api/products/:id: Actualizar un producto (solo administradores).
- DELETE /api/products/:id: Eliminar un producto (solo administradores).

## Autores del proyecto

1. Facundo Kameyha
2. Isaias Padros
3. Agustin Romo
4. Jose Rivadeneira
5. Sergio Zelaya
6. Daniela Geronimo

Copyright (c) 2023
