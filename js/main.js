const contenedorProductos = document.getElementById("contenedorProductos");
const estado = document.getElementById("estado");

function mostrarEstado(texto, tipo) {
    estado.textContent = texto;
    estado.className = tipo;
}

function mostrarProductos(productos) {
    contenedorProductos.innerHTML = "";

    productos.forEach(function (producto) {
        const tarjeta = document.createElement("article");

        tarjeta.classList.add("producto");

        tarjeta.innerHTML = `
            <h2>${producto.nombre}</h2>
            <p>Precio: $${producto.precio}</p>
            <p>Stock disponible: ${producto.stock}</p>
            <button type="button">Ver detalle</button>
        `;

        const botonDetalle = tarjeta.querySelector("button");

        botonDetalle.addEventListener("click", function () {
            Swal.fire({
                title: producto.nombre,
                html: `
                    <p>Precio: $${producto.precio}</p>
                    <p>Stock disponible: ${producto.stock}</p>
                `,
                icon: "info",
                confirmButtonText: "Cerrar"
            });
        });

        contenedorProductos.appendChild(tarjeta);
    });
}

async function cargarProductos() {
    mostrarEstado("Cargando productos...", "cargando");

    try {
        const respuesta = await fetch("json/productos.json");

        if (!respuesta.ok) {
            throw new Error("No se pudieron cargar los productos.");
        }

        const productos = await respuesta.json();

        mostrarProductos(productos);
        mostrarEstado("Productos cargados correctamente.", "exito");

        Swal.fire({
            toast: true,
            position: "top-end",
            icon: "success",
            title: "Productos cargados",
            showConfirmButton: false,
            timer: 2500
        });
    } catch (error) {
        mostrarEstado(error.message, "error");

        Swal.fire({
            title: "Ocurrió un error",
            text: error.message,
            icon: "error",
            confirmButtonText: "Cerrar"
        });
    } finally {
        console.log("Finalizó la carga de productos.");
    }
}

cargarProductos();