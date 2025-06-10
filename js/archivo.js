const gastosFijos = ["Alquiler", "Comida", "Transporte", "Ocio"];
let salariosMensuales = 0;
let gastosMensuales = [];

// Función para validar que el número sea positivo y válido
function pedirNumeroValido(mensaje) {
  let valor;
  do {
    valor = parseInt(prompt(`${mensaje}`));
    if (isNaN(valor) || valor < 0) {
      alert("Por favor, ingrese un número válido mayor o igual a 0.");
    }
  } while (isNaN(valor) || valor < 0);
  return valor;
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

function calcularPresupuesto() {
  let totalGastos = sumar(gastosMensuales); 
  let saldo = ingresosMensuales - totalGastos;

  if (saldo > 0) {
    alert(`¡Bien hecho! Te queda un saldo de $${saldo.toFixed(2)} este mes.`);
  } else if (saldo === 0) {
    alert("¡Has gastado exactamente lo que ingresaste! Cuidado con futuros gastos.");
  } else {
    alert(`¡Atención! Tienes un déficit de $${saldo.toFixed(2)} este mes.`);
  }
console.log("Total de gastos:", totalGastos);
console.log("Saldo restante:", saldo);
}

// Ejecutar el simulador
pedirSalarios();
pedirGastos();
calcularPresupuesto();
