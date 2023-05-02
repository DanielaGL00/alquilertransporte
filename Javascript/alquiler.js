// Definir los valores por minuto de servicio y valor por kilómetro recorrido para cada tipo de vehículo
const valorPorMinutoServicio = {
  "1": 601,
  "2": 541,
  "3": 555,
  "4": 823,
  "5": 823,
  "6": 923,
  "7": 1030,
  "8": 1917
};

const valorPorKilometroRecorrido = {
  "1": 1042,
  "2": 1086,
  "3": 1143,
  "4": 978,
  "5": 1233,
  "6": 1295,
  "7": 1550,
  "8": 2751
};

// Guardar los valores en el localStorage
localStorage.setItem("valorPorMinutoServicio", JSON.stringify(valorPorMinutoServicio));
localStorage.setItem("valorPorKilometroRecorrido", JSON.stringify(valorPorKilometroRecorrido));

// Obtener los elementos del DOM
const optionRadios = document.getElementsByName("option");
const tipoVehiculoSelect = document.getElementById("tipoVehiculo");
const minutosInput = document.getElementById("minutos");
const kilometrosInput = document.getElementById("kilometros");
const calcularButton = document.getElementById("calcular");
const resultadoP = document.getElementById("resultado");


// Detectar el evento de click en el botón de calcular
calcularButton.addEventListener("click", function() {

  let valor;
  if (optionRadios[0].checked) {
  valor = valorPorMinutoServicio[tipoVehiculoSelect.value] * minutosInput.value;
  } else if (optionRadios[1].checked) {
  valor = valorPorKilometroRecorrido[tipoVehiculoSelect.value] * kilometrosInput.value;
  } else {
  valor = 0;
  }
  // Mostrar el resultado en el elemento HTML correspondiente
  resultadoP.innerHTML = "El costo de alquiler es de $" + valor;
  });