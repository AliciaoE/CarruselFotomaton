function Buscar(valor) {
  let encontrado = false;
  let indice = -1;
  let i = 0;
  let vueltas = imagenes.length;
  while (i < vueltas && !encontrado) {
    if (valor == imagenes[i].nombre) {
      indice = i;
      encontrado = true;
    }
    i++;
  }
  return indice;
}

function Mostrar() {
  let nombreImagen = prompt("Por favor, ingrese el nombre de la imagen:");
  let indice = Buscar(nombreImagen);
  if (indice !== -1) {
    alert("La imagen ya está insertada.");
    posicion = indice;
    mostrarImagen();
  } else {
    alert("La imagen no está insertada.");
  }
}

function Agregar() {
  let varNombre = prompt("indica el nombre de la imagen:");
  let indice = Buscar(varNombre);
  console.log(indice);
  if (indice == -1) {
    let varImagen =
      prompt("Indica nombre de la imagen jpg ( sin extensión):") + ".jpg";
    let varTitle = prompt("Indica el Tip de la imagen:");
    let varDescripcion = prompt("escribe una breve descrición:");

    const imagen2 = new Imagen(varImagen, varNombre, varTitle, varDescripcion);
    imagenes.push(imagen2);
    posicion = imagenes.length - 1;
    mostrarImagen();
    alert("La imagen ha sido agregada exitosamente.");
  } else {
    alert("La imagen ya existe.");
    posicion = indice;
    mostrarImagen();
  }
}

function Eliminar() {
  let varNombre = prompt("Indica el nombre de la imagen:");
  let indice = Buscar(varNombre);

  if (indice != -1) {
    let confirmacion = confirm(
      "¿Estás segura de que quieres eliminar la imagen?"
    );
    if (confirmacion) {
      imagenes.splice(indice, 1);
      console.log(indice)
      alert("La imagen ha sido eliminada");
      posicion = indice;
      mostrarImagen();
      // Aquí puedes agregar código para actualizar la posición actual y mostrar la imagen correspondiente
    } else {
      alert("No se ha eliminado la imagen");
      // Aquí puedes agregar código para realizar alguna acción adicional
    }
  }
}

function Modificar() {
  let nombreAnterior = prompt(
    "Introduce el nombre de la imagen que quieres modificar:"
  );
  let indice = Buscar(nombreAnterior);
  if (indice != -1) {
    let nuevoNombre = prompt("Introduce el nuevo nombre de la imagen:");
    let nuevaImagen = prompt("Introduce la nueva URL de la imagen:");
    let nuevoTitulo = prompt("Introduce el nuevo título de la imagen:");
    let nuevaDescripcion = prompt(
      "Introduce la nueva descripción de la imagen:"
    );
    imagenes[indice].nombre = nuevoNombre;
    imagenes[indice].imagen = nuevaImagen + ".jpg";
    imagenes[indice].titulo = nuevoTitulo;
    imagenes[indice].descripcion = nuevaDescripcion;
    alert("La imagen ha sido modificada.");
    posicion = indice;
    mostrarImagen();
  } else {
    alert("La imagen no existe en la lista.");
  }
}
function toggleDropdown() {
  var dropdownContent = document.getElementById("myDropdown");
  dropdownContent.classList.toggle("show");
}

window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    for (var i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}
