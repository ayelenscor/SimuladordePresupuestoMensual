// Declaración de variables y constantes
const gastosFijos = ["Alquiler", "Comida", "Transporte", "Ocio"];
let ingresosMensuales = 0;
let gastosMensuales = [];

// Función de entrada de datos
function pedirIngresos() {
  ingresosMensuales = parseFloat(prompt("Ingrese su ingreso mensual:"));
  console.log("Ingreso mensual:", ingresosMensuales);
}

// Función para ingresar los gastos
function pedirGastos() {
  for (let i = 0; i < gastosFijos.length; i++) {
    let gasto = parseFloat(prompt(`Ingrese el gasto en ${gastosFijos[i]}:`));
    gastosMensuales.push({ categoria: gastosFijos[i], monto: gasto });
  }
  console.log("Gastos ingresados:", gastosMensuales);
}

// Función para procesar y mostrar resultado
function calcularPresupuesto() {
  let totalGastos = 0;

  for (let i = 0; i < gastosMensuales.length; i++) {
    totalGastos += gastosMensuales[i].monto;
  }

  let saldo = ingresosMensuales - totalGastos;

  console.log("Total de gastos:", totalGastos);
  console.log("Saldo restante:", saldo);

  if (saldo > 0) {
    alert(`¡Bien hecho! Te queda un saldo de $${saldo.toFixed(2)} este mes.`);
  } else if (saldo === 0) {
    alert("¡Has gastado exactamente lo que ingresaste! Cuidado con futuros gastos.");
  } else {
    alert(`¡Atención! Tienes un déficit de $${Math.abs(saldo).toFixed(2)} este mes.`);
  }
}

// Invocación de funciones
pedirIngresos();
pedirGastos();
calcularPresupuesto();
