# Pre-entrega 10 — Cafetería de Santi

Aplicación web desarrollada con HTML, CSS y JavaScript que muestra productos de una cafetería cargados dinámicamente desde un archivo JSON local.

## Funcionalidades

- Carga productos desde `productos.json` mediante `fetch()`.
- Utiliza `async/await` para gestionar la petición asíncrona.
- Muestra un mensaje mientras los productos se están cargando.
- Maneja errores con `try/catch/finally`.
- Renderiza productos dinámicamente en el DOM.
- Muestra información detallada de cada producto.
- Utiliza SweetAlert2 para notificaciones y ventanas emergentes.

## Tecnologías utilizadas

- HTML
- CSS
- JavaScript
- Fetch API
- JSON
- SweetAlert2

## Estructura del proyecto

```text
Pre-entrega 10/
├── index.html
├── README.md
├── css/
│   └── styles.css
├── js/
│   └── main.js
└── json/
    └── productos.json
```

## Cómo utilizarlo

1. Abrir el proyecto con Live Server.
2. Esperar la carga de los productos.
3. Presionar “Ver detalle” en cualquier producto.
4. Revisar la consola para verificar el mensaje final de la petición.

## Conceptos aplicados

- `fetch()`
- `async/await`
- `response.ok`
- `response.json()`
- `try/catch/finally`
- Manipulación del DOM
- Librerías externas mediante CDN