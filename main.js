// Array para almacenar los pedidos
let pedidos = JSON.parse(localStorage.getItem("pedidos")) || [];

// Clase Pedido
class Pedido {
    constructor(cliente, descripcion, cantidad, trabajo, pago, precioUnitario) {
        this.cliente = cliente;
        this.descripcion = descripcion;
        this.cantidad = cantidad;
        this.trabajo = trabajo;
        this.pago = pago;
        this.precioUnitario = precioUnitario;
        this.subtotal = this.calcularSubtotal();
        this.totalConIva = this.calcularTotalConIva();
    }

    calcularSubtotal() {
        return this.cantidad * this.precioUnitario;
    }

    calcularTotalConIva() {
        return this.subtotal * 1.21;
    }
}

// Función para guardar pedidos en localStorage
function guardarPedidosEnStorage() {
    localStorage.setItem("pedidos", JSON.stringify(pedidos));
}

// Función para registrar un pedido
function registrarPedido(event) {
    event.preventDefault(); // Evita el envío del formulario

    const cliente = document.getElementById("cliente").value;
    const descripcion = document.getElementById("descripcion").value;
    const cantidad = parseInt(document.getElementById("cantidad").value);
    const trabajo = document.getElementById("trabajo").value;
    const pago = document.getElementById("pago").value;
    const precioUnitario = parseFloat(document.getElementById("precioUnitario").value);

    if (isNaN(cantidad) || cantidad <= 0 || isNaN(precioUnitario) || precioUnitario <= 0) {
        mostrarMensaje("Por favor, ingrese valores válidos.", "error");
        return;
    }

    const nuevoPedido = new Pedido(cliente, descripcion, cantidad, trabajo, pago, precioUnitario);
    pedidos.push(nuevoPedido);
    guardarPedidosEnStorage();
    mostrarPedidos();
    mostrarMensaje("Pedido registrado exitosamente.", "success");

    // Resetea el formulario
    document.getElementById("formulario-pedido").reset();
}

// Función para mostrar todos los pedidos
function mostrarPedidos() {
    const contenedor = document.getElementById("lista-pedidos");
    contenedor.innerHTML = "";

    if (pedidos.length === 0) {
        contenedor.innerHTML = "<p>No hay pedidos registrados.</p>";
        return;
    }

    pedidos.forEach((pedido, index) => {
        const pedidoElement = document.createElement("div");
        pedidoElement.classList.add("pedido");
        pedidoElement.innerHTML = `
            <h3>Pedido #${index + 1}</h3>
            <p><strong>Cliente:</strong> ${pedido.cliente}</p>
            <p><strong>Descripción:</strong> ${pedido.descripcion}</p>
            <p><strong>Cantidad:</strong> ${pedido.cantidad}</p>
            <p><strong>Trabajo:</strong> ${pedido.trabajo}</p>
            <p><strong>Medio de Pago:</strong> ${pedido.pago}</p>
            <p><strong>Precio Unitario:</strong> $${pedido.precioUnitario.toFixed(2)}</p>
            <p><strong>Subtotal:</strong> $${pedido.subtotal.toFixed(2)}</p>
            <p><strong>Total con IVA:</strong> $${pedido.totalConIva.toFixed(2)}</p>
        `;
        contenedor.appendChild(pedidoElement);
    });
}

// Función para buscar pedidos por cliente
function buscarPedidosPorCliente() {
    const clienteBuscado = document.getElementById("buscar-cliente").value.toLowerCase();
    const resultados = pedidos.filter((pedido) => pedido.cliente.toLowerCase() === clienteBuscado);

    const contenedor = document.getElementById("lista-pedidos");
    contenedor.innerHTML = "";

    if (resultados.length === 0) {
        contenedor.innerHTML = `<p>No se encontraron pedidos para el cliente "${clienteBuscado}".</p>`;
        return;
    }

    resultados.forEach((pedido, index) => {
        const pedidoElement = document.createElement("div");
        pedidoElement.classList.add("pedido");
        pedidoElement.innerHTML = `
            <h3>Pedido #${index + 1}</h3>
            <p><strong>Cliente:</strong> ${pedido.cliente}</p>
            <p><strong>Descripción:</strong> ${pedido.descripcion}</p>
            <p><strong>Cantidad:</strong> ${pedido.cantidad}</p>
            <p><strong>Trabajo:</strong> ${pedido.trabajo}</p>
            <p><strong>Medio de Pago:</strong> ${pedido.pago}</p>
            <p><strong>Precio Unitario:</strong> $${pedido.precioUnitario.toFixed(2)}</p>
            <p><strong>Subtotal:</strong> $${pedido.subtotal.toFixed(2)}</p>
            <p><strong>Total con IVA:</strong> $${pedido.totalConIva.toFixed(2)}</p>
        `;
        contenedor.appendChild(pedidoElement);
    });
}

// Función para mostrar un mensaje al usuario
function mostrarMensaje(mensaje, tipo) {
    const contenedor = document.getElementById("mensaje");
    contenedor.textContent = mensaje;
    contenedor.className = tipo;

    setTimeout(() => {
        contenedor.textContent = "";
        contenedor.className = "";
    }, 3000);
}

// Event Listeners
document.getElementById("formulario-pedido").addEventListener("submit", registrarPedido);
document.getElementById("boton-buscar").addEventListener("click", buscarPedidosPorCliente);

// Mostrar pedidos al cargar la página
window.onload = mostrarPedidos;
