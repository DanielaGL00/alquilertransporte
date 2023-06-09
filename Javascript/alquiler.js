const valorPorMinutoServicio = {
  "Camioneta": 601,
  "Minivan": 541,
  "Campero": 555,
  "Hibrido": 823,
  "Platon": 823,
  "Microbus12": 923,
  "Microbus19": 1030,
  "Bus": 1917
};

const valorPorKilometroRecorrido = {
  "Camioneta": 1042,
  "Minivan": 1086,
  "Campero": 1143,
  "Hibrido": 978,
  "Platon": 1233,
  "Microbus12": 1295,
  "Microbus19": 1550,
  "Bus": 2751
};

localStorage.setItem("valorPorMinutoServicio", JSON.stringify(valorPorMinutoServicio));
localStorage.setItem("valorPorKilometroRecorrido", JSON.stringify(valorPorKilometroRecorrido));

const optionRadios = document.getElementsByName("option");
const minutosInput = document.getElementById("minutos");
const kilometrosInput = document.getElementById("kilometros");
const calcularButton = document.getElementById("calcular");
const contentVehiculos = document.getElementById("contentVehiculos");

let arrayVehiculos = [];

calcularButton.addEventListener("click", function() {
  const optionValue = optionRadios[0].checked ? "1" : "2";
  const input = optionValue === "1" ? minutosInput : kilometrosInput;
  const inputValue = parseInt(input.value);

  if (isNaN(inputValue)) {
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'Por favor, ingrese un valor válido.',
      confirmButtonText: 'Reintentar',
    });
      return;
  }


  arrayVehiculos.forEach((vehiculo) => {
    const valor = optionValue === "1"
      ? valorPorMinutoServicio[vehiculo.nombre] * inputValue
      : valorPorKilometroRecorrido[vehiculo.nombre] * inputValue;

    const resultadoP = document.querySelector('.vehiculo-' + vehiculo.nombre + ' .resultado');
    resultadoP.innerHTML = "Precio: $" + valor;
  });
});

fetch('datos_vehiculos.json')
  .then(response => response.json())
  .then(data => {
    arrayVehiculos = data;
    generarDOMVehiculos();
  });

function generarDOMVehiculos() {
  arrayVehiculos.forEach((vehiculo, index) => {
    const div = document.createElement("div");
    div.className = "contentCardVehiculo vehiculo-" + vehiculo.nombre.replace(/ /g, '_');
    div.classList.add("col-xl-3", "col,md-6", "col-satisfies,-12")
    div.innerHTML = `
    <div class="card" style="width: 24rem;">
  <img src ="${vehiculo.url}" class="card-img-top" alt="vehiculo">
  <div class="card-body">
    <h3 class="card-title">${vehiculo.nombre}</h3>
    <p class="card-text">Capacidad: ${vehiculo.capacidad}</p>
    <br>
    <div class="row">
    <h4 class="resultado"></h4>
    <a class="btn btn-secondary" href="html/contacto.html">Alquilar</a>`
    contentVehiculos.appendChild(div);
  });
}