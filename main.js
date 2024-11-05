// Función para ingresar pedidos de una Serigrafía
function ingresarPedido() {
    const nombreCliente = prompt("Ingrese el nombre del cliente:");
    const descripcionPedido = prompt("Ingrese una descripción del pedido:");
    const cantidadUnidades = parseInt(prompt("Ingrese la cantidad de unidades:"));
    const tipoTrabajo = prompt("Ingrese el tipo de trabajo a realizar (Ej. Estampado, Bordado):");
    const medioPago = prompt("Ingrese el medio de pago (Ej. Efectivo, Tarjeta):");

    // Validación con condicional
    if (isNaN(cantidadUnidades) || cantidadUnidades <= 0) {
        alert("Por favor, ingrese un número válido para la cantidad de unidades.");
        return;
    }

    // Mostrar los datos del pedido
    const pedido = {
        cliente: nombreCliente,
        descripcion: descripcionPedido,
        cantidad: cantidadUnidades,
        trabajo: tipoTrabajo,
        pago: medioPago
    };

    mostrarPedido(pedido);
}

// Función para mostrar los datos de cada pedido
function mostrarPedido(pedido) {
    // Muestra el resumen del pedido en una ventana emergente
    alert(`
        Resumen del Pedido:
        Cliente: ${pedido.cliente}
        Descripción: ${pedido.descripcion}
        Cantidad de Unidades: ${pedido.cantidad}
        Tipo de Trabajo: ${pedido.trabajo}
        Medio de Pago: ${pedido.pago}
    `);
}

// Ciclo para ingresar varios pedidos
function iniciarSimulador() {
    let agregarOtro = true;

    while (agregarOtro) {
        ingresarPedido();
        agregarOtro = confirm("¿Desea ingresar otro pedido?");
    }

    alert("Gracias por utilizar el simulador de pedidos.");
}

// Mostrar ventana de bienvenida al cargar la página
window.onload = function () {
    const iniciar = confirm("Bienvenido al sistema de ingreso de pedidos de Serigrafía Gomez. ¿Desea iniciar el sistema?");

    if (iniciar) {
        iniciarSimulador();
    } else {
        alert("Gracias por visitar el sitio. Puede iniciar el sistema en cualquier momento.");
    }
};
