

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

function ingresarIdentificacion(){
  let nombre = prompt("Ingresa tu nombre")
  let apellido = prompt("ingresa tu apellido")
  return {nombre, apellido}
}

function darBienvenida(){
  let {nombre, apellido} = ingresarIdentificacion()
  alert ("Bienvenid@ " + nombre + " " + apellido + " a TU AUTO HOY" )
}

darBienvenida()

function seleccionarOpcion() {
  let opcion = obtenerOpcion();
  let autoElegido = seleccionarAuto(opcion);
  mostrarAutoSeleccionado(autoElegido);
  let confirmacion = confirmarContinuar();

  if (confirmacion === true) {
    mostrarPlandecuotas(autoElegido);
  } else {
    mostrarNoContinuarMensaje();
  }
}

function obtenerOpcion() {
  return parseInt(prompt("Ingrese la opción del auto que desea comprar: 1-Gol Trend 2-Moby 3-Clio 2 4- Yaris 5-Corsa 6-Palio"));
}

function mostrarAutoSeleccionado(auto) {
  console.log(auto);
  alert("Seleccionaste un " + auto.marca + " " + auto.nombre);
}

function confirmarContinuar() {
  return confirm("¿Deseas continuar?");
}

function mostrarPlandecuotas(auto) {
  let verCuotas = confirm("¿Deseas ver nuestro plan de hasta 72 cuotas sin interes?");

  if (verCuotas === true) {
    seleccionarCuotas(auto);
  } else {
    mostrarSaldoContado(auto);
  }
}

function seleccionarCuotas(auto) {
  let cuotas = parseInt(prompt("Seleccione la cantidad de cuotas (hasta 72 cuotas)"));
  
  if (cuotas <= 72) {
    calcularCuotas(auto, cuotas);
  } else {
    alert("Excediste el máximo de cuotas, recuerda que el máximo son 72");
  }
}

function mostrarSaldoContado(auto) {
  alert("Tu saldo por pagar a contado será de " + auto.precio);
}

function NoContinuarMensaje() {
  alert("¡Estamos siempre a tu disposición! Presiona F5 si cambias de opinión");
}

function calcularCuotas(autoElegido, cuotas) {
for (let i = 1; i <= cuotas; i++) {
  let planCuotas = autoElegido.precio / cuotas;
  console.log("Cuota N° " + i + ": " + planCuotas);
}
}

seleccionarOpcion();
