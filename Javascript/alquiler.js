// Definir los valores por minuto de servicio y valor por kilómetro recorrido para cada tipo de vehículo
const valorPorMinutoServicio = [
    0,
    601,
    541,
   555,
   823,
   823,
   923,
   1030,
   1917
  ];
  
  const valorPorKilometroRecorrido = [
    0,
    1042,
   1086,
   1143,
   978,
   1233,
   1295,
   1550,
   2751
  ];
  
  // Capturar la opción seleccionada por el usuario (valor por minuto de servicio o valor por kilómetro recorrido)
  const opcion = parseInt(prompt("Selecciona una opción:\n1. Valor por minuto de servicio\n2. Valor por kilómetro recorrido"));
  
  // Verificar la opción seleccionada y calcular el costo de alquiler
  let costoTotal = 0;
  
  if (opcion === 1) {
    // Calcular el costo de alquiler basado en el valor por minuto de servicio
    const tipoVehiculo = parseInt(prompt("Selecciona un tipo de vehículo:\n1. Camioneta\n2. Minivan\n3. Campero\n4. Hibrido\n5. Camioneta con platón\n6. Microbus de 12 pasajero\n7. Microbus de 19 pasajero\n8. Bus"));
    const minutos = parseInt(prompt("Ingrese la cantidad de minutos de alquiler"));
    
    costoTotal = valorPorMinutoServicio[tipoVehiculo] * minutos;
  } else if (opcion === 2) {
    // Calcular el costo de alquiler basado en el valor por kilómetro recorrido
    const tipoVehiculo = parseInt(prompt("Selecciona un tipo de vehículo:\n1. Camioneta\n2. Minivan\n3. Campero\n4. Hibrido\n5. Camioneta con platón\n6. Microbus de 12 pasajero\n7. Microbus de 19 pasajero\n8. Bus"));
    const kilometros = parseFloat(prompt("Ingrese la cantidad de kilómetros recorridos"));
    
    costoTotal = valorPorKilometroRecorrido[tipoVehiculo] * kilometros;
  }
  
  // Mostrar el costo total de alquiler
  console.log("El costo total de alquiler es: $" + costoTotal);
  alert("El costo total de alquiler es: $" + costoTotal)
  