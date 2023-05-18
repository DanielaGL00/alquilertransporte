class Vehiculo {
  constructor(nombre, capacidad, url) {
    this.nombre = nombre;
    this.capacidad = capacidad;
    this.url = url;
  }
}

const camioneta = new Vehiculo("Camioneta", 5, "img/camioneta.jpg")
const minivan = new Vehiculo("Minivan", 7, "img/minivan.jpg")
const campero = new Vehiculo("Campero", 5, "img/campero.jpg")
const hibrido = new Vehiculo("Hibrido", 5, "img/hibrido.jpg")
const camionetaPlaton = new Vehiculo("Camioneta con platón", 5, "img/camionetaPlaton.jpg")
const microbus12 = new Vehiculo("Microbus de 12", 12, "img/microbus12.jpg")
const microbus19 = new Vehiculo("Microbus de 19", 19, "img/microbus19.jpg")
const bus = new Vehiculo("Bus", 28, "img/bus.jpg")

const arrayVehiculos = [camioneta, minivan, campero, hibrido, camionetaPlaton, microbus12, microbus19, bus]

const contentServices = document.getElementById("contentVehiculos");

arrayVehiculos.forEach(vehiculo => {
  const div = document.createElement("div");
  div.className = "contentCardVehiculo"
  div.innerHTML = `<img src ="${vehiculo.url}">
                   <h3> ${vehiculo.nombre} </h3>
                   <p>Capacidad: ${vehiculo.capacidad} </p>
                   <button class="cta">Alquilar</button>`;

  contentServices.appendChild(div);
})

// Definir los valores por minuto de servicio y valor por kilómetro recorrido para cada tipo de vehículo
const valorPorMinutoServicio = {
  "camioneta": 601,
  "minivan": 541,
  "campero": 555,
  "hibrido": 823,
  "camionetaPlaton": 823,
  "microbus12": 923,
  "microbus19": 1030,
  "bus": 1917
};

const valorPorKilometroRecorrido = {
  "camioneta": 1042,
  "minivan": 1086,
  "campero": 1143,
  "hibrido": 978,
  "camionetaPlaton": 1233,
  "microbus12": 1295,
  "microbus19": 1550,
  "bus": 2751
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
