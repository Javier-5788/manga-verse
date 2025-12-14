document.addEventListener("DOMContentLoaded", () => {

    /* =========================================
       1. OBTENER CARRITO CORRECTO
    ========================================= */

    const carrito = JSON.parse(localStorage.getItem("productos-en-carrito")) || [];

    console.log("Carrito recibido:", carrito);

    const tabla = document.getElementById("detalleFactura");
    let subtotalGeneral = 0;

    /* =========================================
       2. MOSTRAR PRODUCTOS EN LA FACTURA
    ========================================= */

    carrito.forEach(item => {

        const precio = Number(item.precio);
        const cantidad = Number(item.cantidad);
        const subtotal = precio * cantidad;

        subtotalGeneral += subtotal;

        const fila = `
            <tr>
                <td>${item.id}</td>
                <td colspan="2">${item.titulo}</td>
                <td>${cantidad}</td>
                <td>$${precio.toLocaleString()}</td>
                <td>$${subtotal.toLocaleString()}</td>
            </tr>
        `;

        tabla.insertAdjacentHTML("beforeend", fila);
    });

    /* =========================================
       3. CALCULAR TOTALES
    ========================================= */

    const inputSubtotal = document.getElementById("subt");
    const inputIVA = document.getElementById("iva");
    const inputNeto = document.getElementById("neto");

    const ivaNum = Math.round(subtotalGeneral * 0.19);
    const netoNum = subtotalGeneral + ivaNum;

    inputSubtotal.value = subtotalGeneral.toLocaleString();
    inputIVA.value = ivaNum.toLocaleString();
    inputNeto.value = netoNum.toLocaleString();

    /* =========================================
       4. GENERAR FACTURA Y BORRAR CARRITO
    ========================================= */

    const form = document.getElementById("formFactura");

    form.addEventListener("submit", (e) => {
        e.preventDefault();

        swal("Factura generada", "Gracias por su compra", "success");

        localStorage.removeItem("productos-en-carrito");
    });

});