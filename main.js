// Array para almacenar los pedidos
const pedidos = [];

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

// Función para registrar un pedido
function registrarPedido() {
    const nombreCliente = prompt("Ingrese el nombre del cliente:");
    const descripcionPedido = prompt("Ingrese una descripción del pedido:");
    const cantidadUnidades = parseInt(prompt("Ingrese la cantidad de unidades:"));
    const tipoTrabajo = prompt("Ingrese el tipo de trabajo (Ej. Estampado, Bordado):");
    const medioPago = prompt("Ingrese el medio de pago (Ej. Efectivo, Tarjeta):");
    const precioUnitario = parseFloat(prompt("Ingrese el precio unitario del producto:"));

    if (isNaN(cantidadUnidades) || cantidadUnidades <= 0 || isNaN(precioUnitario) || precioUnitario <= 0) {
        alert("Por favor, ingrese valores válidos para la cantidad de unidades y el precio unitario.");
        return;
    }

    const nuevoPedido = new Pedido(
        nombreCliente,
        descripcionPedido,
        cantidadUnidades,
        tipoTrabajo,
        medioPago,
        precioUnitario
    );

    pedidos.push(nuevoPedido);
    alert("Pedido registrado exitosamente.");
}

// Función para mostrar todos los pedidos
function mostrarPedidos() {
    if (pedidos.length === 0) {
        alert("No hay pedidos registrados.");
        return;
    }

    let listaPedidos = "Lista de pedidos registrados:\n";
    pedidos.forEach((pedido, index) => {
        listaPedidos += `
        Pedido #${index + 1}:
        Cliente: ${pedido.cliente}
        Descripción: ${pedido.descripcion}
        Cantidad: ${pedido.cantidad}
        Trabajo: ${pedido.trabajo}
        Medio de Pago: ${pedido.pago}
        Precio Unitario: $${pedido.precioUnitario.toFixed(2)}
        Subtotal: $${pedido.subtotal.toFixed(2)}
        Total con IVA: $${pedido.totalConIva.toFixed(2)}\n`;
    });

    alert(listaPedidos);
    console.log(listaPedidos);
}

// Función para buscar pedidos por cliente
function buscarPedidosPorCliente() {
    const clienteBuscado = prompt("Ingrese el nombre del cliente a buscar:");
    const resultados = pedidos.filter((pedido) => pedido.cliente.toLowerCase() === clienteBuscado.toLowerCase());

    if (resultados.length === 0) {
        alert(`No se encontraron pedidos para el cliente "${clienteBuscado}".`);
        return;
    }

    let resultadosTexto = `Pedidos encontrados para el cliente "${clienteBuscado}":\n`;
    resultados.forEach((pedido, index) => {
        resultadosTexto += `
        Pedido #${index + 1}:
        Descripción: ${pedido.descripcion}
        Cantidad: ${pedido.cantidad}
        Trabajo: ${pedido.trabajo}
        Medio de Pago: ${pedido.pago}
        Precio Unitario: $${pedido.precioUnitario.toFixed(2)}
        Subtotal: $${pedido.subtotal.toFixed(2)}
        Total con IVA: $${pedido.totalConIva.toFixed(2)}\n`;
    });

    alert(resultadosTexto);
    console.log(resultadosTexto);
}

// Función principal del menú
function iniciarSimulador() {
    let continuar = true;

    while (continuar) {
        const opcion = parseInt(prompt(`Seleccione una opción:
        1. Registrar un pedido
        2. Mostrar todos los pedidos
        3. Buscar pedidos por cliente
        4. Salir
        `));

        switch (opcion) {
            case 1:
                registrarPedido();
                break;
            case 2:
                mostrarPedidos();
                break;
            case 3:
                buscarPedidosPorCliente();
                break;
            case 4:
                continuar = false;
                alert("Gracias por usar el simulador.");
                break;
            default:
                alert("Por favor, seleccione una opción válida.");
        }
    }
}

// Inicio del sistema
window.onload = function () {
    iniciarSimulador();
};
