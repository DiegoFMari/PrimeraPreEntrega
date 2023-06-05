

const vehiculos= [
    {opcion:1, nombre: "GOL TREND",marca:"WOLKWAGEN", modelo: 2019, color: "GRIS", precio: 2400000},
    {opcion:2, nombre: "MOBY",marca:"FIAT", modelo: 2018, color: "ROJO", precio: 2100000},
    {opcion:3, nombre: "CLIO 2",marca:"RENAULT", modelo: 2019, color: "BLANCO", precio: 2200000},
    {opcion:4, nombre: "YARIS",marca:"TOYOTA", modelo: 2021, color: "ROJO", precio: 3400000},
    {opcion:5, nombre: "CORSA",marca:"CHEVROLET", modelo: 2017, color: "blanco", precio: 1900000},
    {opcion:6, nombre: "PALIO",marca:"FIAT", modelo: 2020, color: "GRIS", precio: 2000000},
]

function seleccionarAuto(opcion){
        let seleccionRealizada=vehiculos.find((vehiculo)=> vehiculo.opcion===parseInt(opcion))
        return seleccionRealizada
}


alert("Bienvenid@ a 'TU AUTO HOY'");

function seleccionarOpcion() {
  let opcion = parseInt(prompt("Ingrese la opción del auto que desea comprar"));
  let autoElegido = seleccionarAuto(opcion);
  console.log(autoElegido);
  alert("Seleccionaste un " + autoElegido.marca + " " + autoElegido.nombre);
  let confirmacion = confirm("¿Deseas continuar?");

  if (confirmacion === true) {
    let seguros = confirm("¿Deseas ver nuestro plan de hasta 72 cuotas sin interes?");

    if (seguros === true) {
        
      let cuotas = parseInt(prompt("Seleccione la cantidad de cuotas (hasta 72 cuotas)"));
      if (cuotas<=72){
      calcularCuotas(autoElegido, cuotas);}
        else 
        {alert("Excediste el maximo de cuotas, recuerda que el maximo son 72")}
        } 
    else {
      alert("Tu saldo por pagar a contado sera de " + autoElegido.precio);
    }
  } else {
    alert("¡Estamos siempre a tu disposición! Presiona F5 si cambias de opinión");
  }
}

function calcularCuotas(autoElegido, cuotas) {
  for (let i = 1; i <= cuotas; i++) {
    let planCuotas = autoElegido.precio / cuotas;
    console.log("Cuota N° " + i + ": " + planCuotas);
  }
}

seleccionarOpcion();

