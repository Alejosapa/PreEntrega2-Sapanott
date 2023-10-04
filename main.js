


const empleados = [];

function empleadosContratados() {
  // Lista de características disponibles
  const listaCaracteristicas = "¿Qué características desea ver? (nombre), (apellido), (edad), (rendimiento) o (sueldo)\n";
  const seleccionar = prompt(listaCaracteristicas + "Escriba aquí la característica a mostrar separada por comas (por ejemplo: nombre,edad)");

  const propiedadesSeleccionadas = seleccionar.split(",");

  let empleadosMostrados = "Empleados:\n";

  empleados.forEach((empleado) => {
    const mostrar = [];
    propiedadesSeleccionadas.forEach((opcion) => {
      switch (opcion.trim()) {
        case 'nombre':
          mostrar.push(empleado.nombre);
          break;
        case 'apellido':
          mostrar.push(empleado.apellido);
          break;
        case 'edad':
          mostrar.push(empleado.edad);
          break;
        case 'rendimiento':
          mostrar.push(empleado.rendimiento);
          break;
        case 'sueldo':
          mostrar.push(empleado.sueldo);
          break;
        default:
          break;
      }
    });

    empleadosMostrados += mostrar.join(", ") + "\n";
  });

  alert(empleadosMostrados);
}

function nuevoEmpleado(nombre, apellido, edad, rendimiento, sueldo) {
  empleados.push({ nombre, apellido, edad, rendimiento, sueldo });
}

function despedir() {
  let despedir = "Empleados contratados:\n";

  empleados.forEach((empleado, index) => {
    despedir += `${index + 1}. ${empleado.nombre} ${empleado.apellido}\n`;
  });

  const echar = parseInt(prompt(despedir + "¿A qué Empleado se debe despedir?"));

  if (isNaN(echar) || echar < 1 || echar > empleados.length) {
    alert("Empleado no encontrado");
  } else {
    empleados.splice(echar - 1, 1);
    alert("El trabajador será notificado al final del día");
  }
}

while (true) {
  const opcion = prompt("¡Hola! ¿Qué quieres hacer hoy? Ver (empleados), (contratar) nuevos empleados, (despedir) empleados o (volver) al escritorio");

  if (opcion === "empleados") {
    empleadosContratados();
  } else if (opcion === "contratar") {
    const nombre = prompt("Nombre del nuevo empleado");
    const apellido = prompt("Apellido");
    const edad = parseInt(prompt("Edad, debe ser mayor de 21"));
    const rendimiento = prompt("Rendimiento");
    const sueldo = prompt("Sueldo para cobrar");
    nuevoEmpleado(nombre, apellido, edad, rendimiento, sueldo);
    alert("Se revisará la solicitud del nuevo empleado.");
  } else if (opcion === "despedir") {
    despedir();
  } else if (opcion === "volver") {
    break;
  } else {
    alert("Por favor, elija una opción válida");
  }
}