function datosPersonales(){
    let nombreCliente = prompt("Ingrese su nombre")
    let edadCliente=parseInt(prompt("Ingrese su edad:"))

    if(nombreCliente!=='' && edadCliente>=18){
    alert("Felicitaciones! cumples con nuestros requisitos")
    compraAuto()}
    else {
        alert("Lo siento, no pudimos procesar tus datos. Por favor, para reintentar preciona F5")
    }
}






const precioAuto = 2500000

function compraAuto(){
    alert("tenemos promociones en autos usados en $2.500.000")
    let cantidadAuto = parseInt(prompt("Ingresa la cantidad de autos que quieres comprar:"))
    let cantidadCuotas = parseInt(prompt("Ingresa la cantidad de cuotas que quieres para tu compra (maximo 48):"))

    if (cantidadAuto >=1 && cantidadCuotas >= 1){
        alert("tu solicitud por " + cantidadAuto + " autos en " + cantidadCuotas + " cuotas, fue aprovada, a continuacion te mostraremos como quedaria tu plan de pago" )
        console.log("solicitud aprovada")
        calculoCompra(precioAuto, cantidadAuto,cantidadCuotas)
    }
    else {
        alert("tu cantidad de cuotas exede nuestra promocion!")
        console.error("cantidad de cuotas superada")
    }
}

function calculoCompra(precioAuto, cantidadAuto, cantidadCuotas, nombreCliente) {
    let procesoCompra = (precioAuto + cantidadAuto) / cantidadCuotas;
    alert("Felicitaciones por tu compra!");
    console.log("La compra de " + nombreCliente + " cuenta con " + cantidadAuto + " autos, en " + cantidadCuotas + " cuotas, divididas de la siguiente manera:");

    for (let i = 1; i <= cantidadCuotas; i++) {
        console.log("Cuota N° " + i + ": " + procesoCompra);
    }
}

datosPersonales()