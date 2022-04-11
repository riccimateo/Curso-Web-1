function mostrarMenu() { // Función para mostrar el menú
  var barraNavegacion = document.getElementById("navegacion");
  if (barraNavegacion.className === "barra-navegacion") { // Si la clase de la barra de navegacion es "barra-navegacion"
    barraNavegacion.className += " responsive"; // Añadimos la clase "responsive"
  } else {
    barraNavegacion.className = "barra-navegacion"; // Si no, la clase es "barra-navegacion"
  }
}
