const gastosFijos = ["Alquiler", "Comida", "Transporte", "Ocio"];
let salariosMensuales = 0;
let gastosMensuales = [];

// Función para validar que el número sea válido
function pedirNumeroValido(mensaje) {
  let entrada, numero;

  do {
    entrada = prompt(mensaje);

    if (entrada === null) {
      return null; // Si el usuario presiona "Cancelar", salir
    }

    numero = parseInt(entrada);

    if (numero === 0 || numero !== numero) { 
      alert("Por favor, ingrese un número válido mayor que 0");
    }

  } while (numero === 0 || numero !== numero);

  return numero; // Número válido
}

// Función de entrada de datos
function pedirSalarios() {
  salariosMensuales = pedirNumeroValido("Ingrese su salario mensual:");
  
console.log("Salario mensual:", salariosMensuales);}

// Función para ingresar los gastos
function pedirGastos() {
  for (let i = 0; i < gastosFijos.length; i++) {
    let gasto = pedirNumeroValido(`Ingrese el gasto en ${gastosFijos[i]}:`);
    gastosMensuales.push({ categoria: gastosFijos[i], monto: gasto });
  }
  
console.log("Gastos ingresados:", gastosMensuales);}

//  Función para sumar los gastos
function sumar(gastosMensuales) {
  let total = 0;
  for (let i = 0; i < gastosMensuales.length; i++) {
    total += gastosMensuales[i].monto;
  }
  return total;
}

function calcularPresupuesto() {
  let totalGastos = sumar(gastosMensuales);
  let saldo = salariosMensuales - totalGastos;

  console.log("Total de gastos:", totalGastos);
  console.log("Saldo restante:", saldo);

  if (saldo > 0) {
    alert(`¡Bien hecho! Te queda un saldo de $${saldo.toFixed(2)} este mes.`);
  } else if (saldo === 0) {
    alert("¡Has gastado exactamente lo que ingresaste! Cuidado con futuros gastos.");
  } else {
    alert(`¡Atención! Tienes un déficit de $${saldo.toFixed(2)} este mes.`);
  }
}

// Ejecutar el simulador
pedirSalarios();
pedirGastos();
calcularPresupuesto();
