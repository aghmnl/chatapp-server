# Crea tu propio WhatsApp desde cero

[_Curso de Udemy_](https://www.udemy.com/course/crea-tu-propia-app-mensajeria-desde-cero/?couponCode=KEEPLEARNING)

Este repositorio comprende hasta capítulo 63. Cada commit se corresponde a un capítulo en específico, pudiendo haber excepciones. Para los capítulos posteriores, que corresponden al lado cliente, ir a este repositorio: [chatapp-client](https://github.com/aghmnl/chatapp-client)

## Lado servidor

Éste es el código del curso tal como fue dado con muy pequeños cambios. Como el repositorio está disponible de forma pública, hago lo mismo con este repositorio. El código original se encuentra en [node-express-sockets-whatsapp](https://github.com/xAgustin93/node-express-sockets-whatsapp) y fue creado por [Agustín Navarro Galdón](https://www.linkedin.com/in/agustin93/)

### Cómo correr el servidor

Para clonar localmente el repositorio:

```
git clone https://github.com/aghmnl/chatapp-server.git
```

Para instalar el código correctamente ir a la carpeta recién creada:

```
yarn install
```

Para correr el servidor:

```
yarn dev
```

### Github branches

Hay dos Pull Requests abiertos correspondientes a dos ramas disponibles hechas por mí. Ambas resuelven el problema de actualizar mongoose a la versión 8.10.0. Versiones superiores a la utilizada en el curso (6.8.0) no aceptan callbacks:

1. [Mongoose async await](https://github.com/aghmnl/chatapp-server/pull/2): Resuelve el problema con async/await + try/catch
2. [Mongoose promise](https://github.com/aghmnl/chatapp-server/pull/1): Resuelve el problema con promesas

### Dependencies versions

Ya que el curso no está actualizado, me tomé el esfuerzo de anotar todas las dependencias utilizadas con las versiones correspondientes para evitar problemas de compatibilidades

- npm 8.5.5
- node 18.12.1
- yarn 1.22.19
- express.js 4.18.2
- socket.io 4.5.4
- mongoose 6.8.0
- body-parser 1.20.1
- cors 2.8.5
- morgan 1.10.0
- nodemon 2.0.20
- bcryptjs 2.4.3
- jsonwebtoken 8.5.1
- connect-multiparty 2.2.0

### ESLint

El curso no instala ESLint, pero sí utiliza Prettier. Yo en mi caso le agregué ESLint por lo que se verán las siguientes dependencias:

- "@eslint/js": "9.20.0",
- "eslint": "9.20.1",
- "eslint-plugin-react": "7.37.4",
- "globals": "15.15.0",

---

> Mis notas del curso son privadas y están en [Notas del curso](https://docs.google.com/document/d/1hJ4F6PoeFXu-ERqIkLC7izroIJwJ8fVAQ7TyGq2Jk8w/edit?tab=t.0)
