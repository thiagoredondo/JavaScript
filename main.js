// Función para ingresar pedidos de una Serigrafía
function ingresarPedido() {
    const nombreCliente = prompt("Ingrese el nombre del cliente:");
    const descripcionPedido = prompt("Ingrese una descripción del pedido:");
    const cantidadUnidades = parseInt(prompt("Ingrese la cantidad de unidades:"));
    const tipoTrabajo = prompt("Ingrese el tipo de trabajo a realizar (Ej. Estampado, Bordado):");
    const medioPago = prompt("Ingrese el medio de pago (Ej. Efectivo, Tarjeta):");
    const precioUnitario = parseFloat(prompt("Ingrese el precio unitario del producto:"));

    // Validación con condicional
    if (isNaN(cantidadUnidades) || cantidadUnidades <= 0 || isNaN(precioUnitario) || precioUnitario <= 0) {
        alert("Por favor, ingrese valores válidos para la cantidad de unidades y el precio unitario.");
        return;
    }

    // Cálculo del subtotal y total con IVA
    const subtotal = cantidadUnidades * precioUnitario;
    const totalConIva = subtotal * 1.21; // Agrega el 21% de IVA

    // Crear el objeto del pedido
    const pedido = {
        cliente: nombreCliente,
        descripcion: descripcionPedido,
        cantidad: cantidadUnidades,
        trabajo: tipoTrabajo,
        pago: medioPago,
        precioUnitario: precioUnitario,
        subtotal: subtotal,
        totalConIva: totalConIva
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
        Precio Unitario: $${pedido.precioUnitario.toFixed(2)}
        Subtotal: $${pedido.subtotal.toFixed(2)}
        Total con IVA (21%): $${pedido.totalConIva.toFixed(2)}
    `);
}

// Función para ingresar pedidos
function iniciarSimulador() {
    let agregarOtro = true;

    while (agregarOtro) {
        ingresarPedido();
        agregarOtro = confirm("¿Desea ingresar otro pedido?");
    }

    alert("Gracias por utilizar el simulador de pedidos.");
}

// Mensaje de bienvenida al cargar la página
window.onload = function () {
    const iniciar = confirm("Bienvenido al sistema de ingreso de pedidos de Serigrafía Gomez. ¿Desea iniciar el sistema?");
    
    if (iniciar) {
        iniciarSimulador();
    } else {
        alert("Gracias por visitar el sitio. Puede iniciar el sistema en cualquier momento.");
    }
};
